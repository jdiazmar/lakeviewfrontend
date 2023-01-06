import React, { useState } from 'react';


const AddStudent = ({addNewStudentProp}) => {

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [grade, setGrade] = useState('');
    const [school, setSchool] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_Number] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newStudent = {
            first_name: first_name,
            last_name: last_name,
            grade: grade,
            school: school,
            age: age,
            email: email,
            phone_number: phone_number
        };
        addNewStudentProp(newStudent);

    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type='text' value={first_name} onChange={(event) => setFirst_name(event.target.value)}/>
                
                <label>Last Name</label>
                <input type='text' value={last_name} onChange={(event) => setLast_name(event.target.value)}/>
                
                <label>Grade</label>
                <input type='text' value={grade} onChange={(event) => setGrade(event.target.value)}/>
                
                <label>School</label>
                <input type='text' value={school} onChange={(event) => setSchool(event.target.value)}/>
                
                <label>Age</label>
                <input type='text' value={age} onChange={(event) => setAge(event.target.value)}/>
                
                <label>Email</label>
                <input type='text' value={email} onChange={(event) => setEmail(event.target.value)}/>
                
                <label>Phone Number</label>
                <input type='text' value={phone_number} onChange={(event) => setPhone_Number(event.target.value)}/>

                <button type='submit' className='btn btn-primary btn-sm' >Add</button>
            </div>
        </form>
     );
}
 
export default AddStudent;