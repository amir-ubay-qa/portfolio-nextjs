import Image from "next/image";
import cypress from "../assets/cypress.png";
import robot from "../assets/robot.png";
import wdio from "../assets/wdio.svg";
import next from "../assets/nextjs.png";
import react from "../assets/react.png";

const ProjectItem = ({ img, title, desc, link }) => {
  return (
    <div className="card bg-base-100 shadow-xl pt-4">
      <figure>
        <Image src={img} alt="cypress portfolio amazon" width={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-sm btn-primary text-base mt-8"><a href={link} target="_blank">Check Repo</a></button>
        </div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="section-container" id="portfolio">
      <h2 className="section-title mt-24 lg:mt-auto"><span className="orange-text">P</span>ortfolio</h2>
      <p className="section-subtitle">My portfolio related with QA</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        <ProjectItem img={cypress} title="Cypress" desc="Automation test of e2e and xhr using cypress" link="https://github.com/amir-ubay-qa/cypress" />
        <ProjectItem img={robot} title="Robotframework" desc="Automation test of e2e using robotframework" link="https://github.com/amir-ubay-qa/robotframework" />
        <ProjectItem img={wdio} title="WebdriverIO" desc="Automation test of e2e using webdriverio" link="https://github.com/amir-ubay-qa/webdriver-io" />
        <ProjectItem img={next} title="NextJS" desc="Sandbox QA for automate testing created with NextJS" link="https://github.com/amir-ubay-qa/sandbox-qa" />
        <ProjectItem img={next} title="NextJS" desc="This web portfolio's repository created with NextJS" link="https://github.com/amir-ubay-qa/portfolio-nextjs" />
        <ProjectItem img={react} title="React" desc="SPA Pokedex created with React" link="https://github.com/amir-ubay-qa/pokedex" />    
      </div>
    </div>
  );
};

export default ProjectList;
