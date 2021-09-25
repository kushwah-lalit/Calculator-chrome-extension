var buttons = document.querySelectorAll("button");
var display = document.querySelector("#input");
var op1=0;
var op2=null;
var operator=null;
function perform(){
    var value=this.getAttribute('data-value');
    var text=display.textContent;
    if(value=="+"){
        operator=value;
        op1=parseFloat(text);
        display.textContent="";
    }else if(value=="-"){
        operator=value;
        op1=parseFloat(text);
        display.textContent="";
    }else if(value=="*"){
        operator=value;
        op1=parseFloat(text);
        display.textContent="";
    }else if(value=="/"){
        operator=value;
        op1=parseFloat(text);
        display.textContent="";
    }else if(value=="ac"){
        op1=0;
        op2=null;
        operator=null;
        display.textContent="";
    }else if(value=="negative"){
        op1=parseFloat(text);
        op1=-1*op1;
        display.textContent=op1;
    }else if(value=="%"){
        op1=parseFloat(text);
        op1=op1/100;
        display.textContent=op1;
    }else if(value=="."){
        if(!text.includes('.')){
          if(text==""){
           display.textContent="0." ;
        }else{
            display.textContent+="."; 
        }  
        }
    }else if(value=="="){
        op2=parseFloat(text);
        // if(operator=="/"){
        //     if(op2==0){
        //        display.textContent="Error"; 
        //         op1=0;
        //         op2=null;
        //         operator=null;
        //     }
        // }
        var result=eval(op1+' '+operator+' '+op2);
        display.textContent=result;
        op1=0;
        op2=null;
        operator=null;
    }else{
        display.textContent+=value;
    }
    
}
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',perform);
}