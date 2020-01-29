let name = "Crystal Agnew";
let age = 54;
let birthday = "December 22";
let detroitGC = true;

if ((detroitGC = true)) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday in on ${birthday}.`
  );
} 
else if ((detroitGC = false)) {
  console.log(
    `$My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday in on ${birthday}.`
  );
};

let lifeEvents = [
  "I was born in Lincoln Park, MI.",
  "I went to Wayne State University.",
  "My major was Library and Information Science.",
  "I am hoping to make a career change from librarian to web developer.",
];

for (let i = 0; i < lifeEvents.length; i++) { 
  console.log(lifeEvents[i]);
};

let counter=0;

while (true){
  let randomNumber = Math.floor(Math.random() * 10 +1);
  if  (randomNumber !==5) {
            counter++;
      console.log(`${randomNumber} !== 5`)   
        }
  else{
    counter++;
    console.log(` It took ${counter} iterations to randomly generate the number 5.`)
break;

  }
}