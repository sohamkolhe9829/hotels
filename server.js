const express = require('express')
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Models imports
const MenuItem = require('./models/MenuItem');


//Routers Imports
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//Use the routers
app.use('/person', personRoutes);
app.use('/menuItem', menuItemRoutes);


//Server running at
app.listen(3000, () => {
    console.log("Server running at: http://localhost:3000")
})

