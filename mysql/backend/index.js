const mysql = require("mysql");
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 1212;
const moment = require('moment');

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({ origin: '*'}))
app.use(express.json());

const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "studentsdb"
})

app.post('/create', (req,res) => {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const salary = req.body.salary

    con.query(
        'insert into employeedb.employeetable (name,age,country,position,salary) VALUES (?,?,?,?,?)',
        [name,age,country,position,salary], (err,result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values inserted")
            }
        }
    )
})

app.post('/register', (req,res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const location = req.body.location
    const email = req.body.email
    const dob = req.body.dob
    const education = req.body.education

    con.query(
        'insert into studentsdb.studentstable (firstname,lastname,location,email,dob,education) VALUES (?,?,?,?,?,?)',
        [firstname,lastname,location,email,dob,education], (err,result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values inserted")
            }
        }
    )
})

app.get('/fetchStudents', (req,res) => {
    con.query(
        "select * from studentsdb.studentstable", (err,result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        }
    )
})

app.delete('/delete/:id', (req,res) => {
    const id = req.params.id
    con.query(
        "delete from studentsdb.studentstable where id=?", id, (err,result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        }
    )
})

app.put('/updateuser/:id', (req,res) => {
    const data = [req.body.firstname,req.body.lastname,req.body.location,req.body.email,req.body.dob,req.body.education,req.params.id];
    con.query(
        "UPDATE studentstable SET firstname=?,lastname=?,location=?,email=?,dob=?,education=? where id=?",data,(err,result)=> {
            if(err){
                console.log('error')
            }else{
                res.send(result)
            }
        }
    )
})

app.listen(PORT, () => {
    console.log(`Server is Connected on ${PORT}`)
})