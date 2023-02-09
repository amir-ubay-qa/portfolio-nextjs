import Image from "next/image";
import manual from "../assets/manual-test.png"
import analyze from "../assets/analyze.png"
import api from "../assets/api-test.png"
import automate from "../assets/automate-test.png"
import cicd from "../assets/ci-cd.png"
import report from "../assets/report-test.png"

function ServiceCard({title, desc, img}) {
   return(
      <>
         <div className="card w-45 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={img}
              alt="Shoes"
              className="rounded-xl dark:invert"
              width={100}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-orange-600 font-bold">{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </>
   )
}

function Services() {
  
   return (
    <div className="section-container min-h-screen" id="services">
      <h2 className="section-title mt-24 lg:mt-auto">
        <span className="orange-text">S</span>ervices
      </h2>
      <p className="section-subtitle">My services that can help you</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10 justify-center">
        <ServiceCard title="Manual Test" desc="Manual testing for web app or mobile app" img={manual}/>
        <ServiceCard title="Automate Test" desc="Automate test for web app" img={automate} />
        <ServiceCard title="API Test" desc="API test manual and automation" img={api} />
        <ServiceCard title="CI/CD Integration" desc="Integrate automation test in CI/CD process" img={cicd} />
        <ServiceCard title="Analyze App" desc="Analyze test method and strategy according app's requirement" img={analyze} />
        <ServiceCard title="Test Report" desc="Create test and bug reports" img={report} />
      </div>
    </div>
  );
}

export default Services;
