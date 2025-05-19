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
    username: "ashley",
    timeline: "JS is cool",
  },
  {
    username: "becky",
    timeline: "Help! i'm confused",
  },
  {
    username: "cindy",
    timeline: "I have a lot of ideas on what to build",
  },
];

user_username = prompt("enter username: ");
user_password = prompt("enter password: ");
