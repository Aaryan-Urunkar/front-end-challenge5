function getName(){
    var name=document.querySelector("#holderName").value;
    return name;
}
function updateName(){
    if(getName().length ==0){
        document.querySelector(".cardFront .details .name").textContent="JANE APPLESEED";
    } else{
        document.querySelector(".cardFront .details .name").textContent=getName();
    }
}

function getNo(){
    var no=document.querySelector("#holderNo").value;
    return no;
}
function updateNo(){
    if(getNo().length==0){
        document.querySelector(".cardFront #creditCardNo").textContent="0000 0000 0000 0000";
    } else {
        document.querySelector(".cardFront #creditCardNo").textContent=getNo().slice(0,20);
    }
}

function getMM(){
    var MM=document.querySelector("#expiryMonth").value;
    return MM;
}
function updateMM(){
    if(getMM().length==0){
        document.querySelector(".cardFront #months").textContent="00";
    } else {
        document.querySelector(".cardFront #months").textContent=getMM().slice(0,2);
    }
}

function getYY(){
    var YY=document.querySelector("#expiryYear").value;
    return YY;
}
function updateYY(){
    if(getYY().length==0){
        document.querySelector(".cardFront #years").textContent="00";
    } else {
        document.querySelector(".cardFront #years").textContent=getYY().slice(0,2);
    }
}

function getCVC(){
    var CVC=document.querySelector("#cvv").value;
    return CVC;
}
function updateCVC(){
    if(getCVC().length==0){
        document.querySelector(".cardBack .CVV").textContent="000";
    } else {
        document.querySelector(".cardBack .CVV").textContent=getCVC().slice(0,3);
    }
}

document.querySelector(".userDetails #holderName").addEventListener("change",getName);
document.querySelector(".userDetails #holderNo").addEventListener("change",getNo);
document.querySelector(".userDetails #expiryMonth").addEventListener("change",getMM);
document.querySelector(".userDetails #expiryYear").addEventListener("change",getYY);
document.querySelector(".userDetails #cvv").addEventListener("change",getCVC);
setInterval(updateName,1000);
setInterval(updateNo,1000);
setInterval(updateMM,1000);
setInterval(updateYY,1000);
setInterval(updateCVC,1000);

function confirmClick(){
    resetData();
    var bool=1;
    const textBoxes=document.querySelector(".userDetails").children;
    var len=textBoxes.length;
    for(var i=0;i<len-1;i++){
        const inputSet=textBoxes[i].querySelectorAll("input");
        for(var j=0;j<inputSet.length;j++){
            if(inputSet[j].value.length==0){
                inputSet[j].classList.add("errorM");
                textBoxes[i].querySelector("p").classList.add("error");
                bool=0;
            }
        }
    }
    if(bool==1){
        document.querySelector(".userDetails").style.display="none";
        document.querySelector(".Page2").classList.add("on");
    }
}
function resetData(){
    const textBoxes=document.querySelector(".userDetails").children;
    var len=textBoxes.length;
    for(var i=0;i<len-1;i++){
        const elementSet=textBoxes[i].querySelectorAll("input,p");
        for(var j=0;j<elementSet.length;j++){
            elementSet[j].classList.remove("error");
            elementSet[j].classList.remove("errorM");
        }
    }
}
document.querySelector(".btn").addEventListener("click",confirmClick);