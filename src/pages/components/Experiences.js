const ExpItem = ({ text, position, year, mykey }) => {
  return (
    <li className="step step-primary" style={{ minHeight: "6rem" }} id={mykey}>
      <div className="text-left">
        <h2 className="text-2xl font-mono font-semibold">{text}</h2>
        <h3 className="text-l font-bold orange-text">{position}</h3>
        {/* <p className="text-1xl">{year}</p> */}
      </div>
    </li>
  );
};

const ExpList = () => {
  const jobData = [
    {
      text: "Gameloft Indonesia",
      position: "QA Game Tester",
      year: "2014-2017",
    },
    { text: "Hardnos", position: "QA Engineer", year: "2017-2019" },
    { text: "Santara", position: "QA Analyst", year: "2019-2020" },
    { text: "WIZ.AI", position: "Project Manager", year: "2020-2021" },
    { text: "Feedloop", position: "QA Engineer", year: "2021-2022" },
    {
      text: "Vouch SG",
      position: "Software Developer Engineer in Test",
      year: "2022-Present",
    },
  ];

  const JobList = jobData.map((value, index) => {
    return (
      <ExpItem
        text={value.text}
        position={value.position}
        year={value.year}
        key={index}
        myKey={value + index}
      />
    );
  });

  return (
    <div className="section-container" id="experiences">
      <div className="max-w-screen-lg w-max m-auto">
        <h2 className="section-title"><span className="orange-text">E</span>xperiences</h2>
        <p className="section-subtitle">My previous and current experiences</p>
        <div className="w-fit p-10">
          <ul className="steps steps-vertical">{JobList}</ul>
        </div>
      </div>
    </div>
  );
};

export default ExpList;
