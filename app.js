var userName = prompt("Please enter you name below","");

var userQuestion = prompt(Ask the Magic 8-Ball a question","");

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall ='It is certain';
    break;
  case 1:
    eightBall ='It is decidedly so';
    break;
  case 2:
    eightBall ='Reply hazy try again';
    break;
  case 3:
    eightBall ='Cannot predict now';
    break;
  case 4:
    eightBall ='My sources say no';
    break;
  case 5:
    eightBall ='Outlook not so good';
    break;
  case 6:
    eightBall ='Signs point to yes';
    break;
  case 7:
    eightBall ='It is certain';
    break;
  case 8:
    eightBall ='It is certain';
    break;
}

console.log(userName + " asked:" + userQuestion);

console.log("The 8-Ball's answer:" + eightBall);
