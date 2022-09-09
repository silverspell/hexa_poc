const express = require("express");
const buildExpressRoutes = require('../routes/expressRoutes');


function expressAdapter(options) {

    const {port} = options;
    const app = express();
    app.use(express.json());

    const buildRoutes = async() => {
        await buildExpressRoutes(app, options);
    }
    
    const start = async () => {
        try {
            await buildRoutes();
            app.listen(port, () => {"Express running on port", port});
        } catch (err) {
            console.log(err);
            process.exit(1)
        }
    }

    return {
        start,
    };
}


module.exports = expressAdapter;


