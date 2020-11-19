import React, { useState, useEffect } from 'react';

import { actionSetUsers } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from './components/Modal/Modal';
import { SelectedUser } from './components/SelectedUser/SelectedUser';
import { Pagination } from './components/Pagination/Pagination';
import { UsersList } from './components/UsersList/UsersList';

import { getUsers } from './api/users';

import './App.scss';


function App() {
  const [modalActive, setModalActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    getUsers()
      .then(users => dispatch(actionSetUsers(users)));
  }, []);


  const usersPerPage = 5;
  const countPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="app">
      <UsersList users={currentUsers} />

      <Modal active={modalActive} setActive={setModalActive} >
        <SelectedUser setActive={setModalActive} />
      </Modal>
  
      <Pagination countPages={countPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}

export default App;
