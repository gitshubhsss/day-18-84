//requiring the mongoose package
const mongoose=require("mongoose");


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/library");//establishing the connection beetween mongodb and node
}

main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
});

//now we have establish the connection its time to define the schmema

const studentSchema=mongoose.Schema({
    name:String,
    email:String,
    mobileNo:Number
});

const Student=new mongoose.model("Student",studentSchema);//here the Student collection will be generate

// const s1=new Student({
//     name:"shubham",
//     email:"shubhamranjane16@gmail.com",
//     mobileNo:7507380653
// });

// s1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

Student.find({name:"shubham"}).then((data)=>{
    console.log(data[0]);
}).catch((err)=>{
    console.log(err);
})