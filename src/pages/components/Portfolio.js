import Image from "next/image";
import cypress from "../assets/cypress.png";

const ProjectItem = ({ img, title, desc, link }) => {
  return (
    <div className="card bg-base-100 shadow-xl pt-4">
      <figure>
        <Image src={img} alt="cypress portfolio amazon" width={100}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-sm btn-primary text-base mt-8"><a href={link} target="_blank">Find Out</a></button>
        </div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="section-container" id="portfolio">
      <div className="max-w-screen-lg w-max m-auto">
        <h2 className="section-title"><span className="orange-text">P</span>ortfolio</h2>
        <p className="section-subtitle">Mockup Automation Test</p>
        <div className="grid grid-cols-3 gap-6 p-10">
          <ProjectItem img={cypress} title="Cypress - Amazon" desc="Automation demo using cypress for e-commerce" link="https://github.com/amir-ubay-qa/cypress"/>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
