import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";
import "./Tutorial.css";

const Tutorial = props => {
    const initialTutorialState = {
        id: null,
        title: "",
        description: "",
        published: false
    };

    const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
    const [message, setMessage] = useState("");

    const getTutorial = id => {
        TutorialDataService.get(id)
        .then(response => {
            setCurrentTutorial(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    
    };

useEffect(() => {
    getTutorial(props.match.params.id);
}, [props.match.params.id]);

const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({...currentTutorial, [name]: value});
};

const updatePublished = status => {
    var data = {
        id: currentTutorial.id,
        title: currentTutorial.title,
        description: currentTutorial.description,
        published: status
    };

    TutorialDataService.update(currentTutorial.id, data)
    .then(response => {
        setCurrentTutorial({...currentTutorial, published: status });
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
};

const updateTutorial = () => {
    TutorialDataService.update(currentTutorial.id, currentTutorial)
    .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!")
    })
    .catch(e => {
        console.log(e);
    });
};

const deleteTutorial = () => {
    TutorialDataService.remove(currentTutorial.id)
    .then(response => {
        console.log(response.data);
        props.history.push("/tutorials");
    })
    .catch(e => {
        console.log(e);
    });
};

return (
    <div>
        {currentTutorial ? (
            <div className="edit-form">
            <h4>Tutorial</h4>
            <form>
                <div className="box-tutorial">
                    <label textarea="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={currentTutorial.title}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="box-tutorial">
                <label textarea="description">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={currentTutorial.description}
                    onChange={handleInputChange}
                />
                </div>
                <div className="form-group">
                <label>
                    <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "published" : "Pending"}
                </div>
            </form>

            {currentTutorial.published ? (
                <button
                className="badge badge-primary mr-2"
                onClick={() => updatePublished(false)}
                >
                    UnPublish
                </button>
            ) : (
                <button 
                className="btn-grad-blue-dark" 
                onClick={() => updatePublished(true)}
                >
                Publish
                </button>
            )}
            <button className="btn-grad-red-dark"  onClick={deleteTutorial}>
            Delete 
            </button>

                <button
                type="submit"
                className="btn-grad-green-dark"
                onClick={updateTutorial}
                >
                    Update
                </button>
                <p>{message}</p>
                </div>
        ) : (
            <div>
            <br />

            <p>Please click on a Tutorial...</p>
            </div>
        
        )}
        </div>
);
   
    
};
export default Tutorial; 

        

