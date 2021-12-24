// function programing is another popular approach to softWare development. in functional programming, code 
// is organized into smaller, basic functions that can be combined to build complex programs. 
// in this course, you`ll learn the core concepts of functional porgramming including pure functions, how
//  to avoid mutations,
// and how to cleaner code with methods like .map() and .filter().


// learn about functional programming
// INPUT->PROCESS->OUTPUT

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};