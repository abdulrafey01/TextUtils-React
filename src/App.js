import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)




  function changeTheme() {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setAlertParams('Light Mode Enabled', 'success')

    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#0d153c'
      setAlertParams('Dark Mode Enabled', 'danger')
    }
  }

  function setAlertParams(message, type) {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const [myStyleOfAbout, setMyStyleOfAbout] = useState({
    color: 'black',
    backgroundColor: 'white'
})

const [btnTextOfAbout, setBtnTextOfAbout] = useState('Enable Dark Mode')
  function toggleModeAbout() {
    if (myStyleOfAbout.color === 'black') {
      setMyStyleOfAbout({
            color: 'white',
            backgroundColor: 'black'
        })
        setBtnTextOfAbout('Enable Light Mode')
    }
    else {
      setMyStyleOfAbout({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtnTextOfAbout('Enable Dark Mode')

    }
}

  return (
    <>
      <NavBar homeText='Home' aboutText='About' mode={mode} toggle={changeTheme} />
        <Alert alert={alert} ></Alert>
        <TextForm mode={mode} showAlert={setAlertParams} />
      {/* <Routes>
        <Route path='/' element={<TextForm mode={mode} showAlert={setAlertParams} />
        } />
        <Route path='about' element={<About myStyleOfAbout={myStyleOfAbout} btnTextOfAbout= {btnTextOfAbout} changeMode={toggleModeAbout }/>} />
      </Routes> */}

    </>
  );
}

export default App;
