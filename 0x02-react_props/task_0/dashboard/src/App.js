import './App.css';

import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import Login from './Login/Login.js'
import Notifications from './Notifications.js'

function App() {
  return (<>
    <Notifications/>
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div></>
  );
}

export default App;
