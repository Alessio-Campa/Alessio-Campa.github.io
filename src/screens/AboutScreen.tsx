import SchoolExperienceItem from "../components/experiences/SchoolExperienceItem";
import {schoolExperiences, workExperiences} from "../data/Experiences";
import WorkExperienceItem from "../components/experiences/WorkExperienceItem";
import {useEffect} from "react";

const AboutScreen = () => {
  useEffect(() => {
    document.title = "About - A. Campanelli"
  }, []);

  return (
    <>
      <h1>Experience</h1>
      {workExperiences.sort((a, b) => {
        if (b.end == null && a.end == null) return b.start.getTime() - a.start.getTime();
        if (b.end == null) return 1;
        if (a.end == null) return -1;
        return b.end.getTime() - a.end.getTime()
      }).map((experience, i) => (
        <WorkExperienceItem key={i} {...experience}/>
      ))}

      <h1>Education</h1>
      {schoolExperiences.sort((a, b) => b.start.getTime() - a.start.getTime()).map((experience, i) => (
        <SchoolExperienceItem key={i} {...experience}/>
      ))}
      <div style={{height: "10vh"}}/>
    </>
  )
}

export default AboutScreen;