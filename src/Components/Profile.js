import profileImg from "../assets/Profile.jpg";
import "./App.css";

const Profile = () => {
  return (
    <>
      {" "}
      <div className="profile-container">
        <img src={profileImg} alt="profile-img" className="profile-img" />
        <div className="text-container">
          <h2 className="profile-title"> Tharun Teja</h2>
          <h3 className="profile-heading"> Full-Stack Developer</h3>
          <p>
            Trained at{" "}
            <a href="https://www.ccbp.in/" title="NxtWave">
              NxtWave.
            </a>
          </p>
        </div>
      </div>
      <div className="about-container">
        <p className="about-text">
          I'm a dedicated<span> Full Stack Web Developer </span>
          based in Hyderabad. I specialize in building complete web applications
          using technologies like
          <span> React.js, Node.js, Express.js, and SQLite </span>From designing
          responsive front-end interfaces to developing secure and scalable
          back-end systems, I enjoy working across the entire web development
          stack. I'm a 2023 graduate and a certified full-stack developer from
          <span> NxtWave CCBP. </span>I'm passionate about solving real-world
          problems through clean code, continuous learning, and effective
          collaboration.
        </p>
      </div>
    </>
  );
};

export default Profile;
