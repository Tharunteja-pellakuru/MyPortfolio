import "./App.css";

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h1>Certifications</h1>
      <div className="certifications-icons-con">
        <div className="certification-icon">
          <div className="certificate-info">
            <p className="certificate-name">Full Stack Web Development</p>
            <p className="certificate-source">Issued by: CCBP Nxt Wave</p>
            <p className="certificate-description">
              A comprehensive program that covered HTML, CSS, JavaScript, React,
              Node.js, Express.js, SQLite, and databases. This certification
              demonstrates proficiency in building and deploying full-stack web
              applications.
            </p>
          </div>
        </div>

        <div className="certification-icon">
          <div className="certificate-info">
            <p className="certificate-name">
              Backend Development with Node.js and Express.js
            </p>
            <p className="certificate-source">Issued by: CCBP Nxt Wave</p>
            <p className="certificate-description">
              This certification demonstrates expertise in building server-side
              applications with Node.js and Express.js. The course covered API
              development, routing, middleware, and backend server management.
            </p>
          </div>
        </div>

        <div className="certification-icon">
          <div className="certificate-info">
            <p className="certificate-name">Database Management with SQLite</p>
            <p className="certificate-source">Issued by: CCBP Nxt Wave</p>
            <p className="certificate-description">
              This certification highlights skills in designing and managing
              relational databases using SQLite. It covers creating tables,
              writing SQL queries, and integrating databases with Node.js
              applications.
            </p>
          </div>
        </div>

        <div className="certification-icon">
          <div className="certificate-info">
            <p className="certificate-name">
              Frontend Development with React.js
            </p>
            <p className="certificate-source">Issued by: CCBP Nxt Wave</p>
            <p className="certificate-description">
              This certification showcases proficiency in building dynamic and
              responsive web user interfaces using React.js. It includes working
              with components, props, state management, hooks, and routing to
              create modern single-page applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
