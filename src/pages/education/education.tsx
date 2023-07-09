import { useEffect, useState } from "react";
import background from "./background.mp4";
import BackButton from "../../components/backButton/backButton";

function Education() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8081/education")
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  const prepareData = (r: any) => (
    <>
    {r.map((anObjectMapped: any, index: number) => {
      return (
        <p key={`${anObjectMapped.title}`}>
          <div className="pageSection">
          <div className="QualiTitle">{anObjectMapped.title}</div>
            <div className="Date">{anObjectMapped.institution}</div>
            <div className="Date">{anObjectMapped.location}</div>
            <div className="Date">{new Date(anObjectMapped.startDate).toLocaleDateString() + " - " + new Date(anObjectMapped.endDate).toLocaleDateString()}</div>
          </div>
        </p>
      );
    })}
    </>
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
            <div className="PageHeader">Education</div>
            <div className="PageMainContent bigboy education">{prepareData(data)}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Education;
