interface Experience{
  name: string;
  start: Date;
  end?: Date;
}

interface SchoolExperience extends Experience{
  degree: string;
  logo?: string;
  grade?: string;
}

interface WorkExperience extends Experience{
  location: string;
  description?: string;
}

const schoolExperiences: SchoolExperience[] = [
  {
    name: "Liceo Scientifico Ugo Morin",
    degree: "High School diploma",
    start: new Date(2013, 8),
    end: new Date(2019, 6),
    grade: "95/100",
  },
  {
    name: "Ca' Foscari University of Venice",
    degree: "Bachelor's Degree - Computer Science and Information Technology",
    start: new Date(2019, 8),
    end: new Date(2022, 5),
    grade: "110/110 cum Laude",
  }, {
    name: "Ca' Foscari University of Venice",
    degree: "Master's Degree - Computer Science and Information Technology",
    start: new Date(2022, 8),
    end: new Date(2024, 9),
    grade: "110/110 cum Laude",
  }, {
    name: "Ca' Foscari University of Venice",
    degree: "PhD Student - Computer Science and Information Technology",
    start: new Date(2024, 8),
  }
]

const workExperiences: WorkExperience[] = [
  {
    name: "Academic Tutor",
    location: "Ca' Foscari University of Venice",
    start: new Date(2022, 8),
    description: "Tutoring activity for the _\"Object Oriented Programming\"_ and " +
      "_\"Introduction to Computer Programming\"_ Bachelor's degree courses, consisting of: preparation of study material, " +
      "reinforcement classes, creation of exercises, and one-to-one tuition.",
  }, {
    name: "High School Teacher",
    location: "Liceo Scientifico Ugo Morin",
    start: new Date(2023, 8),
    end: new Date(2024, 8),
    description: "Computer Science teacher for high school 3rd and 4th year. The topics covered were: HTML, JS and Java programming, " +
      "SQL and DBMS",
  }, {
    name: "Software Engineer",
    location: "Secura Factors",
    start: new Date(2023, 8),
  },
]

export {schoolExperiences, workExperiences}
export type {Experience, SchoolExperience, WorkExperience}
