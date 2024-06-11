const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successfull ");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//defining the schema

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User=mongoose.model("User",userSchema);

const user1=new User({name:"ms dhoni",email:"msdhoni7781@gmail.com",age:42});

const user2=new User({
    name:"shubham",
    email:"shubhamranjane@gmail.com",
    age:21
})

// user1.save();

// user2.save().then((res)=>{
//     console.log("user 2 saved successfully");
// }).catch((err)=>{
//     console.log(err);
// })

// User.insertMany([
//     {name:"rohan",email:"rohan@gmail.com",age:23},
//     {name:"sandesh",email:"sandesh@gmail.com",age:22},
//     {name:"raj",email:"raj@gmail.com",age:25},
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

User.findOne({_id:"66686c80428abe41ae6b33c4"}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});