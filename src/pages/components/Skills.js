import Image from 'next/image'
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import jenkins from '../assets/jenkins.png';
import git from '../assets/git.svg';
import githubAction from '../assets/githubAction.png';
import docker from '../assets/docker.png';
import cypress from '../assets/cypress.png';
import robot from '../assets/robot.png';
import wdio from '../assets/wdio.svg'


const CardSkill = ({ img, title, desc }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl rounded-md">
      <figure className="w-1/3">
        <Image src={img} alt={title} className="w-14"/>
      </figure>
      <div className="card-body w-2/3 pl-0 pr-3">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const SkillSets = () => {
  const logo = {
    git: git,
    cypress: cypress,
    robot: robot,
    jenkins: jenkins,
    html: html,
    javascript: javascript,
    react: react,
    githubAction: githubAction,
    docker: docker,    
    wdio: wdio
  }
  return (
    <div className="section-container" id="skill">
        <h2 className="section-title mt-24 lg:mt-auto"><span className="orange-text">S</span>kills</h2>
        <p className="section-subtitle">
          My current skills as QA Engineer
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10 place-content-center">
          <CardSkill
            img={logo.cypress}
            title="Cypress"
            desc="The tool for automation testing with Javascript"
          />
          <CardSkill
            img={logo.robot}
            title="Robot Framework"
            desc="Another tool for automation testing but with Python"
          />
          <CardSkill
            img={logo.wdio}
            title="WebdriverIO"
            desc="Latest test framework for node.js"
          />
          <CardSkill
            img={logo.git}
            title="GIT"
            desc="Another must have skill to manage the repository"
          />
          <CardSkill
            img={logo.jenkins}
            title="Jenkins"
            desc="For Managing CI/CD process"
          />
          <CardSkill
            img={logo.githubAction}
            title="GITHUB Action"
            desc="Another CI/CD tool from Github"
          />
          <CardSkill
            img={logo.docker}
            title="Docker"
            desc="Helping me to run programs in flexible 'Virtual Machine'"
          />
          <CardSkill
            img={logo.html}
            title="HTML/CSS"
            desc="The must have skill as part of Software Development team"
          />
          <CardSkill
            img={logo.javascript}
            title="Javascript"
            desc="My main programming language to understand Software Development"
          />
          <div className='hidden md:block'></div>
          <CardSkill
            img={logo.react}
            title="REACT"
            desc="The framework I learned to know more about frontend development"
          />
        </div>
      </div>
  );
};

export default SkillSets;
