const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/database');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');

app.use('/api', apiRoutes);

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});




//Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});