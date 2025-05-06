import Project1 from "../assets/Project1.avif";
import Project2 from "../assets/Project2.avif";
import "./App.css";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1> Projects </h1>
      <div className="projects">
        <div className="project1">
          <a href="https://github.com/Tharunteja-pellakuru/Taskify.git">
            <h2 style={{ textAlign: "center" }}> Taskify App</h2>
          </a>
          <img className="project-img" src={Project1} alt="Project1" />
          <div className="project-text-container">
            <p>
              {" "}
              Todo App is a basic task management application that allows users
              to add, view, complete, and delete tasks. It helps users stay
              organized by keeping track of their daily to-dos in a clean and
              minimal interface. The app typically includes features like adding
              a new task, marking a task as completed, and removing tasks from
              the list.
            </p>
          </div>
        </div>{" "}
        <div className="project1">
          <a href="https://github.com/Tharunteja-pellakuru/B-Store-App.git">
            <h2 style={{ textAlign: "center" }}> B-Store App</h2>
          </a>
          <img className="project-img" src={Project2} alt="Project1" />
          <div className="project-text-container">
            <p>
              {" "}
              B Store App is an e-commerce application designed for browsing,
              searching, and purchasing products online. It allows users to
              explore a catalog of items, add products to a cart, view product
              details, and complete purchases through a streamlined checkout
              process. The app typically includes features like user
              authentication, product filtering, order history, and a responsive
              design for seamless shopping across devices.
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Projects;
