//처음 시작시 drag 와 resize function 실행되게 하기
window.onclick = function() {
    initDragElement();
    initResizeElement();
}

function initDragElement() {
    var margins=30;
    var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
    //popup class 의 div 들의 요소를 popups 변수에 담음
    var popups = document.getElementsByClassName("popup");
    var elmnt = null;
    var currentZIndex =100; 

    //threshold를 지날 때 z-index 값을 reset 해준다.
    for(var i=0; i< popups.length ; i++) {
        var popup = popups[i];
        var header = getHeader(popup);
        //popsup[0] 부터 차례차례 배열형태로 popup 변수에 담는다.
        // 각각 담은 popup 변수에 해당하는 popup-header element 를 찾는다. 
        //  찾은 popup-header element 를 headerItems에 담는다.

        // function getHeader(element) {
        //     var headerItems = element.getElementsByClassName("popup-header");
    
        //     if(headerItems.length===1) {
        //         return headerItems[0];
        //     }
    
        //     return null;
        // }
        popup.onmousedown = function() {
            this.style.zIndex = ""+ ++currentZIndex;
        }

        if(header) {
            header.parentPopup = popup;
            header.onmousedown = dragMouseDown;
        }
    }

    function dragMouseDown(e) {
        elmnt = this.parentPopup;
        elmnt.style.zIndex =""+ ++currentZIndex;
        
        //변수 e의 값은 e의 값이 있는 경우는 e값을, 없는 경우는 window.event를 반환한다.
        e = e || window.event;
        //시작했을 때 마우스 커서 위치
        pos3 = e.clientX;
        pos4 = e.clientY;
        // console.log(pos3);
        // console.log(pos4);
        // console.log("can not?");
        // if(popup.width + margins >= pos3) {
            // console.log("lol");
            // pos3 = popup.width + margins;
            // console.log(po3);
        // }
        document.onmouseup = closeDragElement;
        //커서가 움직일 때 function 을 부름
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        
        if(!elmnt) {
            return;
        }
        
        e = e || window.event;
        //새로운 커서 위치 계산하기
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        //north-east 지점의 x,y의 좌표 (pos3, pos4)
        pos3 = e.clientX;
        pos4 = e.clientY;
        // if(pos4-margins){
        //     pos4 = margins;
        // }
        // if(window.innerWidth - margins <= pos3){
        //     console.log("can?");
        //     pos3 = innerWidth-margins;
        // }

        //element의 새로운 위치 set하기
        console.log(pos2);
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        console.log(pos2);
        if(elmnt.offsetTop<=0){
            console.log("dekiru?");
            elmnt.style.top = elmnt.offsetTop - 4;
            console.log(elmnt.style.top);
        }
        console.log(elmnt.style.top);     
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        console.log(elmnt);
    }

    function closeDragElement() {
        //마우스 버튼이 released 될 때 움직임을 멈춘다
        document.onmouseup = null;
        document.onmousemove = null; 
    }
    function getHeader(element) {
        var headerItems = element.getElementsByClassName("popup-header");

        if(headerItems.length===1) {
            return headerItems[0];
        }

        return null;
    }
}

function initResizeElement() {
    var popups = document.getElementsByClassName("popup");
    var element = null;
    var startX, startY, startWidth, startHeight;

    for (var i = 0; i < popups.length; i++) {
        var p = popups[i];

        var right = document.createElement("div");
        right.className = "resizer-right";
        p.appendChild(right);
        right.addEventListener("mousedown", initDrag, false);
        right.parentPopup = p;

        var bottom = document.createElement("div");
        bottom.className = "resizer-bottom";
        p.appendChild(bottom);
        bottom.addEventListener("mousedown", initDrag, false);
        bottom.parentPopup = p;
        
        var both = document.createElement("div"); 
        both.className = "resizer-both";
        p.appendChild(both);
        both.addEventListener("mousedown", initDrag, false);
        both.parentPopup = p;
    }

    function initDrag(e) {
        element = this.parentPopup;

        startX = e.clientX;
        startY = e.clientY;
        startWidth = parseInt(
            document.defaultView.getComputedStyle(element).width, 10
        );
        console.log(startX);
        console.log(sta)
        startHeight = parseInt(
            document.defaultView.getComputedStyle(element).height, 10
        );
        document.documentElement.addEventListener("mousemove", doDrag, false);
        document.documentElement.addEventListener("mouseup", stopDrag, false);
    }

    function doDrag(e) {
        element.style.width = startWidth + e.clientX -startX + "px";
        element.style.height = startHeight + e.clientY -startY + "px";
    }
    function stopDrag() {
        document.documentElement.removeEventListener("mousemove", doDrag, false);
        document.documentElement.removeEventListener("mouseup",stopDrag, false);
    }
}