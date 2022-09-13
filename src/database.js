const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
}).then(db => console.log("DB is connected"))
.catch(error => console.log(error));
