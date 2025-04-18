//we are definig the function 
function demo(){
    console.log("kavya");
    
}
demo();

//passing parameters in function
function addNum(num1,num2){
    console.log(num1+num2);
}
addNum(1,"3");//here what we pass is arguments

function num(num1,num2){
    const result=num1+num2;
    return result;
}
 const result=num(10,23);
console.log("Result=",result);

function demoTest(name){
    if(name===undefined){
        console.log("name exist");
        return;
    }
    return '${username} just logged in'
}
console.log(demoTest());

