import React, { useState, useEffect } from "react";

const UpdateClass = () => {

  // id - date + month number + year
  // 	Ex: 09102023
  // date - Date in Month date, year format
  // 	Ex: October 9, 2023
  // day - Weekday name
  // 	Ex: Saturday
  // classTime - Time in 24 hour format
  // 	Ex: 23:00
  // subject - Subject name
  // chapterTopic - Chapter topic name
  // instructor - Instructor name

  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [classTime, setClassTime] = useState("");
  const [subject, setSubject] = useState("");
  const [chapterTopic, setChapterTopic] = useState("");
  const [instructor, setInstructor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://acs-routine.cyclic.app/class',
      { method: 'PATCH', headers: { 'Content-Type': "application/json" }, body: JSON.stringify({ id: id, date: date, day: day, classTime: classTime, subject: subject, chapterTopic: chapterTopic, instructor: instructor }) })
      .then(response => response.json())
      .then((data) => {
       console.log(data);
      })
  }

  // useEffect(() => {
  //  axios.get
    
  // }, [])


  return (
    <div>update class info</div>
  );
};

export default UpdateClass;