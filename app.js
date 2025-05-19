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

var usernamePrompt = prompt("enter username: ");
var passwordPrompt = prompt("enter password: ");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(`${user}'s timeline:`, newsfeed[0].timeline);
  } else {
    alert("wrong username or password");
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
