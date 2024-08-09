let Div3 = 0;
let Div5 = 0;
let i = 0;

for (i = 1; i < 100; i++) {
  Div3 = i % 3;
  Div5 = i % 5;

  if (!(Div3 == 0 || Div5 == 0)) {
    console.log(i);
  } else {
    if (Div3 == 0 && Div5 == 0) console.log(i + "  Fuzz Buzz");
    else {
      if (Div3 == 0) console.log(i + "  Fuzz ");
      else if (Div5 == 0) console.log(i + "  Buzz ");
    }
  }
}

let input = prompt("Enter a number:");

let n = Number(input);
let P =0;
let currentNumberIsPrime = true;
let foundPrime = false;


for (i=n+1; (foundPrime==false); i++) 
  
 {
  
  for (j=2; j<i; j++) { 
   
    if ((i%i==0)&&(i%1==0)&&(i%j==0))
    {
    
    currentNumberIsPrime = false;
    break;

    }
  
 }
 if (currentNumberIsPrime == true) {
  console.log("Next prime number is " + i);
  break;
}

else {
  currentNumberIsPrime = true;
}
}


        
