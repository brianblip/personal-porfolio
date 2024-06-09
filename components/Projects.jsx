import ProjectItem from "./ProjectItem";
import calcu from "../public/assets/projects/calcu.png";
import documentTracking from "../public/assets/projects/document-tracking.png";
import votingApp from "../public/assets/projects/voting-app.png";
import swiftForm from "../public/assets/projects/swiftform.png";
import budgetTracker from "../public/assets/projects/budget-tracker.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <p className="py-4">What I&apos;ve Built</p>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectItem
            title="Document Request Tracking System"
            backgroundImg={documentTracking}
            projectUrl="https://drts.netlify.app/"
            tech="React JS | firebase | Bootstrap | Postman |"
            description="The Document Request Tracking System is a web app that streamlines document request management. Built with JavaScript and Firebase, it allows users to submit, track, and receive notifications for document requests."
          />
          <ProjectItem
            title="Budget Tracker"
            backgroundImg={budgetTracker}
            projectUrl="https://www.budget-tracker.net/"
            tech="Next JS | Python | PostgresSQL | Tailwindcss | ShadcnUI | Postman |"
            description="Budget Tracker is a budget app that uses AI to automatically extract item prices from scanned receipts and input them into the website."
          />
          <ProjectItem
            title="Swift Form"
            backgroundImg={swiftForm}
            projectUrl="https://swiftform.boomtech.co/login"
            tech="Next JS | Python | PostgresSQL | Tailwindcss | MantineUI | Figma | Postman |"
            description="SwiftForm is an AI-powered form builder similar to Google Forms. Users type a prompt, and the AI generates a form based on the prompt."
          />
          <ProjectItem
            title="Online Voting App"
            backgroundImg={votingApp}
            projectUrl="https://online-voting-app-api.000webhostapp.com/#/login"
            tech="React JS | Bootstrap | MySQL | PHP | TypeScript |"
            description="The Online Voting Application is a secure, user-friendly web platform for conducting online voting. Built with TypeScript, PHP, and MySQL, it enables remote voting while ensuring election integrity."
          />

          <ProjectItem
            title="Calculator"
            backgroundImg={calcu}
            projectUrl="https://calcu-one.vercel.app/"
            tech="React JS | CSS | Javascript | "
            description="Calcu is an online calculator for basic arithmetic. Built with HTML, CSS, and JavaScript, it provides a simple, intuitive interface for easy calculations."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

/* return (
    <div className="shadow-xl shadow-gray-300 rounded-xl lg:p-4">
      <Image
        className="rounded-sm hover:scale-105 ease-in duration-300 w-full h-[170px] object-cover"
        src={imageSrc}
        width="800"
        height="500"
        alt="/"
      />
      <div>
        <h5 className="py-3 tracking-wider text-l">{title}</h5>
        <p className="pt-2 pb-6">
          {getDescription(description, 140)}
          {showReadMore(description, 140) && (
            <span
              className="text-lg text-center text-blue-500 cursor-pointer"
              onClick={toggleShowFull}
            >
              Read More
            </span>
          )}
        </p>

        <Link href={link}>
          <h4 className="text-center py-2 rounded-lg bg-[#e7f4ff] px-5 text-lg text-[#19A7CE]">
            View Project
          </h4>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="w-full py-10 lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tacking-widest uppercase text-[#146C94]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Project
            imageSrc="/assets/projects/calcu.png"
            title="Calc"
            description="Calcu is an online calculator that allows users to perform basic arithmetic operations. Built using HTML,CSS and Javascript, the application provides a simple and intuitive user interface that allows users to perform calculations with ease."
            link="https://calcu-one.vercel.app/"
          />
          <Project
            imageSrc="/assets/projects/document-tracking.png"
            title="Document Request Tracking System"
            description="The Document Request Tracking System is a web-based application designed to streamline the process of managing and tracking document requests. Built using JavaScript and Firebase, the system allows users to submit requests for documents, track the status of their requests, and receive notifications when their requests have been fulfilled."
            link="https://drts.netlify.app/"
          />
          <Project
            imageSrc="/assets/projects/voting-app.png"
            title="Online Voting Application"
            description="The Online Voting Application is a secure and user-friendly web-based platform designed for conducting online voting processes. Built using TypeScript, PHP, and MySQL, the application provides a simple and efficient way for voters to cast their votes remotely, while ensuring the integrity and accuracy of the election results."
            link="https://online-voting-app-api.000webhostapp.com/#/login"
          />
          <Project
            imageSrc="/assets/projects/swiftform.png"
            title="Online Voting Application"
            description="The Online Voting Application is a secure and user-friendly web-based platform designed for conducting online voting processes. Built using TypeScript, PHP, and MySQL, the application provides a simple and efficient way for voters to cast their votes remotely, while ensuring the integrity and accuracy of the election results."
            link="https://online-voting-app-api.000webhostapp.com/#/login"
          />
        </div>
      </div>
    </div>
  );
};
 */
