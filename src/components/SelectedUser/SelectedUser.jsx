import React from 'react';

import '../SelectedUser//SelectedUser.scss';

export function SelectedUser({ setActive, currentUser }) {
  const { name, desc, surname } = currentUser;

  return (
    <div className="info">

      <div className="info__user-content">
        <div className="info__user-fullname">
          <div className="info__user-name">
            <input  
              type="text"
              required
              value={name}
            />
          </div>

          <div className="info__user-surname">
            <input
              type="text"
              value={surname}
              required
            />
          </div>
        </div>

        <div className="info__user-description">
          <p>{desc}</p>
        </div>
      </div>
    
      <div className="info__user-button">
        <button className="info__user-cancel" onClick={() => setActive(false)}>Cancel</button>
      </div>
    </div>
  );
} 