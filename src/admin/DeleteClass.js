import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const DeleteClass = () => {

  const [classInfo, setClassInfo] = useState([]);

  useEffect(() => {
    axios.get('https://acs-routine.cyclic.app/class')
      .then(function (response) {
        setClassInfo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
  }, [])

  const deleteClass = (classID) => {
    axios.delete(`https://acs-routine.cyclic.app/class/${classID}`)
    .then(function (response) {
      console.log("ok");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  return (
    <div>
       {classInfo.map((info) => {
        return (
          <>
          <div key={info.id}  className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-2xl text-center flex">
            <p className='mr-4'>Date: {info.date}</p>
            <p className='mr-4'>Day: {info.day}</p>
            <p className='mr-4'>Class time: {info.classTime}</p>
            <p className='mr-4'>Subject: {info.subject}</p>
            <p className='mr-4'>Chapter Topic: {info.chapterTopic}</p>
            <p className='mb-4'>Instructor: {info.instructor}</p>
            <button onClick={() => deleteClass(info.id)} className='bg-white p-2 rounded-xl mx-2'>Delete this class</button>
          </div>
          <br />
          </>
        )
      })}
    </div>
  );
};

export default DeleteClass;