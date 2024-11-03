import {Paper} from "../../data/Papers";
import {useEffect, useState} from "react";
import PdfToImg from "pdftoimg-js/browser";
import "./PaperItem.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import {faFileArrowDown} from "@fortawesome/free-solid-svg-icons/faFileArrowDown";


interface PaperItemProps extends Paper {
}

const PaperItem = ({name, authors, date, publication, fileName, doi}: PaperItemProps) => {
  const [image, setImage] = useState<string>()

  useEffect(() => {
    fetch(`/papers/${fileName}.pdf`).then(response => {
      response.arrayBuffer().then(pdf => {
        PdfToImg(pdf, {pages: 1, scale: 5}).then(images => {
          setImage(images)
        })
      });
    });
  }, [fileName]);

  return (
    <div className="paper">
      <div className="paper-card">
        <div className="image-container">
          <img className="paper-page" src={image} alt="First page"/>
        </div>
        <div className="paper-detail">
          <div>
            <h3 style={{marginTop: 0 }}>{name}</h3>
            <h4>Authors: <span style={{fontWeight: "normal"}}>{authors.join(", ")}</span></h4>
            <h4 style={{fontWeight: "normal"}}>In <i>{publication}</i>, {date.getFullYear()}</h4>
          </div>
          <div className="buttons-container">
            {doi &&
            <a href={`https://doi.org/${doi}`} target="_blank" className="paper-button open-button">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{marginRight: "0.75rem"}}/>
              Open
            </a>
            }
            <a href={`/papers/${fileName}.pdf`} target="_blank" className="paper-button download-button">
              <FontAwesomeIcon icon={faFileArrowDown} style={{marginRight: "0.75rem"}}/>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaperItem