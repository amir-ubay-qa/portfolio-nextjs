const ProjectItem = ({ img = "https://placeimg.com/400/225/arch", title }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Find Out</button>
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
          <ProjectItem title="Tokopedia" />
          <ProjectItem title="Tokopedia" />
          <ProjectItem title="Tokopedia" />
          <ProjectItem title="Tokopedia" />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
