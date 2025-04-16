let str = 'DRAGON'

function reverseStr(str){

    if(str.length===0){
        return '';
    }
    else{
          
        return str.slice(str.length - 1) +reverseStr(str.slice(0,str.length - 1))
    }


}

console.log(reverseStr(str))