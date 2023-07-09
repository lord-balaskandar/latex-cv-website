import { useEffect, useState } from "react";
import background from "./background.mp4";
import BackButton from "../../components/backButton/backButton";

function Qualifications() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetch("http://86.151.208.21:8081/qualifications")
      .then((response) => response.json())
      .then((data) => setData(data));

      fetch("http://86.151.208.21:8081/education")
      .then((response) => response.json())
      .then((data) => setData2(data));
  });

  const prepareData = (r: any) => (
    <>
    {r.map((anObjectMapped: any, index: number) => {
      return (
        <p key={`${anObjectMapped.title}`}>
          <div className="pageSection">
          <div className="QualiTitle">{anObjectMapped.title}</div>
            <div className="Date">{anObjectMapped.examiningBody + " - " + anObjectMapped.organisation}</div>
            <div className="Date">{new Date(anObjectMapped.dateObtained).toLocaleDateString()}</div>
          </div>
        </p>
      );
    })}
    </>
  );


  const prepareData2 = (r: any) => (
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
    <video  autoPlay loop muted playsInline src={background} />
      <div className="PageContent">
      <div className="BackContainer">
      <BackButton/>
      </div>
        <div className="PageSubContent">
          <div className="pageSection">
            <div className="PageHeader">Qualifications</div>
            <div className="PageMainContent bigboy">{prepareData(data)}</div>
            <div className="PageHeader">Education</div>
            <div className="PageMainContent bigboy">{prepareData2(data2)}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Qualifications;
