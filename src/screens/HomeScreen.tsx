import {useEffect} from "react";
import Timeline from "../components/experiences/Timeline";
import PaperItem from "../components/researches/PaperItem";
import {papers, talks} from "../data/Papers";
import TalkItem from "../components/researches/TalkItem";
import Links from "../components/links/Links";


const HomeScreen = () => {
  const latestPaper = papers.sort((a, b) => b.date.getTime() - a.date.getTime())[0]
  const latestTalk = talks.sort((a, b) => b.date.getTime() - a.date.getTime())[0]

  useEffect(() => {
    document.title = "Alessio Campanelli"
  }, []);

  return (
    <>
      <h1>Hi! I'm Alessio Campanelli.</h1>
      <p>PhD Student @ <a href="https://www.unive.it/pag/13526" target="_blank" rel="noreferrer">Ca' Foscari University of Venice</a></p>
      <div style={{display: "flex"}}>
        <div style={{width: "50%"}}>
          <h2>Latest Paper</h2>
          <PaperItem {...latestPaper} fullWidth/>
        </div>
        <div style={{width: "50%"}}>
          <h2>Latest Talk</h2>
          <TalkItem {...latestTalk} fullWidth />
        </div>
      </div>
      <div>
        <h2>My Links</h2>
        <Links />
      </div>
    </>
  )
}

export default HomeScreen