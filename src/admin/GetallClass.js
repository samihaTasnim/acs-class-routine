import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetallClass = () => {

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

  return (
    <div>
       {classInfo.map((info) => {
        return (
          <div key={info.id} className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 mx-28 rounded-2xl text-center">
            <p>Date: {info.date}</p>
            <p>Day: {info.day}</p>
            <p>Class time: {info.classTime}</p>
            <p>Subject: {info.subject}</p>
            <p>Chapter Topic: {info.chapterTopic}</p>
            <p className='mb-4'>Instructor: {info.instructor}</p>
          </div>
        )
      })}
    </div>
  );
};

export default GetallClass;