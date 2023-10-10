import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const GetAnnouncement = () => {

  const [announcement, setAnnouncement] = useState([]);

  useEffect(() => {
    axios.get('https://acs-routine.cyclic.app/announcement')
      .then(function (response) {
        console.log(response.data);
        setAnnouncement(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
  }, [])

  return (
    <div>
       {announcement.map((info) => {
        return (
          <p key={info._id}>{info && info.notice}</p>
        )
      })}
    </div>
  );
};

export default GetAnnouncement;