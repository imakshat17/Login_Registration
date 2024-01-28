const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet"); 

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



mongoose.connect("mongodb+srv://imakshat17:Akshat@cluster0.naeoitd.mongodb.net/Emp?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = new mongoose.model("User", userSchema);
app.post("/login", (req, res) => {
 const {name,email,password}=req.body
 User.findOne({ email: email })
 .then(user => {
   if (user) {
    if(password===user.password){
        res.send({message:"Login Successfully",user:user})
    }else{
        res.send({message:"Password didn't match"})
    }
   } else {
     res.send({message:"User not registered"})
   }
 })
 .catch(err => {
   console.error("Error during registration:", err);
   res.status(500).send(err.message); 
 });
});

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
  
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          res.send({ message: "User already registered" });
        } else {
          const newUser = new User({
            name,
            email,
            password,
          });
  
          newUser.save()
            .then(() => {
              res.send({ message: "Successfully registered" });
            })
            .catch(err => {
              res.status(500).send(err.message); // Send a 500 Internal Server Error response
            });
        }
      })
      .catch(err => {
        console.error("Error during registration:", err);
        res.status(500).send(err.message); // Send a 500 Internal Server Error response
      });
  });


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
