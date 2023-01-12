import './App.css';
import Login from './Login';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import UserDashboard from './UserDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './Portal';
import RegisterUser from './RegisterUser';
import UserBooks from './UserBooks';
import StaffDashboard from './StaffDashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ViewBook from './ViewBook';
import AddBook from './AddBook';
import EditBook from './EditBook';

function App() {
  const [bookList, setList] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Navbar />}>
            <Route path='/' element={<Login />}> </Route>
            <Route path='user-register' element={<RegisterUser />}> </Route>
            <Route path='view-book/:id' element={<ViewBook />}> </Route>
            <Route path='edit-book/:id' element={<EditBook />}> </Route>
            <Route path='add-book' element={<AddBook />}> </Route>
            <Route path='user-dashboard' element={<UserDashboard bookList={bookList} setList={setList} />} > </Route>
            <Route path='staff-dashboard' element={<StaffDashboard bookList={bookList} setList={setList} />}> </Route>
          </Route>
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App