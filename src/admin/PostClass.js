import React, { useState, useEffect } from "react";
import axios from "axios";

const PostClass = () => {

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
      { method: 'POST', headers: { 'Content-Type': "application/json" }, body: JSON.stringify({ id: id, date: date, day: day, classTime: classTime, subject: subject, chapterTopic: chapterTopic, instructor: instructor }) })
      .then(response => response.json())
      .then((data) => {
        if (data.success === true) {
          console.log(data);
        }
      })
  }

  return (
    <form className="mx-auto" onSubmit={handleSubmit}>

      <label htmlFor="id" className="block mb-2 text-md font-medium text-gray-900">Class id</label>
      <input type="text" placeholder="DDMMYYYY format" className="bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 block w-80 p-2 my-4" value={id} onChange={(e) => { setId(e.target.value) }} />

      <label htmlFor="date" className="block mb-2 text-md font-medium text-gray-900"> Date </label>
      <input type="text" placeholder="October 10, 2023" className="bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 block w-80 p-2 my-4" value={date} onChange={(e) => { setDate(e.target.value) }} />


      <label htmlFor="day" className="block mb-2 text-md font-medium text-gray-900"> Day </label>
      <input type="text" placeholder="Friday" className="bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 block w-80 p-2 my-4" value={day} onChange={(e) => { setDay(e.target.value) }} />

      <label htmlFor="classTime" className="block mb-2 text-md font-medium text-gray-900"> Class Time </label>
      <input type="text" placeholder="22:00" className="bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 block w-80 p-2 my-4" value={classTime} onChange={(e) => { setClassTime(e.target.value) }} />

      <label htmlFor="subject" className="block mb-2 text-md font-medium text-gray-900"> Subject Name </label>
      <input type="text" placeholder="Math" className="bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 block w-80 p-2 my-4" value={subject} onChange={(e) => { setSubject(e.target.value) }} />

      <label htmlFor="chapterTopic" className="block mb-2 text-md font-medium text-gray-900"> Chapter topic </label>
      <input type="text" placeholder="Math" className="bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 block w-80 p-2 my-4" value={chapterTopic} onChange={(e) => { setChapterTopic(e.target.value) }} />

      <label htmlFor="instructor" className="block mb-2 text-md font-medium text-gray-900"> Instructor Name </label>
      <input type="text" placeholder="Abhi Datta Tushar" className="bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 block w-80 p-2 my-4" value={instructor} onChange={(e) => { setInstructor(e.target.value) }} />

      <br />
      <button type="submit" className="bg-blue-400 text-center w-80 px-4 py-2 rounded-lg hover:ring hover:ring-blue-500 hover:shadow-2xl">Create Class</button>
    </form>
  );
};

export default PostClass;