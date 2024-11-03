import "./Timeline.css"
import {JSX, ReactElement} from "react";

interface MonthProps{
  year: number;
  month: number;
}

const Month = ({year, month}: MonthProps) => {

  const getMonth = (year:number, month: number): string => {
    if (month === 1) return ""+year;
    switch (month){
      case 2: return "FEB";
      case 3: return "MAR";
      case 4: return "APR";
      case 5: return "MAY";
      case 6: return "JUN";
      case 7: return "JUL";
      case 8: return "AUG";
      case 9: return "SEP";
      case 10: return "OCT";
      case 11: return "NOV";
      case 12: return "DEC";
    }
    return "";
  }

  return (
    <div className="month-item">
      <p className="month-label">
        {getMonth(year, month)}
      </p>
    </div>
  )
}

const Timeline = () => {
  const getMonths = () => {
    const months: ReactElement[] = [];
    for (let year = 2013; year < 2024; year++) {
      for (let month = 0; month < 12; month++) {
        months.push(<Month year={year} month={month+1} />)
      }
    }
    return months;
  }

  return (
    <div id="timeline" style={{display: "flex", width: "auto"}}>
      {getMonths()}
    </div>
  )
}

export default Timeline