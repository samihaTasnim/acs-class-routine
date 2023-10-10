import React, { useState, useEffect } from "react";

const PostAnnouncement = () => {

  const [notice, setNotice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://acs-routine.cyclic.app/announcement',
      { method: 'POST', headers: { 'Content-Type': "application/json" }, body: JSON.stringify({ notice: notice }) })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
  }
  return (
    <div>
      <form className="mx-auto" onSubmit={handleSubmit}>

        <label htmlFor="id" className="block mb-2 text-md font-medium text-gray-900">Announcement</label>
        <input type="text" placeholder="Class will be held at 10 pm" className="bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 block w-80 p-2 my-4" value={notice} onChange={(e) => { setNotice(e.target.value) }} />

        <br />
        <button type="submit" className="bg-blue-400 text-center w-80 px-4 py-2 rounded-lg hover:ring hover:ring-blue-500 hover:shadow-2xl">Create Announcement</button>

      </form>

    </div>
  );
};

export default PostAnnouncement;