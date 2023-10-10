import React, { useState } from 'react';
import GetallClass from './admin/GetallClass';
import PostClass from './admin/PostClass';
import UpdateClass from './admin/UpdateClass';
import DeleteClass from './admin/DeleteClass';
import GetAnnouncement from './admin/GetAnnouncement';
import PostAnnouncement from './admin/PostAnnouncement';
import UpdateAnnouncement from './admin/UpdateAnnouncement';
import DeleteAnnouncement from './admin/DeleteAnnouncement';

const Admin = () => {

  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
  const [tab5, setTab5] = useState(false);
  const [tab6, setTab6] = useState(false);
  const [tab7, setTab7] = useState(false);
  const [tab8, setTab8] = useState(false);

  function handleClickTab1() {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
    setTab6(false);
    setTab7(false);
    setTab8(false);
  }

  function handleClickTab2() {
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setTab4(false);
    setTab5(false);
    setTab6(false);
    setTab7(false);
    setTab8(false);
  }

  function handleClickTab3() {
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setTab4(false);
    setTab5(false);
    setTab6(false);
    setTab7(false);
    setTab8(false);
  }

  function handleClickTab4() {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(true);
    setTab5(false);
    setTab6(false);
    setTab7(false);
    setTab8(false);
  }

  function handleClickTab5() {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(true);
    setTab6(false);
    setTab7(false);
    setTab8(false);
  }

  function handleClickTab6() {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
    setTab6(true);
    setTab7(false);
    setTab8(false);
  }

  function handleClickTab7() {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
    setTab6(false);
    setTab7(true);
    setTab8(false);
  }

  function handleClickTab8() {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
    setTab6(false);
    setTab7(false);
    setTab8(true);
  }


  return (
    <div>
      <br />
      <p className='text-3xl'>Admin Dashboard</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-12">
        <div>
          <button onClick={handleClickTab1} className='p-4 bg-blue-400 block'>All upcoming Classes</button>
          <br />
          <button onClick={handleClickTab2} className='p-4 bg-blue-400 block'>Post a new class</button>
          <br />
          <button onClick={handleClickTab3} className='p-4 bg-blue-400 block'>Update a class</button>
          <br />
          <button onClick={handleClickTab4} className='p-4 bg-blue-400 block'>Delete a class</button>
          <br />
          <button onClick={handleClickTab5} className='p-4 bg-blue-400 block'>All upcoming announcement</button>
          <br />
          <button onClick={handleClickTab6} className='p-4 bg-blue-400 block'>Post a new announcement</button>
          <br />
          <button onClick={handleClickTab7} className='p-4 bg-blue-400 block'>Update an announcement</button>
          <br />
          <button onClick={handleClickTab8} className='p-4 bg-blue-400 block'>Delete an announcement</button>
         </div>

        <div className='col-span-2 flex'>
          {tab1 && <GetallClass/> }
          {tab2 && <PostClass/> }
          {tab3 && <UpdateClass/> }
          {tab4 && <DeleteClass/> }
          {tab5 && <GetAnnouncement /> }
          {tab6 && <PostAnnouncement /> }
          {tab7 && <UpdateAnnouncement /> }
          {tab8 && <DeleteAnnouncement /> }
        </div>
      </div>
    </div>
  );
};

export default Admin;