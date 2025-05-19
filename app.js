// if sign in is correct, will display newsfeed

// i want to check the database for un and pw match with a loop
// if loop finds match
// return newsfeed timeline

// check db
var database = [
  {
    username: "edward",
    password: "secret",
  },
  {
    username: "steven",
    password: "secret1",
  },
  {
    username: "oscar",
    password: "secret2",
  },
];

// return timeline
var newsfeed = [
  {
    username: "edward",
    timeline: "JS is cool",
  },
  {
    username: "steven",
    timeline: "Help! i'm confused",
  },
  {
    username: "oscar",
    timeline: "I have a lot of ideas on what to build",
  },
];

// data we get from our user
var usernamePrompt = prompt("enter username: ");
var passwordPrompt = prompt("enter password: ");

// checks if user entry is valid
// loops over database, if matches, 
// return boolean of true or false
function validator(user, pass) {
  // as we loop over database, do a check
  // true segment
  for (var i = 0; i < database.length; i++) {
    // each iteration of database
    // if username in database matches data our user puts in
    if (
      database[i].username === user &&
      database[i].password === pass
    ) {
      return true;
    }
  }
  // false segment
  return false;
}

// our sign in accepts arguments that we can dynamically input
// user, pass is the data our user enters
// validator accepts the prompts, 
function signIn(user, pass) {
  if (validator(user, pass)) {
    console.log(newsfeed);
  } else {
    alert("invalid. try again");
  }
}

signIn(usernamePrompt, passwordPrompt);
// ==================== REFLECTION ====================
// we call the function with dynamic data that our user types in
// the unPrompt, pwPrompt sync to the argument keywords
// user, pass,
// these arguments get checked against the database list item username
// these arguments get checked against the database list item password
// if match, we display via console.log our newsfeed list, 0 index item(first)
// via dot notation, we get the specific piece of data timeline


// FLOW OF DATA INPUT

// user prompts --> validator 
// validator, does check, returns boolean -> signIn
// signIn accepts the data from the validator, if true/match --> show newsfeed

// IN CONCLUSION:
// prompts -> validate authentication -> if authentication correct -> show sensitive data