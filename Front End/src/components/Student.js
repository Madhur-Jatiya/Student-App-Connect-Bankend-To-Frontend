import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Student() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

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

  return (
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
  );
}

export default Student;
