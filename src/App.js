import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";

function App() {

  const [classInfo, setClassInfo] = useState([]);
  const [announcement, setAnnouncement] = useState([]);

  useEffect(() => {
    axios.get('https://acs-routine.onrender.com/class')
      .then(function (response) {
        setClassInfo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
  }, [])

  useEffect(() => {
    axios.get('https://acs-routine.onrender.com/announcement')
      .then(function (response) {
        setAnnouncement(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
  }, [])


  return (
    <>
      <div className="text-center text-3xl font-bold p-8 text-blue-400">
        <p>ACS Engineering Routine</p>
      </div>
     <div className='mb-8 mx-24 bg-blue-200 p-8 rounded-2xl shadow-2xl'>
      {announcement[0] ? announcement[0].notice : "No announcement for now!"}
     </div>
      {classInfo.map((info) => {
        return (
          <div key={info.id} className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 mx-28 rounded-2xl text-center">
            <p>Date: {info.date}</p>
            <p>Day: {info.day}</p>
            <p>Class time: {info.classTime}</p>
            <p>Subject: {info.subject}</p>
            <p>Chapter Topic: {info.chapterTopic}</p>
            <p className='mb-4'>Instructor: {info.instructor}</p>
            <Countdown date={Date.now() + 100000000}/>
          </div>
        )
      })}
      <Link to="/login">Admin login</Link>
      <br />
      <Link to="/admin">Admin Dashboard</Link>
    </>
  );
}

export default App;
