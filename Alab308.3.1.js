let Div3 = 0
let Div5 = 0


  
for( i=1; i<100; i++ )
  { Div3 = (i%3);
    Div5 = (i%5);
     

    
   
    if ((Div3==0) && (Div5==0))
      console.log(i + " Fizz +Buzz")


      else      {     if (Div5 ==0){
                      console.log(i + " Buzz")}
                      else { if (Div3 == 0 )
                        console.log(i + " Fizz ")}
       
       }
                
  }  
   





