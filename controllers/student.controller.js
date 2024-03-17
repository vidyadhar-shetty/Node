let  students= require('../models/student.model')

let addStudent=(req,res,next)=>{
    let {id,name,age}=req.body
    // if(id==="" || name==="" || age==="")
    if(!id || !name || !age){
        return res.status(403).json({error:true, message:"All fields are mandatory",data:null})
    }
    students.push(req.body)
    res.status(201).send({error:false,message:"students added successfully",data:req.body})
}

let getStudents=(req,res,next)=>{
    if(students.length===0){
        return  res.status(404).json({error:true,message:"No students available",data:null})
    }
    res.status(200).json({error:false, message:"All students fetched successfully",data:students})
}

let getStudent=(req,res,next)=>{
    let{id}=req.params
    // console.log(req.params)
    let singleStudent=students.find(student=>{
        return student.id===id
    })
    if(!singleStudent){
        return res.status(404).json({error:true,message:`No student found with given id ${id}`,data:null})
    }
    res.status(200).json({error:false,message:"student fetched successfully",data:singleStudent})
    // res.send("Single student ")
}

let updateStudent=(req,res,next)=>{
    let {id}=req.params;
    let {name,age}=req.body;

    let singleStudent=students.find(student=>{
        return student.id===id
    })
    console.log(singleStudent)

    if(!singleStudent){
        return res.status(404).json({error:true,message:"Student not found", data:null})
    }
    singleStudent.name=name
    singleStudent.age=age

    res.status(200).json({error:false,message:"Student updated successfully",data:singleStudent})
}

let +deleteStudent=(req,res,next)=>{
    let {id}=req.params;

    let singleStudent=students.find(student=>{
        return student.id===id
    })
    console.log(singleStudent)

    if(!singleStudent){
        return res.status(404).json({error:true,message:`No student found with given id${id}`, data:null})
    }
   let filteredStudent=students.filter(student=>{
    return student.id!==id
   })
   students=filteredStudent

    res.status(200).json({error:false,message:"Student updated successfully",data:singleStudent})
}

module.exports={
    addStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
}