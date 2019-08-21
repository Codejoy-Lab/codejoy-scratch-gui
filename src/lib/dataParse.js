export default function(data){
    
    if(data!==undefined && data!==null){
        if (data.targets && Array.isArray[data.targets]){
            data.targets.forEach(ele => {
                if(typeof ele === "object"){
                    for(let key in ele){
                        // console.log(key)
                        switch(typeof ele[key]){
                            case "object":
                                if(Array.isArray(ele[key])){
                                    checkInnerArr(ele[key])
                                }else{
                                    checkInnerObj(ele[key])
                                }
                                break;
                            default:
                                break;
                        }
                    } 
                }
            });
        }else{
            // for(let key in element){
            checkInnerObj(data.targets)
            // } 
        }
        console.log(data)
        return data
    }else{
        return {err:"empty data"}
    }
}

function checkInnerArr(arr){
    arr.forEach((element,ind) => {
        if (Array.isArray(element)){
            const newObj = convertArrtoObj(element)
            arr[ind]=newObj
        }
        // else{
        //     if (typeof element === "object"){
        //         checkInnerObj(element)
        //     }
        // }
    })
}

function checkInnerObj(obj){
    for(let key in obj){
        if(typeof obj[key] ==="object"){
            if(Array.isArray(obj[key])){
                checkInnerArr(obj[key])
            }else{
                checkInnerObj(obj[key])}
        }
    }
    
}

function convertArrtoObj(arr){
    if(Array.isArray(arr)){
        if(arr.length===0){
            return {}
        }else{
            var tempObj = {};
            var id = 0;
            arr.forEach(e=>{
                tempObj[id]=e
                id++
            })
            return tempObj
        }
    }
}