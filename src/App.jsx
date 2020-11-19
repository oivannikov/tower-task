import React, { useState, useEffect } from 'react';

import { actionSetUsers } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from './components/Modal/Modal';
import { SelectedUser } from './components/SelectedUser/SelectedUser';
import { Pagination } from './components/Pagination/Pagination';

import Carousel from 'react-spring-3d-carousel';

import { getUsers } from './api/users';

import './App.scss';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [modalActive, setModalActive] = useState(false);

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers()
      .then(users => dispatch(actionSetUsers(users)));
  }, []);

  useEffect(() => {
    let timerId = null;

    if (!modalActive) {
      timerId = setInterval(() => {
        setActiveSlide(prevState => prevState + 1);
      }, 8000);
    }

    return () => clearInterval(timerId);
  }, [currentPage, modalActive]);

  const usersPerPage = 5;
  const countPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const usersSlider = currentUsers.map(user => ({
    key: user.id,
    content: (
      <li className="app__user">
        {user.name}
      </li>
    ),
    onClick: () => handleCurrentUser(user),
  }));

  function handleCurrentUser(user) {
    setCurrentUser(user);
    setModalActive(true);
  }

  function handleCurrentPage(number) {
    setCurrentPage(number);
    setActiveSlide(0);
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(prevState => prevState - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < countPages) {
      setCurrentPage(prevState => prevState + 1);
    }
  }

  return (
    <div className="app">
      <Carousel slides={usersSlider} goToSlide={activeSlide} offsetRadius={0} />

      <Modal active={modalActive} setActive={setModalActive} >
        <SelectedUser setActive={setModalActive} currentUser={currentUser} />
      </Modal>

      <Pagination
        countPages={countPages}
        handleCurrentPage={handleCurrentPage}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default App;
