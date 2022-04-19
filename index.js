
const express = require('express');

const bodyParser = require('body-parser');

const { process_params } = require('express/lib/router');
// declare varriable express Most important thing

const app = express();
//this is an instant of express

const port = process.env.PORT || 4000
const  PORT = 4000;


const { users } = require('./state')

/* BEGIN - create routes here */

app.get("/users" , function(req, res) {
  return res.json(users);
})

app.get("/users/1" , function(req, res){
  return res.json(users[0]);
})

app.post("/users", function(req, res) {
 
  let newUser = {
    "_id": 6,
    "name": "Nicol Bolas", 
    "occupation": "Dragon Planeswalker",
    "avatar": 
    "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/8/8d/Nicol_Bolas%2C_Planeswalker.jpg/revision/latest/scale-to-width-down/657?cb=20081212143010"
  }
  users.push(newUser);
  let last = users.length - 1;
  return res.json(users);
})

app.put("/users/1", function(req, res) {
  users[0].name = "gideon jura";
  users[0].occupation = "soldier";
  users[0].avatar = "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/e/e7/Gideon.jpg/revision/latest/scale-to-width-down/1000?cb=20130122101532";
  return res.json(users);

})

app.delete("/users/1", function(req, res) {
  users.splice(0, 1);
  res.send("deleted");
});

app.post("/users", function(req, res) {
  let counter = users.length;
  let newUser = req.body;
  newUser._id = counter + 1;
  users.push(newUser);
  let last = users.length - 1;
  return res.json(users[last]);
});

app.get("/users/:userID", (req, res) => {
  let id = req.params.userId;
  return res.json(users[id]);
});

app.put("/users/:userId", (req, res) => {
  let id = req.params.userId - 1;
  users[id].name = "Jane Doe";
  return res.json(users);
});

app.delete("/users/:userId", (req, res) => {
  let id = req.params.userId - 1;
  users[id].isActive = false;
  res.send("deleted");
});

/* END - create routes here */

app.listen(PORT, () => 
  console.log("Example app listening on port" , PORT))