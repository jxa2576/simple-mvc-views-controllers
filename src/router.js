// This only specifies the folder name, which means it will automatically pull the index.js file
const controllers = require('./controllers');

const router = (app) => {
    //GET request handler for /page1 that calls controllers.page1
    app.get('/page1', controllers.page1);
    app.get('/page2', controllers.page2);
    app.get('/', controllers.index);
    app.get('/getName', controllers.getName);
    //Catches other urls, wildcard
    app.get('/*', controllers.notFound);

    //POST request
    app.post('/setName', controllers.setName);
};

// export the router function
module.exports = router;
