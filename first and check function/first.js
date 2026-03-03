
function alertMessage(msg) {
    alert("information: " + msg);
}
const alertMessage2=()=>{
    alert("yes yes yes");
}
function addition(num1, num2,num3) {
    return num1 + num2 + num3;
}
function pass_fail(score) {
    let result= 'fail';
    if (score >= 60) {
        result = 'pass';
    }
    return result;

}
function Generateaddition(num1, num2,num3) {
    document.getElementById("result1").innerHTML='Result: ' +addition(num1, num2,num3);
}
function GenerateResult(score){
    document.getElementById("result2").innerHTML='Result: ' +pass_fail(score);
}