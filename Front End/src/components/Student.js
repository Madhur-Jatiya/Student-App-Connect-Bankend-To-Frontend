import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Student() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);

    postDataToServer(student);
  };

  //method 1
  //   fetch('http://localhost:8080/student/add', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(student)
  //   }).then(() => {
  //     alert('Student Added Successfully');
  //   })
  // }

  //method 2
  const postDataToServer = (data) => {
    axios
      .post('http://localhost:8080/student/add', data)
      .then((response) => {
        console.log(response);
        alert('Student Added Successfully');
        setName('');
        setAddress('');
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong');
      });
  };

  useEffect(() => {
    // Fetch student data from the backend when the component mounts
    fetchStudentData();
  }, []);

  const fetchStudentData = () => {
    axios
      .get('http://localhost:8080/student/getall')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to fetch student data');
      });
  };

  return (
    <div>
      <Form>
        <h3>Student Name</h3>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>Student Address</h3>
        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br /> <br />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </Form>

      <div style={{ marginLeft: '570px', marginTop: '50px', marginBottom: '50px' }}>
        <table border='1px solid black'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Student;
