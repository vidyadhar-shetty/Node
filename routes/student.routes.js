const express = require('express')
const{addStudent,
getStudents,
getStudent,
updateStudent,
deleteStudent}  = require('../controllers/student.controller')

let router=express.Router()

router.post("/addstudents",addStudent)
router.get("/getstudents",getStudents)
router.get("/getstudents/:id",getStudent)
router.put("/updatestudent/:id",updateStudent)
router.delete("/deletestudent/:id",deleteStudent)

module.exports=router