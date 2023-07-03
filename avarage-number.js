 function getAvarage(assigenemt1, assigenemt2, assigenemt3) {
     const total = assigenemt1 + assigenemt2 + assigenemt3;
     const average = total / 3;
     return average;
 }

 const assigenemt1Marks = 60;
 const assigenemt2Marks = 59;
 const assigenemt3Marks = 60;

 var myAvarege = getAvarage(assigenemt1Marks, assigenemt2Marks, assigenemt3Marks);
 console.log("My avarage so far: " + myAvarege);