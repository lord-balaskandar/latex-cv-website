import { useEffect, useState } from "react";
import background from "./background.mp4";
import BackButton from "../../components/backButton/backButton";

function Experience() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/experience")
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  const prepareData = (r: any) => (
    <div  >
      {r.map((anObjectMapped: any, index: number) => {
        return (
          <p key={`${anObjectMapped.title}`} > 
            <div className="pageSection">
              {anObjectMapped.title + " - " + anObjectMapped.organisation}
              <div className="location">{anObjectMapped.location}</div>
              <div className="Date">{new Date(anObjectMapped.startDate).toLocaleDateString() + " - " + new Date(anObjectMapped.endDate).toLocaleDateString()}</div>
              <ul>
                {anObjectMapped.skills.map((skill: any, index2: number) => {
                  return <li key={`${skill}`}>{skill}</li>;
                })}
              </ul>
              <div className="Stack">
                Tech Stack: {anObjectMapped.stack.join(", ").replace("}", "")}
              </div>
            </div>
          </p>
        );
      })}
    </div>
  );

  return (
    <>

    <div className="Page">
      <video src={background} autoPlay loop muted />
      <div className="PageContent">
      <div className="BackContainer">
      <BackButton/>
      </div>
        <div className="PageSubContent">
          <div className="pageSection">
            <div className="PageHeader">Experience</div>
            <div className="PageMainContent bigboy">{prepareData(data)}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Experience;
