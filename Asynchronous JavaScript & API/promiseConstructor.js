const promise = new Promise((resolve,reject)=>{
    const success = Math.random() > 0.5;
    if(success){
        resolve('Operation Successful')
    }
    else{
        reject('Operation Unsuccessful')
    }
})

try{
    const response = await promise;
    console.log(response);
    
}
catch(err){
    console.log(err);
    
}