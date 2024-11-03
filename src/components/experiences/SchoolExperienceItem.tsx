import "./ExperienceItem.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons/faGraduationCap";

interface SchoolExperienceItemProps{
  name: string;
  degree: string;
  start: Date;
  end?: Date;
  logo?: string;
  grade?: string;
}

const SchoolExperienceItem = ({name, degree, start, end, logo, grade}: SchoolExperienceItemProps) => {

  const getEndYear = (): string => {
    if (end == null) return "In Progress";
    return "" + end.getFullYear();
  }

  const getGrade = (): string => {
    if (grade == null) return "";
    return `${grade}`
  }

  return(
    <div className="card">
      <div className="icon">
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} />
        </h2>
      </div>
      <div>
        <h2 style={{marginBottom: "0.5rem"}}>{name}</h2>
        <h4 style={{marginTop: 0, marginBottom: "0.5rem"}}>{degree}</h4>
        {grade != null &&
            <h5 style={{marginTop: 0}}> {getGrade()} </h5>
        }
        <p>{start.getFullYear()} - {getEndYear()}</p>
      </div>
    </div>
  )
}

export default SchoolExperienceItem;