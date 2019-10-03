var specChar = ["!", "@", "#", "$", "%", "^", "&", "*"], numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], lowChar = [], upChar = [], mastArr = []
var password = "";

for (i = 0; i < 26; i++) {
    lowChar[i] = String.fromCharCode(97 + i);
    upChar[i] = String.fromCharCode(65 + i);
}
var charBox = document.getElementsByClassName("special")[0].firstElementChild;
var numBox = document.getElementsByClassName("numeric")[0].firstElementChild;
var lowBox = document.getElementsByClassName("lower")[0].firstElementChild;
var upBox = document.getElementsByClassName("upper")[0].firstElementChild;






//Event Listeners

//functions


function genPassword() {
   
    var minLen = parseInt(document.getElementById("minLength").value);
    var maxLen = parseInt(document.getElementById("maxLength").value);
    var len = Math.round(Math.random( )*(maxLen-minLen)+minLen); 
    
    var runFun = true, erCheck = "", erNumMin = "", erNumMax = "";
    if(charBox.checked || numBox.checked || lowBox.checked || upBox.checked){
       
    }else {
        runFun = false;
        erCheck = "Please make sure at least one box is checked \n"
    }
    if(minLen < 8){
        runFun = false;
        erNumMin = "Min length is less than 8 \n"
    }else if(minLen > 128){
        runFun = false;
        erNumMin = "Min length is greater than 128 \n"
    }else if(minLen == undefined){
        runFun = false;
        erNumMin = "Please Define Min Length \n"
        
    }else if(isNaN(minLen)){
        runFun = false;
        erNumMin = "Please make sure that Min Length is a Number \n"
        
    }
    
    if(maxLen < 8){
        runFun = false;
        erNumMax = "Max length is less than 8 \n"
    }else if(maxLen > 128){
        runFun = false;
        erNumMax = "Max length is greater than 128 \n"
    }else if(maxLen == undefined){
        runFun = false;
        erNumMax = "Please Define Max Length \n"
        
    }else if(isNaN(maxLen)){
        runFun = false;
        erNumMax = "Please make sure that Max Length is a Number \n"
        
    }

if (runFun){
    if (charBox.checked) {
        
        mastArr = mastArr.concat(specChar);
    }
    if (numBox.checked) {
        mastArr = mastArr.concat(numChar);
    }
    if (lowBox.checked) {
        mastArr = mastArr.concat(lowChar);
    }
    if (upBox.checked) {
        mastArr = mastArr.concat(upChar);
    }
    
    
for(i=0;i<len;i++){
   var mArrayIndex = Math.floor(Math.random()*mastArr.length);
password += mastArr[mArrayIndex];


}
document.getElementsByClassName("passwordText")[0].firstElementChild.innerText = password;
password = "";
mastArr = [];
}else{
    alert("The following errors must be fixed: \n"+erNumMin+ erNumMax+ erCheck)
}
}

function clipBoard(){
    var copyText = document.querySelector(".myText");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}