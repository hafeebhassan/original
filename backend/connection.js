const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://hafeeb_hassan:Hafeeb2005@cluster0.y8bsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
    console.log("Connected to MongoDB");
})