module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller");

    var router = require("express").Router();

    //create a new Tutorial:
    router.post("/", tutorials.create);

    //retrieve all Tutorials:
    router.get("/", tutorials.findAll);

    //retrieve all published Tutorials:
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    //retrieve a single Tutorial with id:
    router.put("/:id", tutorials.update);

    //delete a Tutorial with id:
    router.delete("/:id", tutorials.delete);

    //delete all Tutorials:
    router.delete("/", tutorials.deleteAll);

    app.use("/api/tutorials", router);

    
};


/* 
/api/tutorials: GET, POST, DELETE
/api/tutorials/:id: GET, PUT, DELETE
/api/tutorials/published: GET 
*/