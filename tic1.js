document.getElementById("para").innerHTML="Player X turn";
let mySound = new Audio('Firework.mp3');
let anotherone=new Audio('boo.mp3');



let flag=1;
function win(){
let b1=document.getElementById("first").value;
let b2=document.getElementById("second").value;
let b3=document.getElementById("third").value;
let b4=document.getElementById("fourth").value;
let b5=document.getElementById("fifth").value;
let b6=document.getElementById("sixth").value;
let b7=document.getElementById("seventh").value;
let b8=document.getElementById("eighth").value;
let b9=document.getElementById("ninth").value;

//winning chances of player X


if(b1==='X' && b2==='X'&& b3==='X' ){
    document.getElementById("para").innerHTML="Player X wins!"; 
    document.getElementById("fourth").disabled=true;
    document.getElementById("fifth").disabled=true;
    document.getElementById("sixth").disabled=true;
    document.getElementById("seventh").disabled=true;
    document.getElementById("eighth").disabled=true;
    document.getElementById("ninth").disabled=true;
    
    
   
   
    }
    else if(b4==="X" && b5==='X'&& b6==='X' ){
        document.getElementById("para").innerHTML="Player X wins!"; 
        document.getElementById("first").disabled=true;
    document.getElementById("second").disabled=true;
    document.getElementById("third").disabled=true;
    document.getElementById("seventh").disabled=true;
    document.getElementById("eighth").disabled=true;
    document.getElementById("ninth").disabled=true;
    }
    else if(b7==='X' && b8==='X'&& b9==='X' ){
        document.getElementById("para").innerHTML="Player X wins!"; 
        document.getElementById("first").disabled=true;
    document.getElementById("second").disabled=true;
    document.getElementById("third").disabled=true;
    document.getElementById("fourth").disabled=true;
    document.getElementById("fifth").disabled=true;
    document.getElementById("sixth").disabled=true;
    }
    else if(b1==='X' && b4==='X'&& b7==='X' ){
        document.getElementById("para").innerHTML="Player X wins!"; 
        document.getElementById("second").disabled=true;
    document.getElementById("third").disabled=true;
    document.getElementById("fifth").disabled=true;
    document.getElementById("sixth").disabled=true;
    document.getElementById("eighth").disabled=true;
    document.getElementById("ninth").disabled=true;
    }
    else if(b5==='X' && b2==='X'&& b8==='X' ){
        document.getElementById("para").innerHTML="Player X wins!";
        document.getElementById("first").disabled=true;
        document.getElementById("third").disabled=true;
        document.getElementById("sixth").disabled=true;
        document.getElementById("seventh").disabled=true;
        document.getElementById("ninth").disabled=true;
    }
    else if(b6==='X' && b9==='X'&& b3==='X' ){
        document.getElementById("para").innerHTML="Player X wins!";
        document.getElementById("first").disabled=true;
        document.getElementById("second").disabled=true;
        document.getElementById("fourth").disabled=true;
    document.getElementById("fifth").disabled=true;
    document.getElementById("seventh").disabled=true;
    document.getElementById("eighth").disabled=true;
    }
    else if(b1==='X' && b9==='X'&& b5==='X' ){
        document.getElementById("para").innerHTML="Player X wins!";
        document.getElementById("sixth").disabled=true;
    document.getElementById("seventh").disabled=true;
    document.getElementById("eighth").disabled=true;
    document.getElementById("second").disabled=true;
    document.getElementById("third").disabled=true;
    document.getElementById("fourth").disabled=true;
    
    }
    else if(b5==='X' && b7==='X'&& b3==='X' ){
        document.getElementById("para").innerHTML="Player X wins!"; 
        document.getElementById("first").disabled=true;
        document.getElementById("second").disabled=true;
        document.getElementById("fourth").disabled=true;
        document.getElementById("sixth").disabled=true;
        document.getElementById("eighth").disabled=true;
    document.getElementById("ninth").disabled=true;
    }
    
    //winning chances of player O

    else if(b1==='O' && b2==='O'&& b3==='O' ){
        document.getElementById("para").innerHTML="Player O wins!"; 
        document.getElementById("fourth").disabled=true;
        document.getElementById("fifth").disabled=true;
        document.getElementById("sixth").disabled=true;
        document.getElementById("seventh").disabled=true;
        document.getElementById("eighth").disabled=true;
        document.getElementById("ninth").disabled=true;
        
        }
        else if(b4==='O' && b5==='O'&& b6==='O' ){
            document.getElementById("para").innerHTML="Player O wins!"; 
            document.getElementById("first").disabled=true;
        document.getElementById("second").disabled=true;
        document.getElementById("third").disabled=true;
        document.getElementById("seventh").disabled=true;
        document.getElementById("eighth").disabled=true;
        document.getElementById("ninth").disabled=true;
        }
        else if(b7==='O' && b8==='O'&& b9==='O' ){
            document.getElementById("para").innerHTML="Player O wins!"; 
            document.getElementById("first").disabled=true;
        document.getElementById("second").disabled=true;
        document.getElementById("third").disabled=true;
        document.getElementById("fourth").disabled=true;
        document.getElementById("fifth").disabled=true;
        document.getElementById("sixth").disabled=true;
        }
        else if(b1==='O' && b4==='O'&& b7==='O' ){
            document.getElementById("para").innerHTML="Player O wins!"; 
            document.getElementById("second").disabled=true;
        document.getElementById("third").disabled=true;
        document.getElementById("fifth").disabled=true;
        document.getElementById("sixth").disabled=true;
        document.getElementById("eighth").disabled=true;
        document.getElementById("ninth").disabled=true;
        }
        else if(b5==='O' && b2==='O'&& b8==='O' ){
            document.getElementById("para").innerHTML="Player O wins!";
            document.getElementById("first").disabled=true;
            document.getElementById("third").disabled=true;
            document.getElementById("sixth").disabled=true;
            document.getElementById("seventh").disabled=true;
            document.getElementById("ninth").disabled=true;
        }
        else if(b6==='O' && b9==='O'&& b3==='O' ){
            document.getElementById("para").innerHTML="Player O wins!";
            document.getElementById("first").disabled=true;
            document.getElementById("second").disabled=true;
            document.getElementById("fourth").disabled=true;
        document.getElementById("fifth").disabled=true;
        document.getElementById("seventh").disabled=true;
        document.getElementById("eighth").disabled=true;
        }
        else if(b1==='O' && b9==='O'&& b5==='O' ){
            document.getElementById("para").innerHTML="Player O wins!";
            document.getElementById("sixth").disabled=true;
        document.getElementById("seventh").disabled=true;
        document.getElementById("eighth").disabled=true;
        document.getElementById("second").disabled=true;
        document.getElementById("third").disabled=true;
        document.getElementById("fourth").disabled=true;
        
        }
        else if(b5==='O' && b7==='O'&& b3==='O' ){
            document.getElementById("para").innerHTML="Player O wins!"; 
            document.getElementById("first").disabled=true;
            document.getElementById("second").disabled=true;
            document.getElementById("fourth").disabled=true;
            document.getElementById("sixth").disabled=true;
            document.getElementById("eighth").disabled=true;
        document.getElementById("ninth").disabled=true;
        }
        else if((b1==='X'|| b1==='O') &&( b2==='X'||b2==='O')&& (b3==='X'|| b3==='O')&&(b4==='X'||b4==='O')&&(b5==='X'||b5==='O')&&
                (b6==='X'||b6==='O')&&(b7==='X'||b7==='O')&&(b8==='X'||b8==='O')&&(b9==='X'||b9==='O')){
                    document.getElementById("para").innerHTML="Match is Draw!!";
                }

                //pop up box

        if(document.getElementById("para").innerHTML==="Player O wins!"){

            document.getElementById("alert").style.visibility="visible";
            document.getElementById("alert").innerHTML+= '<i class="fa-solid fa-champagne-glasses" ></i>';
            
            document.getElementById("alert").innerHTML+="Player O wins";
           
            document.getElementById("alert").innerHTML+= '<i class="fa-solid fa-champagne-glasses" ></i>';
            mySound.play();
          

        }
        else if(document.getElementById("para").innerHTML==="Player X wins!"){
            
            document.getElementById("alert").style.visibility="visible";
            
            document.getElementById("alert").innerHTML+= '<i class="fa-solid fa-champagne-glasses" ></i>';
            
            document.getElementById("alert").innerHTML+="Player X wins";
            
            document.getElementById("alert").innerHTML+= '<i class="fa-solid fa-champagne-glasses" ></i>';
            mySound.play();
            
            
            
        }
        else if(document.getElementById("para").innerHTML==="Match is Draw!!"){

            document.getElementById("alert").style.visibility="visible";
            
            document.getElementById("alert").innerHTML+= '<i class="fa-regular fa-face-sad-tear"></i>';
            
            document.getElementById("alert").innerHTML+="Match is Draw!!";
            anotherone.play();
          
        }
        
      
    }   
        
     //resetting the tic-tac-toe
     function func(){
       document.getElementById("first").value="";
       document.getElementById("second").value="";
       document.getElementById("third").value="";
       document.getElementById("fourth").value="";
       document.getElementById("fifth").value="";
       document.getElementById("sixth").value="";
       document.getElementById("seventh").value="";
       document.getElementById("eighth").value="";
       document.getElementById("ninth").value="";
       document.getElementById("first").disabled=false;
       document.getElementById("second").disabled=false;
       document.getElementById("third").disabled=false;
       document.getElementById("fourth").disabled=false;
       document.getElementById("fifth").disabled=false;
       document.getElementById("sixth").disabled=false;
       document.getElementById("seventh").disabled=false;
       document.getElementById("eighth").disabled=false;
       document.getElementById("ninth").disabled=false;
     }

   
     function func1(){
        if(flag===1){
            {if(flag===1)
               document.getElementById("para").innerText="Player O turn";
            else 
            document.getElementById("para").innerText="Player X turn";}
            document.getElementById('first').value='X';
            document.getElementById('first').disabled=true;
            
            flag=0;win();
        }
        else
        {   {if(flag===1)
            document.getElementById("para").innerText="Player O turn";
         else 
         document.getElementById("para").innerText="Player X turn";}
            document.getElementById('first').value='O';
            document.getElementById('first').disabled=true;
            flag=1;win();
        }
     }
     function func2(){
        if(flag===1){
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('second').value='X';
            document.getElementById('second').disabled=true;
            flag=0;win();
        }
        else
        {
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('second').value='O';
            document.getElementById('second').disabled=true;
            flag=1;win();
        }
     }
     function func3(){
        if(flag===1){
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('third').value='X';
            document.getElementById('third').disabled=true;
            flag=0;win();
        }
        else
        { {if(flag===1)
            document.getElementById("para").innerText="Player O turn";
         else 
         document.getElementById("para").innerText="Player X turn";}
            document.getElementById('third').value='O';
            document.getElementById('third').disabled=true;
            flag=1;win();
        }
     }
     function func4(){
        if(flag===1){
            {if(flag===1)
                document.getElementById("para").innerText="Player 0 turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('fourth').value='X';
            document.getElementById('fourth').disabled=true;
            flag=0;
        }
        else
        { {if(flag===1)
            document.getElementById("para").innerText="Player O turn";
         else 
         document.getElementById("para").innerText="Player X turn";}
            document.getElementById('fourth').value='O';
            document.getElementById('fourth').disabled=true;
            flag=1;
        }
     }
     function func5(){
        if(flag===1){
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('fifth').value='X';
            document.getElementById('fifth').disabled=true;
            flag=0;
        }
        else
        {
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('fifth').value='O';
            document.getElementById('fifth').disabled=true;
            flag=1;
        }
     }
     function func6(){
        if(flag===1){
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('sixth').value='X';
            document.getElementById('sixth').disabled=true;
            flag=0;
        }
        else
        {
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('sixth').value='O';
            document.getElementById('sixth').disabled=true;
            flag=1;
        }
     }
     function func7(){
        if(flag===1){
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('seventh').value='X';
            document.getElementById('seventh').disabled=true;
            flag=0;
        }
        else
        {
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('seventh').value='O';
            document.getElementById('seventh').disabled=true;
            flag=1;
        }
     }
     function func8(){
        if(flag===1){
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('eighth').value='X';
            document.getElementById('eighth').disabled=true;
            flag=0;
        }
        else
        {
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('eighth').value='O';
            document.getElementById('eighth').disabled=true;
            flag=1;
        }
     }
     function func9(){
        if(flag===1){
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('ninth').value='X';
            document.getElementById('ninth').disabled=true;
            flag=0;
        }
        else
        {
            {if(flag===1)
                document.getElementById("para").innerText="Player O turn";
             else 
             document.getElementById("para").innerText="Player X turn";}
            document.getElementById('ninth').value='O';
            document.getElementById('ninth').disabled=true;
            flag=1;
        }
     }

