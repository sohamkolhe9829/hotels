const express = require('express')
require('dotenv').config({ path: "./.env" });
const PORT = process.env.PORT || 3000;
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//PORT

// Models imports
const MenuItem = require('./models/MenuItem');


//Routers Imports
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemsRoutes');

//Use the routers
app.use('/person', personRoutes);
app.use('/menuItem', menuItemRoutes);

//Server running at
app.listen(PORT, () => {
    console.log("Server running")
})

