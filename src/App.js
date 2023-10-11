import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";
import { GiGraduateCap } from "react-icons/gi"; 
import { MdDateRange, MdTopic } from "react-icons/md"; 
import { CgCalendarToday } from "react-icons/cg";
import { BiTimeFive } from "react-icons/bi"; 
import { MdSubject } from "react-icons/md";  
import { MdOutlineTopic } from "react-icons/md"; 
import { BsFillPersonCheckFill } from "react-icons/bs";

function App() {

  const [classInfo, setClassInfo] = useState([]);
  const [announcement, setAnnouncement] = useState([]);
  const [timer, setTimer] = useState("");

  useEffect(() => {
    axios.get('https://acs-routine.onrender.com/class')
      .then(function (response) {
        setClassInfo(response.data);
        setTimer(response.data[0].classTime);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
  }, [])

  let ms = Number(timer.split(':')[0]) * 60 * 60 * 1000 + Number(timer.split(':')[1]) * 60 * 1000;
 console.log(timer);
 console.log(ms);

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
      <div className="text-center flex align-middle justify-center text-3xl font-bold p-8 text-blue-400">
      <GiGraduateCap size="1.5em" /> <span> &nbsp; ACS Engineering Routine</span>
      </div>
     <div className='mb-8 mx-28 bg-cyan-500 p-8 rounded-2xl shadow-2xl '>
      {announcement[0] ? announcement[0].notice : "No announcement for now!"}
     </div>
      {classInfo.map((info) => {
        return (
          <div key={info.id} className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 mx-28 rounded-2xl text-center text-lg">
            <div className='flex align-middle justify-center'> 
            <MdDateRange size="1.2em"/> <p> <b>  &nbsp; Date:</b> {info.date}</p>
            </div>
            <div className='flex align-middle justify-center'> 
            <CgCalendarToday size="1.2em"/> <p> <b>  &nbsp; Day: </b>{info.day}</p>
            </div>
            <div className='flex align-middle justify-center'> 
            <BiTimeFive size="1.2em"/> <p> <b> &nbsp; Class time:</b> {info.classTime}</p>
            </div>  
            <div className='flex align-middle justify-center'> 
            <MdSubject size="1.2em"/> <p> <b> &nbsp; Subject:</b> {info.subject}</p>
            </div> 
            <div className='flex align-middle justify-center'> 
            <MdOutlineTopic size="1.2em"/> <p> <b> &nbsp; Chapter Topic:</b> {info.chapterTopic} </p>
            </div> 
            <div className='flex align-middle justify-center'> 
            <BsFillPersonCheckFill size="1.2em"/> <p> <b> &nbsp; Instructor:</b> {info.instructor}</p>
            </div>
            <Countdown date={Date.now() + ms} /> 
            <span></span>
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
