import React from 'react';
import './Notifications.css';
import {getLatestNotification} from './utils';
import closeIcon from './close-icon.png';
import NotificationItem from './Notifications/NotificationItem.js'
import NotificationsItem from './Notifications/NotificationItem.js';

function Notifications() {
  return (
    <>
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button style={{
          float: 'right',
          marginTop: '-70px',
          backgroundColor: '#fff',
          border: 'none',
        }} aria-label='Close'>
          <img src={closeIcon} alt='close' />
        </button>
        <ul>
          <NotificationsItem dangerouslySetInnerHTML= 'New course available' data-notification-type='default' />
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent"
              dangerouslySetInnerHTML={{
                __html: getLatestNotification(),
              }}></li>
        </ul>
      </div>
    </>
  );
};

export default Notifications;
