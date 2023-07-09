import { useEffect, useState } from "react";
import background from "./background.mp4";
import BackButton from "../../components/backButton/backButton";

function KeySkills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8081/keyskills")
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  const prepareData = (r: any) => (
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
            <div className="PageHeader">Key Skills</div>
            <div className="PageMainContent bigboy">{prepareData(data)}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default KeySkills;
