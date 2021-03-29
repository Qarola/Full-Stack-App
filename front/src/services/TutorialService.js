//Creación servicio de datos:
import http from "../http-common";


const getAll = () => {
    return http.get("tutorials");
};

const get = id => {
    return http.get(`/tutorials/${id}`);

};

const create = data => {
    return http.post("/tutorials", data);
};

const update = (id, data) => {
    return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
    return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
    return http.delete(`/tutorials`)
};

const findByTitle = title => {
    return http.get(`/tutorials?title=${title}`);
};

var TutorialDataService =    {
getAll,
get,
create,
update,
remove,
removeAll,
findByTitle
};
 
export default TutorialDataService; 













/* Llamamos a axios (importado como http) get, post, put, delete(métodos)
correspondiente a las solicitudes HTTP: GET, POST, PUT, DELETE 
para hacer CRUD operaciones. */   

/* The service exports CRUD functions and finder method:

CREATE: create
RETRIEVE: getAll, get
UPDATE: update
DELETE: remove, removeAll
FINDER: findByTitle */
