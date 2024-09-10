import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

const App = ({ isLoggedIn, logOut }) => {
  const [displayDrawer, setDisplayDrawer] = useState(false);

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'default', html: getLatestNotification() },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'h') {
        alert('Logging you out');
        logOut();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [logOut]);

  const handleDisplayDrawer = () => {
    setDisplayDrawer(true);
  };

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
  };

  return (
    <>
      <div className={css(styles.container, styles.small)}>
        <Header />
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
        />
      </div>
      <hr className={css(styles.hr)} />
      {isLoggedIn ? (
        <BodySectionWithMarginBottom>
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom>
          <Login />
        </BodySectionWithMarginBottom>
      )}
      <BodySection title='News from the School'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </BodySection>
      <hr className={css(styles.hr)} />
      <Footer />
    </>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  hr: {
    borderTop: '2px solid red',
  },
  small: {
    '@media (max-width: 900px)': {
      display: 'grid',
      justifyContent: 'center',
    },
  },
});

export default App;
