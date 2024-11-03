import {useEffect} from "react";
import {papers} from "../data/Papers";
import PaperItem from "../components/researches/PaperItem";


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
      <h3>Coming Soon...</h3>
    </>
  )
}

export default ResearchScreen;