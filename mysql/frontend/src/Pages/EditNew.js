import React, { Fragment, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialFormValue = { firstname: "", lastname: "", location: "", email: "", dob: "", education: ""}

const EditNew = () => {
    const [formValue, setFormValue] = useState(initialFormValue);
    const {firstname, lastname, location, email, dob, education} = formValue;
    const {id} = useParams()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, ...{[name]:value}})
    }

    const handleSubmit = async () => {
        axios.put(`http://localhost:1212/updateuser/${id}`, {
            firstname: firstname,
            lastname: lastname,
            location: location,
            email: email,
            dob: dob,
            education: education
        },
        (err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
                setFormValue(initialFormValue)
                alert("Edited Successfully")
            }
        })
    }

    return(
        <Fragment>
            <h1>Edit Page</h1>
            <label>First Name:</label>
            <input type="text" name="firstname" id="firstname" onChange={handleChange} value={firstname}/>

            <label>Last Name:</label>
            <input type="text" name="lastname" id="lastname" onChange={handleChange} value={lastname}/>

            <label>Location:</label>
            <input type="text" name="location" id="location" onChange={handleChange} value={location}/>

            <label>email:</label>
            <input type="text" name="email" id="email" onChange={handleChange} value={email}/>

            <label>DOB:</label>
            <input type="text" name="dob" id="dob" placeholder="yyyy/mm/dd" onChange={handleChange} value={dob}/>

            <label>Education:</label>
            <input type="text" name="education" id="education" onChange={handleChange} value={education}/>
        <br/><br/>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </Fragment>
    )
}

export default EditNew