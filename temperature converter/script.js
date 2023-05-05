function converter(){
    var degrees=document.getElementById("degrees").value;
    
    if(degrees!=''){
        var type=document.getElementById("type").value;
        if(type=="kelvin"){
            var result=degrees*1+273;
            document.getElementById("result").value=result+" Kelvin";
        }else{
            var result=degrees*9/5+32;
            document.getElementById("result").value=result+" Fahrenheit";
        }
        

    }else{
        window.alert("Please enter the degrees!")
        
    }
}