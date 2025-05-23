const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})
    promiseOne.then(function(){
        console.log("promised consumed");
        
    })

