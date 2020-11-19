import React from 'react';

import '../SelectedUser//SelectedUser.scss';

export function SelectedUser({ setActive }) {
  return (
    <div className="info">

      <div className="info__user-content">
        <div className="info__user-fullname">
          <div className="info__user-name">
            <input  
              type="text"
              required
            />
          </div>

          <div className="info__user-surname">
            <input
              type="text"
              required
            />
          </div>
        </div>

        <div className="info__user-description">
          <textarea
            className="info__user-text"
            type="textarea"
            name="info"
            required
          ></textarea>
        </div>
      </div>

      <div className="info__user-buttons">
        <div>
          <button className="info__user-delete">Delete user</button>          
        </div>
  
        <div>
          <button className="info__user-cancel" onClick={() => setActive(false)}>Cancel</button>
          <button className="info__user-save">Save</button>
        </div>
      </div>
    </div>
  );
} 