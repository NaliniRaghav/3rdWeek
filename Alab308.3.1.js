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

let n = 72
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

// let input = prompt("Enter a number:");

let Input = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let Data = String(Input);
// console.log(Data);

let l = Data.length;
let firstposition =0;
let currentposition =0;
let lastpostion = 0



    //cut the string till ,
    //store in a cell
    //do this till you encounter a line /n
    //console.log()
   // repeat till you reach the length of the string
let cell1 =  "ID";
let cell2 = "NAME";
let cell3 = "OCCUPATION";
let cell4 = "AGE";
let currentCellNumber = 1;
let slicedString = "";
// console.log(cell1 + cell2 + cell3 +cell4);

for (i=0; i<l; i++) {

   if ( Data[i]==="," ) 

    {
         // slice everything from lastposition to i (comma to comma) 
         slicedString = Data.slice( lastpostion  ,i);

         lastpostion = i+1;    
         if (currentCellNumber == 1) {
            cell1 = slicedString;
         }  
         if (currentCellNumber == 2) {
            cell2 = slicedString;
         }
         if (currentCellNumber == 3) {
            cell3 = slicedString;
         }   
         currentCellNumber += 1;
    }
    let dataSlice = Data.slice(i, i+1);
    // console.log(dataSlice);
    if ( dataSlice == "\n") {
        slicedString = Data.slice( lastpostion  ,i);
        if (currentCellNumber == 4) {
            cell4 = slicedString;
         } 
         console.log(cell1, cell2, cell3, cell4);
         currentCellNumber = 1;
         lastpostion = i + 2;
    } 

   }


// 42,Bruce,Knight,41\n






