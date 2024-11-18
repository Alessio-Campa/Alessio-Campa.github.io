import {useEffect} from "react";
import {papers, talks} from "../data/Papers";
import PaperItem from "../components/researches/PaperItem";
import TalkItem from "../components/researches/TalkItem";


const ResearchScreen = () => {
  useEffect(() => {
    document.title = "Research - A. Campanelli"
  }, []);

  return (
    <>
      <h1> Papers </h1>
      <div id="papers-container">
        {papers
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((paper, i) => (
            <PaperItem key={i} {...paper} />
          ))}
      </div>
      <h1> Talks </h1>
      <div id="papers-container">
        {talks
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((talk, i) => (
            <TalkItem key={i} {...talk} />
          ))}
      </div>
    </>
  )
}

export default ResearchScreen;