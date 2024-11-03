import {useEffect} from "react";
import Timeline from "../components/experiences/Timeline";


const HomeScreen = () => {
  useEffect(() => {
    document.title = "Alessio Campanelli"
  }, []);

  return (
    <>
      <h1>Hi! I'm Alessio Campanelli</h1>
      <p>PhD Student @ <a href="https://www.unive.it/pag/13526" target="_blank" rel="noreferrer">Ca' Foscari University of Venice</a></p>
    </>
  )
}

export default HomeScreen