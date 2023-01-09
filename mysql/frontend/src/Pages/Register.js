import React, { Fragment, useState } from "react";
import axios from "axios"

const initialFormValue = {firstname: "", lastname: "", location: "", email: "", dob: "", education: "" }

const Register = () => {
    const [formValue, setFormValue] = useState(initialFormValue);
    const {firstname, lastname, location, email, dob, education} = formValue;

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValue({...formValue, ...{[name]:value}})   
    }

    const handleSubmit = () => {
        axios.post("http://localhost:1212/register", {
            firstname: firstname,
            lastname: lastname,
            location: location,
            email: email,
            dob: dob,
            education: education
        }).then(() => alert('added successfully'))
        setFormValue(initialFormValue)
    }

    return(
        <Fragment>
            <h1>Students Management</h1>
            <div className="div1">
            <label>First Name:</label>
            <input type="text" name="firstname" id="firstname" onChange={handleChange} value={firstname}/>
            </div>

            <label>Last Name:</label>
            <input type="text" name="lastname" id="lastname" onChange={handleChange} value={lastname}/>

            <div className="div1">
            <label>Location:</label>
            <input type="text" name="location" id="location" onChange={handleChange} value={location}/>
            </div>

            <div className="div1">
            <label>Email:</label>
            <input type="text" name="email" id="email" onChange={handleChange} value={email}/>
            </div>

            <div className="div1">
            <label>DOB:</label>
            <input type="text" name="dob" id="dob" placeholder="yyyy/mm/dd" onChange={handleChange} value={dob}/>
            </div>

            <div className="div1">
            <label>Education:</label>
            <input type="text" name="education" id="education" onChange={handleChange} value={education}/>
            </div>

            <label>About:</label>
            <input className="inbox" type="text" name="about" id="about" />
        
            <button className="btn" type="button" onClick={handleSubmit}>Submit</button>
        </Fragment>
    )
}

export default Register;