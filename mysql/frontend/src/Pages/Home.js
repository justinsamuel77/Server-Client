import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom';
import moment from "moment"

const Home = () => {
    const {id} = useParams()
    const [studentsList, setStudentsList] = useState([])
    const navigate = useNavigate()

    const getStudents = () => {
        axios.get("http://localhost:1212/fetchStudents").then((response) => {
            setStudentsList(response.data)
            })       
    }

    const handleEdit = async (id) => {
        navigate('/editnew/'+id)
    }

    const handleDelete = (id) => {
        if(!window.confirm('Do you want to Delete now?')){
            return false;
        }
        axios.delete(`http://localhost:1212/delete/${id}`).then((response) => {
            studentsList.filter(students => {
                return students.id !== id;
            })
        })
    }

    useEffect(() => {
        getStudents()
    }, [])

    return(
        <Fragment>
            <h2>Students Management</h2>
            <div className="alignbutton">
            <input className="searchalign" type="text" placeholder="Search.." name="search"></input>
            <Link to="/studentreg"><button className="button" type="button">Add</button></Link>
            </div>
            <br/><br/>
            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Location</th>
                    <th>email</th>
                    <th>DOB</th>
                    <th>Education</th>
                    <th>Action</th>
                    <th>Delete</th>
                </tr>
                </thead>
                {
                    studentsList.map(students => {
                        return(
                            <tbody>
                            <tr>
                                <td>{students.id}</td>
                                <td>{students.firstname}</td>
                                <td>{students.lastname}</td>
                                <td>{students.location}</td>
                                <td>{students.email}</td>
                                <td>{moment(students.dob).format("L")}</td>
                                <td>{students.education}</td>
                                <td><button type="button" onClick={() => handleEdit(students.id)}>Edit</button></td>
                                <td><button type="button" onClick={() => handleDelete(students.id)}>Delete</button></td>
                            </tr>
                            </tbody>
                        )
                    })
                }
            </table>
     
        </Fragment>
    )
}

export default Home;