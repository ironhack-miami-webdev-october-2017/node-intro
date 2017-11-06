// import the "chalk" package into our program so we can use it
// (sharing code through global variables isn't really a thing in Node.js)
var chalk = require('chalk');
      //               |
      // npm install chalk

// import the "kirby-dance" package into our program so we can use it
var kirbyDance = require('kirby-dance');
           //                  |
           // npm install kirby-dance


console.log( chalk.green('Hello, Node.js!') );


var arr = [1, 2, 3, 4, 5];


arr.forEach(function (oneNumbah) {
    console.log( chalk.bgYellow('Current number: ' + oneNumbah) );
});

console.log( chalk.bgCyan.red('You can combine styles too.') );



console.log(
  chalk.magenta(
    kirbyDance(7)
  )
);
