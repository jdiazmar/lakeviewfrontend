// Generic Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

// Component Imports
import AddStudent from '../../components/AddStudent/AddStudent';
import SearchBar from '../../components/SearchBar/SearchBar';
import DisplayStudents from '../../components/DisplayStudents/DisplayStudents';

const RosterPage = () => {

    const [students, setStudents] = useState([]);
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [grade, setGrade] = useState('');
    const [school, setSchool] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_Number] = useState('');
    const [user, token] = useAuth();

    useEffect(() => {
        getAllStudents();
    }, []);

    async function getAllStudents(){
        const response = await axios.get(`http://127.0.0.1:8000/api/students/`);
        setStudents(response.data);
    };

    // async function addStudent(newStudent){
    //     const response = await axios.post(`http://127.0.0.1:8000/api/students/`, newStudent);
    //     if(response.status === 201){
    //         await getAllStudents();
    //     }5
    // };

async function addStudent(entry){
    let newStudent = {
        first_name: first_name,
        last_name: last_name,
        grade: grade,
        school: school,
        age: age,
        email: email,
        phone_number: phone_number
    } 
    console.log('Post STUDENT', entry)
    let response = await axios.post(`http://127.0.0.1:8000/api/students/add/`, entry, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
 
    getAllStudents();
}








    async function deleteStudent(entry){
        let response = await axios.delete(`/students/${entry.id}/`, null);
        if(response.status === 204){
            await getAllStudents();
        }
    }

    function searchStudent(query){
        let newArray = []
        for(let i = 0; i < students.length; i++){
            if(students[i].first_name.toLowerCase().includes(query) ||
            students[i].last_name.toLowerCase().includes(query) ||
            students[i].grade.includes(query) ||
            students[i].school.toLowerCase().includes(query) ||
            students[i].age.includes(query)||
            students[i].email.toLowerCase().includes(query) ||
            students[i].phone_number.includes(query)){
                newArray.push(students[i]);
            }
        }setStudents(newArray)
    }





    return ( 
    <div className='container'>
        <div className='container-event'>
            <SearchBar queryData={searchStudent} />
            <DisplayStudents parentEntries={students} deleteStudentProp={deleteStudent} />
            <AddStudent addNewStudentProp={addStudent}  first_name={first_name} last_name={last_name} grade={grade} school={school} age={age} email={email} phone_number={phone_number} />
        </div>
    </div>
     );
}
 
export default RosterPage;


