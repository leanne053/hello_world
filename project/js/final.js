//최소로 줄일 수 있는 사이즈
var minWidth = 60;
var minHeight = 40;

//스크린에서 margin 주기
var margins =4;

//전역변수 설정하기
var clicked = null;
var onRightEdge, onBottomEdge, onLeftEdge, onTopEdge;
var b,x,y;
var redraw = false;
var pane = document.getElementById("pane");

//element 에 요소에 대한 x(가로)좌표값, y(세로)좌표값, element의 너비, element의 높이 setting 해주기
function setBounds(element, x, y, w, h){
    element.style.left = x +'px';
    element.style.top = y + 'px';
    element.style.width = w + 'px';
    element.style.height = h + 'px'; 
}

//마우스 조작(클릭시) 이벤트걸어주기
pane.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMove);
document.addEventListener('mouseup', onUp);

//마우스를 클릭한 순간의 function 설정하기
function onMouseDown(e){
    onDown(e);
    e.preventDefault();
    //기존 onMouseDown에 가지고 있는 문자 드래그 블럭설정 잠시 끄기
}

function onDown(e) {
    calc(e);

    var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;
    //size 변경에  대한 변수 설정
    
    clicked = {
        x: x,
        y: y,
        cx: e.clientX,
        cy: e.clientY,
        w: b.width,
        h: b.height,
        isResizing: isResizing,
        isMoving: !isResizing && canMove(),
        onTopEdge: onTopEdge,
        onLeftEdge: onLeftEdge,
        onBottomEdge: onBottomEdge,
        onRightEdge: onRightEdge 
    }
}
function canMove() {
// 움직일 수 기능을 하는 바 좌표 설정하기
    return 0 < x && x < b.width && 0 < y && y < b.height && y < 50;
    // x좌표는 0 < x < b.width, y좌표는 0 < y < b.height 이고  
    //조금 더 세로 길이를 세분화해서 지정해주고자 해서 y<50 값을 넣음
}
function calc(e) {
    b = pane.getBoundingClientRect();
    //b 변수에 div pane 위치 값을 불러오는 함수
    x = e.clientX - b.left;
    //x 변수는 클릭한 위치에서 pane left의 x 값을 뺀 값
    y = e.clientY - b.top;
    //y 변수는 클릭한 위치에서 pane top의 y 값을 뺀 값

    //전역변수에서 margins의 값은 4를 줌
    onTopEdge = y < margins;
    onLeftEdge = x < margins;
    onRightEdge = x >= b.width - margins;
    onBottomEdge = y >= b.height - margins;

    rightScreenEdge = window.innerWidth - margins;
     //  만약 div의 값을 (x,y)로 준다면 네개의 위치값(x,y)이 나온다 
    //rightScreenEdge의 값은 수식을 이용해 나온 값이 '50'이라 한다면 (50,y)형태가 된다.
    bottomScreenEdge = window.innerHeight - margins;
    //위와 같은 방식으로 y값 fix

    //div가 margin 내에서만 크기조절 및 이동가능하도록 제약주기
    if(b.top <= margins || b.left <= margins || margins >= innerWidth - b.width - b.left || margins >= innerHeight - b.height - b.top || b.height >= innerHeight - margins) {
        if(b.top <= margins && margins >= innerWidth - b.width - b.left){
            //top 과 right 쪽 마진 내에서 이동하게 제약걸기
            pane.style.top = margins;
            pane.style.left = innerWidth - margins - b.width;
        }  else if(b.left <= margins && b.top <= margins) {
            //top 과 left 쪽 마진 내에서 이동하게 제약걸기
            pane.style.top = margins;
            pane.style.left = margins;
        } else if(margins >= innerHeight - b.height - b.top && margins >= innerWidth - b.width - b.left){
            //bottom 과 right 쪽 마진 내에서 이동하게 제약걸기
            pane.style.left = innerWidth - margins - b.width;
            pane.style.top = innerHeight - margins - b.height;
        } else if(margins >= innerHeight - b.height - b.top && b.left <= margins) {
            //bottom 과 left 쪽 마진 내에서 이동하게 제약걸기
            pane.style.left = margins;
            pane.style.top = innerHeight - margins - b.height;
        } else if(b.top <= margins && margins >= innerHeight - b.height - b.top) {
            //bottom 과 top 쪽 마진 내에서만 늘어나게 제약걸기 
            setBounds(pane, b.left, b.top, pane.style.width, window.innerHeight-(margins*3));
        } else if(b.top <= margins) {
            //top fix
            pane.style.top = margins;
        } else if(margins >= innerHeight - b.height - b.top) {
            // bottom fix
            pane.style.top = innerHeight - margins - b.height;
        } else if(margins >= innerWidth - b.width - b.left) {
            //right fix
            pane.style.left = innerWidth - margins - b.width;
        } else if(b.left <= margins) {
            //left fix
            pane.style.left = margins;
        } //else if(b.height >= innerHeight - margins) {
        //     pane.style.height = innerHeight - margins;
        // }
    }
}
var e;

function onMove(ee) {
    //마우스를 움직일 때마다 그 위치의 값을 불러올 수 있게 해주는 함수
    calc(ee);
    e = ee;
    redraw = true;
}

function animate() {
    requestAnimationFrame(animate);
    //callback 함수를 호출하는 시기를 브라우저 자체에서 결정하고 
    //setinvertal, setTimeout에서의 delay 늦쳐지는 점 보완, 0.167 만에 반응
    //화면이 띄워지고 있을 때 콜백함수를 띄움
    //애니메이션 구현 도중 다른 탭을 누르거나 하면 그대로 멈춰있음?

    if(!redraw) return;
    //redraw 가 false이면 기능 구동을 안 함.
    redraw = false;

    if(clicked && clicked.isResizing) {
        if(clicked.onRightEdge) pane.style.width = Math.max(x, minWidth) + 'px';
        if(clicked.onBottomEdge) pane.style.height = Math.max(y, minHeight) + 'px';
        if(clicked.onLeftEdge) {
            var currentWidth = Math.max(clicked.cx - e.clientX + clicked.w, minWidth);
            //clicked.cx-e.clientX 는 클릭한 시점의 clientX 값에서 현 움직인 clientX를 뺀 값 
            if(currentWidth > minWidth) {
                pane.style.width = currentWidth + 'px';
                //Resize가 적용된 너비값 
                pane.style.left = e.clientX + 'px';
                //Resize된 pane의 left 값을 설정
            }
        }
        if(clicked.onTopEdge) {
            var currentHeight = Math.max(clicked.cy - e.clientY + clicked.h, minHeight);
            //클릭한 y 위치에서 div의 y값을 빼고 resize전 높이값을 더한 값과 최소 높이값을 비교하여 큰 값을 현 높이값을 넣기
            if(currentHeight > minHeight){
                pane.style.height = currentHeight + 'px';
                pane.style.top = e.clientY + 'px';
            }
        }
        return;   
    }

    if(clicked && clicked.isMoving) {
    //움직이는 바를 클릭해서 움직일 때    
        pane.style.top = (e.clientY - clicked.y) + 'px';
        pane.style.left = (e.clientX - clicked.x) + 'px';
        return;
    }
    //마우스 클릭없이 커서를 대상 div에 가져왔을 때 커서 style 설정하기
    if(onRightEdge && onBottomEdge || onLeftEdge && onTopEdge) {
        pane.style.cursor = 'nwse-resize';
    } else if (onLeftEdge && onBottomEdge || onRightEdge && onTopEdge) {
        pane.style.cursor = 'nesw-resize';
    } else if (onRightEdge || onLeftEdge) {
        pane.style.cursor = 'ew-resize';
    } else if (onBottomEdge || onTopEdge) {
        pane.style.cursor = 'ns-resize';
    } else if (canMove()) {
        pane.style.cursor = 'move';
    } else {
        pane.style.cursor = 'default';
    }
}
animate();

function onUp(e) {
    calc(e);
    clicked = null;
}
