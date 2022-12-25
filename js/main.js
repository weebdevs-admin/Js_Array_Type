var elAll = document.querySelector('.all')
var elBool = document.querySelector('.bool')
var elNum = document.querySelector('.num')
var elStr = document.querySelector('.str')
var allArr = ['C','Js',true,12,10,'Python',false,100,true,false,false,'Swift']
var bool = []
var num = []
var str = []


    for(var i = 0; i<=allArr.length; i++){
        if (allArr[i]> 1){
            num.push(allArr[i])
        }
        if(allArr[i] <= true){
            bool.push(allArr[i])

        }
        if (allArr[i] <= String){
            str.push(allArr[i])
        }
       
       
        
        
    }  
    
       
        
        
    
elAll.textContent=  "Barcha Rorxatlar: "+allArr
elBool.textContent= "Boolean Rorxatlar: "+bool
elNum.textContent="Number Rorxatlar: "+ num
elStr.textContent="String Rorxatlar: "+ str
