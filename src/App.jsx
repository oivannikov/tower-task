import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal } from './components/Modal/Modal';

import './App.scss';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  return (
    <div className="app">
      <Modal active={modalActive} setActive={setModalActive} >
  
      </Modal>
      <button onClick={() => setModalActive(true)}>Open</button>
    </div>
  );
}

export default App;
