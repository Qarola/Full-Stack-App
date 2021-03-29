import React, { useState } from 'react';
import TutorialDataService from '../services/TutorialService';
import "./AddTutorial.css";



const AddTutorial = () => {
    const initialTutorialState = {
        id: null,
        title: "",
        description: "",
        published: false
    };

    const [tutorial, setTutorial] = useState(initialTutorialState);//se define y se establece el estado inicial...
    const [submitted, setSubmitted] = useState(false);

  
    const handleInputChange = event => {//para rastrear los valores de la entrada y establecer ese estado para cambios...
    const { name, value } = event.target;
    setTutorial({...tutorial, [name]: value });
};

    const saveTutorial = () => {
    var data = {
        title: tutorial.title,
        description: tutorial.description
    };

    TutorialDataService.create(data) //para obtener el estado de tutorial y enviar la solicitud post a la API web...
    .then(response => {
        setTutorial({
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
};

const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
};

return (
    <div className="submit-form">
    {submitted ? ( //para verificar si el estado de submitted, si es cierto, se muestra el botón Agregar para crear un nuevo Tutorial...
        <div>
            <h4>You submitted successfully!</h4>
            <button className="btn-grad" onClick={newTutorial}>
                Add
            </button>
        </div>
    ) : ( //de lo contrario, se mostrará un formulario con el botón enviar...
        <div>
            <div className="box-add">
            <label textarea="title">Title</label>
            <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            required
            value={tutorial.title}
            onChange={handleInputChange}
           
            />
        </div>

        <div className="box-add">
        <label textarea="description">Description</label>
        <input
        type="text"
        className="form-control"
        id="description"
        name="description"
        required
        value={tutorial.description}
        onChange={handleInputChange}
     
        />
        </div>

        <button onClick={saveTutorial} className="btn-grad-submit">
            Submit
        </button>
        </div>
    )}
    </div>
  );
};
export default AddTutorial;