const express = require('express'); //Import Express: Express is for building the Rest APIs...
const bodyParser = require('body-parser'); //helps to parse the request and create the req.body object...
const cors = require('cors'); //provides Express middleware to enable CORS with various options...

const app = express();


var corsOptions = {
    origin : "http://localhost:8081"

};


app.use(cors(corsOptions));

app.use(bodyParser.json()); // parse requests of content-type - application/json

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



const db = require("./models"); //First, we import our database object and controller
//const controller = require("./app/controllers/tutorial.controller"); 



db.sequelize.sync();
// // drop the table if it already exists
/* db.sequelize.sync({ force: false }).then(() => {
console.log("Drop and re-sync db.");
}); */


//simple route//
app.get('/', (req, res) => { //define a Get route which is simple for test...
    res.json({message: "Welcome to Carolina application." });

});

require("./routes/tutorial.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080; // listen on port 8080 for incomming requests...

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});







