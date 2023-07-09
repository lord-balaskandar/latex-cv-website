import { useEffect, useState } from "react";
import background from "./background.mp4";
import BackButton from "../../components/backButton/backButton";

function Skills() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);


  useEffect(() => {
    fetch("http://86.151.208.21:8081/technicalskills")
      .then((response) => response.json())
      .then((data) => setData(data));

      fetch("http://86.151.208.21:8081/keyskills")
      .then((response) => response.json())
      .then((data) => setData2(data));
  });

  const prepareData2 = (r: any) => (
    <>
    <ul className="">
    {r.filter((item: string)=> item && item !== "").map((anObjectMapped: any, index: number) => {
      return (
        <li key={`${anObjectMapped}`} className="element">{anObjectMapped}</li>
      );
    })}
    </ul>
    </>
  );

  const prepareData = (r: any) => (
    <>
    <ul className="techlist">
    {r.filter((item: string)=> item && item !== "").map((anObjectMapped: any, index: number) => {
      return (
        <li key={`${anObjectMapped}`} className="element">{anObjectMapped}</li>
      );
    })}
    </ul>
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
            <div className="PageHeader">Technical Skills</div>
            <div className="PageMainContent bigboy">{prepareData(data)}</div>
            <div className="PageHeader">Key Skills</div>
            <div className="PageMainContent bigboy">{prepareData2(data2)}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Skills;
