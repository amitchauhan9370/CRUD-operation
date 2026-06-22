// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log("DB connected"))
// .catch(err => console.log("DB error:", err));

// const userSchema = mongoose.Schema({
//     image: String,
//     email: String,
//     name : String
// });

// module.exports = mongoose.model('user', userSchema);


require('dotenv').config();
const mongoose = require("mongoose");

console.log("MONGO_URI =", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB connected"))
.catch(err => console.log("DB error:", err));

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name : String
});

module.exports = mongoose.model('user', userSchema);


