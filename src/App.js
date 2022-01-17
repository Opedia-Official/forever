import {useEffect,useState} from 'react'
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroVideo from './components/Intro_video/Intro_video'
import "./index.css";



function App() {

  const [intro, setIntro ] = useState(true);

  const removeIntro=()=>{
    setIntro(false)
  }

    useEffect(()=>{
       setInterval(() => {
        setIntro(false)
      }, 27000);
    })



  return (
    <div >

      {intro ? <IntroVideo removeIntros = {removeIntro} /> : <Main/>}

    </div>
  );
}

export default App;
