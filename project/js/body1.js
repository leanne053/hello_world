// var divs = document.getElementsByTagName('div');
// for(i = 0; i > divs.length; i++){
//     divs[i].addEventListener('click', function(){
//     console.log(this.getBoundingClientRect());
//     });
// }

"use strict";

//최소로 줄일 수 있는 사이즈
var minWidth = 60;
var minHeight = 40;

//적용범위의 경계
var fullScreen_margins = -10;
var margins = 4;

//구성_ 변수설정
var clicked = null;
var onRightEdge, onBottomEdge, onLeftEdge, onTopEdge;
var rightScreenEdge, bottomScreenEdge;
var preSnapped;
var b,x,y;
var redraw = false;
var pane =document.getElementById('pane');
var ghost= document.getElementById('ghost');

function setBounds(element,x,y,w,h) {
    element.style.left = x +'px';
    element.style.top = y +'px';
    element.style.width = w + 'px';
    element.style.height = h + 'px'; 
}

// function hintHide() {
//     setBounds(ghost,b.left,b.top,b.width,b.height);
//     //해당 컴포넌트의 절대 위치와 크기 지정 x좌표, y좌표, w, h
//     ghost.style.opacity = 70;
    
//     //opacity는 값을 크게 주면 마우스를 click & drag 했을 시 pane div 뒤로 ghost div의 모습(?)이 보임

// }

//마우스이벤트
pane.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove',onMove);
document.addEventListener('mouseup',onUp);

//터치를 했을 때 이벤트
// 모바일의 개념
// pane.addEventListener('touchstart',onTouchDown);
// document.addEventListener('touchmove',onTouchMove);
// document.addEventListener('touchend',onTouchEnd);

// function onTouchDown(e) {
//     onDown(e.touches[0]);// 여기서 35번째 줄과 상이???
//     e.preventDefault();
// }

// function onTouchMove(e) {
//     onMove(e.touches[0]); // 여기서는 왜 e.preventDefault() 를 설정하지 않는지
// }

// function onTouchEnd(e) {
//     onDown(e.touches.length ==0)
//     onUp(e.changedTouches[0]);
// }

function onMouseDown(e) {
    onDown(e);
    e.preventDefault();
    //기본적으로 클릭 후 드래그할 경우 블럭설정이 되는 기능과 같은 기본 기능은 잠시 끄고 설정해 놓은 기능만 작동하기를 
    // 원할 때 e.preventDefault() 함수를 걸면 된다.
}

function onDown(e) {
    calc(e);

    var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;

    clicked = {
        x: x,
        //div pane이 만들어진 기준 x가 0이 됨.
        //marins 를 4를 줬는데 실제 cx와 x를 비교하면 8이 나오는 이유?
        y: y,   
        cx: e.clientX,
        //실제 window부터의 x 좌표의 위치
        cy: e.clientY,
        w: b.width,
        //클릭했을 때 당시 pane 의 너비
        h: b.height,
        isResizing: isResizing,
        //Resizing 이 수행된다면 true 로 그렇지 않으면 false 로 반환
        isMoving: !isResizing && canMove(),
        onTopEdge: onTopEdge,
        onLeftEdge: onLeftEdge,
        onRightEdge: onRightEdge,
        onBottomEdge: onBottomEdge
    }
    // console.log(x);
    // console.log(clicked.cx);
    // console.log(clicked.w);
    // console.log(clicked.isMoving);
}

function canMove() {
    //움직일 수 있는 공간 설정하기
    return x > 0 && x<b.width && y>0 && y<b.height && y<50;
    //X > 0 이고, x는 ghost 가로길이 보다 작은 값이고, y>0 이고, y는 ghost 세로길이보다 작고 50의 폭을 줌(50은 변경가능)
}
function calc(e) {
    b = pane.getBoundingClientRect();
    console.log(pane.style.top+'px');
    //getBoundingClientRect() 함수는 div pane 위치의 값을 불러온다.
    //여기에서 getBoudingClientRect()의 위치값은
    //bottom, height, left, right, top, width, x(여기에서 x의 값은 window에서 가로방향으로 떨어져 있는 정도),
    // y(window top에서 해당 div지점까지의 거리를 말함)
    x = e.clientX - b.left;
    //x 의 값은 window에서 부터의 클릭위치까지의 거리(가로) 점(clientX) 에서 div가 위치한 가로값을 뺀 값
    y = e.clientY - b.top;
    //y 의 값은 높이(위의 설명 위치와 같은데 가로 값아닌 세로 값)

    //전역변수에서 margins의 값은 4를 줌
    onTopEdge = y < margins;
    onLeftEdge = x < margins;
    onRightEdge = x >= b.width - margins;
    onBottomEdge = y >= b.height - margins;

    rightScreenEdge = window.innerWidth - margins;
    // 만약 div의 값을 (x,y)로 준다면 네개의 위치값(x,y)이 나온다 
    //rightScreenEdge의 값은 수식을 이용해 나온 값이 '50'이라 한다면 (50,y)형태가 된다.
    bottomScreenEdge = window.innerHeight - margins;
    //위와 같은 방식으로 y 값이 fix 된다
}
var e;

function onMove(ee) {
    calc(ee);

    e = ee;
    // console.log(e);
    redraw =true;
}

function animate() {
    requestAnimationFrame(animate);
    //화면이 띄워지고 있어야 콜백함수를 띄움. 즉, 애니메이션 구현 도중
    //다른 탭을 누르거나 인터넷을 잠시 최소화하면 그대로 멈춰있다는 이야기
    //게다가 콜백함수를 호출하는 시기를 브라우저 자체에서 결정함
    //setinvertal, setTimeout에서 delay 가 더욱 늦춰지는 치명적인 단점을 미리 예방할 수 있다는 의미가 도출

    if (!redraw) return;
    redraw =false;

    if(clicked && clicked.isResizing) {
        if(clicked.onRightEdge) pane.style.width = Math.max(x, minWidth) + 'px';
        //여기서의 x도 div pane 이 만들어진 시점으로 부터의 x(screen에서 부터가 아님)
        if(clicked.onBottomEdge) pane.style.height = Math.max(y,minHeight) + 'px';
        if(clicked.onLeftEdge) {

            var currentWidth = Math.max(clicked.cx - e.clientX + clicked.w, minWidth);
            //클릭한 시점의 x값에서 moving 후의 x값을 제하고 클릭했을 때의 가로길이값을 더한 값
            // console.log(clicked.cx);
            // console.log(e.clientX);
            // console.log(clicked.w);
            if(currentWidth > minWidth) {
                pane.style.width = currentWidth + 'px';
                pane.style.left = e.clientX + 'px';
            }
        }

        if(clicked.onTopEdge){
            var currentHeight = Math.max(clicked.cy - e.clientY + clicked.h, minHeight);
            //위에 적용한 방식과 같은 방식으로 세로길이의 값을 나타내는 변수
            if(currentHeight > minHeight) {
                pane.style.height = currentHeight + 'px';
                pane.style.top = e.clientY +'px';
            }
        }
        // hintHide();
     
        return;
    }

    if(clicked && clicked.isMoving) {
        // if (b.top < margins) {
        //     setBounds(ghost, b.x, onTopEdge, b.width, b.height);
        // }
        // if(b.top < fullScreen_margins || b.left < fullScreen_margins || b.right > window.innerWidth - fullScreen_margins || b.bottom > window.innerHeight - fullScreen_margins) {
        // //if(b.top < -10 || b.left < -10 || b.right > window.innerWidth-(-10) || b.bottom > window.innerHeight -(-10))  
        //     setBounds(ghost, 0, 0, window.innerWidth, window.innerHeight);
        //     ghost.style.opacity = 0.2;
        // } else if (b.top < margins) {
        //     //else if(b.top < 4)
        //     setBounds(ghost, 0, 0, window.innerWidth, window.innerHeight / 2);
        //     ghost.style.opacity = 0.2;
        // } else if(b.left < margins) {
        //     //else if(b.left < 4)
        //     setBounds(ghost, 0, 0, window.innerWidth / 2, window.innerHeight);
        //     ghost.style.opacity = 0.2;    
        // } else if(b.right > rightScreenEdge) {
        //     // rightScreenEdge = window.innerWidth - margins
        //     //여기는 왜 margins 이 아니고 rightScreenEdge 인지??
        //     console.log(b.right);
        //     console.log(rightScreenEdge);
        //     setBounds(ghost, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
        //     //여기에서 x값과 w값을 innerWidth/2로 주는 이유찾기 
        //     ghost.style.opacity = 0.2;
        // } else if(b.bottom >bottomScreenEdge) {
        //     setBounds(ghost, 0 ,window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
        //     ghost.style.opacity = 0.2;
        // }  else {
        //     hintHide();
        // }

        // if(preSnapped) {//preSnapped 존재이유!!
        //     setBounds(pane,
        //         e.clientX,
        //         Math.max(clicked.y,margins),
        //         preSnapped.width,
        //         preSnapped.height );
        //         console.log(preSnapped.width);

        //     // setBounds(pane, 
        //     // e.clientX - preSnapped.width / 2, 
        //     // e.clientY - Math.min(clicked.y,preSnapped.height), 
        //     // preSnapped.width, 
        //     // preSnapped.height);
        //     return;
        // }

        // 움직이기
        // if(pane.style.top < margins + 'px') pane.style.top = margins +'px';
        // else {
        //     pane.style.top = (e.clientY - clicked.y) + 'px';
            // hintHide();
            // }
        // pane.style.top = (e.clientY - clicked.y) + 'px';
        console.log("suru")
        // if(b.y < margins){
        //     pane.style.top = margins +'px';
        //     console.log(b.y);
            
        // }
        // return x > 0 && x<b.width && y>0 && y<b.height && y<50;
        // if(Math.abs(clicked.y - e.clientY)+'px' <= margins || Math.abs(e.clientY - clicked.y) <= margins ) {//pane.style.top = margins + 'px';
        // //console.log("top:"+pane.cy+'px');
        // console.log(clicked.y - e.clientY)+'px';
        // console.log(e.clientY-clicked.y)+'px';
        // return;
        // }
        
        // else {
            console.log("b.y:"+b.y);
        if(b.y < margins){
            // setBounds(pane, b.left, innerHeight-margins, pane.width,pane.height);
            b.top >= margins;
            console.log("dekiru");
            console.log(pane.style.top );
            b.y = margins + 'px'; 
            pane.style.top= b.y +'px' < margins;
        }
        pane.style.top = (e.clientY - clicked.y) + 'px';
            console.log(e.clientY);
            console.log(clicked.y);
        // }
        pane.style.left = (e.clientX - clicked.x) + 'px';
        // console.log("left:"+pane.style.left);

        return;
        }

        //마우스 클릭없이 마우스커서를 대상에 가져왔을 때 커서의 style
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

    // if (clicked && clicked.isMoving) {
    //     var snapped = {
    //         width: b.width,
    //         height: b.height
    //     }

        // if (b.top < margins) {
        //      setBounds(pane, b.x, onTopEdge, b.width, b.height);
        //      preSnapped = snapped;
        // }
        // if (b.top <fullScreen_margins || b.left < fullScreen_margins || b.right > window.innerWidth - fullScreen_margins || b.bottom > window.innerHeight - fullScreen_margins) {
        //     setBounds(pane, 0, 0, window.innerWidth, window.innerHeight);
        //     preSnapped = snapped;
        // } else if (b.top < margins) {
        //  // setBounds(pane, 0, 0, window.innerWidth, window.innerHeight / 2);
        //     setBounds(pane, 0, 0, window.innerWidth, window.innerHeight / 2);
        //     preSnapped = snapped;
        // } else if (b.left < margins) {
        //     setBounds(pane, 0, 0, window.innerWidth / 2, window.innerHeight);
        //     preSnapped = snapped;
        // } else if (b.right > rightScreenEdge) {
        //     setBounds(pane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
        //     preSnapped = snapped;
        // } else if (b.bottom > bottomScreenEdge) {
        //     setBounds(pane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
        //     preSnapped = snapped;
        // } else {
        //     preSnapped = null;
        // }
        
        // hintHide();
    // }
    clicked = null;
}
