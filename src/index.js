const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');


const app = express();
const port = process.env.PORT


// Without middleware: new request -> run route handler
//  With middleware: new request -> do something -> run the route handler


app.use(express.json());    // configure express to automatically parse the incoming json data
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log(`Server is started on port ${port}`)
})

                    //  upload images
// const multer = require('multer');
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req,file,cb){

//         // if(!file.originalname.endsWith('.pdf')){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined,true)

//         // cb(new Error('File must be a PDF'))
//         // cb(undefined,true)
//         // cb(undefined,false)
//     }
// })

// app.post('/upload',upload.single('upload') , (req, res) => {
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})

// })

        // test relationship between two models
// const Task = require('./models/task');
// const User = require('./models/user');
// const main = async function () {
//     // const task = await Task.findById('6039e1b7ace67d18502c49a5');
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner);

//     const user = await User.findById('6039e02ed16ce111a41344e9');
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()




                    // test methods.JSON
// const pet = {
//     name:'Hal'
// }
// pet.toJSON = function(){
//     this.age = 28
//     return this
//     // return {}
// }
// console.log(JSON.stringify(pet));



                    //  TEST　AREA
// const jwt = require('jsonwebtoken');
// const myFunction=async ()=>{
//     const token = jwt.sign({'id':'abc123'},'this is my new course',{'expiresIn':'7 days'});
//     console.log(token)
//     const data = jwt.verify(token,'this is my new course')
//     console.log(data);
// }
// myFunction();