import "./style.sass";
import LinkBtn from "/src/common/linkBtn/Index";
import { MotionParent, MotionChild } from "/src/common/motionDiv/Index";

const Achievements = () => {
  const achievements = {
    Awards: 100,
    "Complete Projects": 1200,
    "Happy Customers": 1200,
    "Cups of coffee": 500,
  };

  return (
    <div className="achievements">
      {/* Cards */}
      <MotionParent className="cards-container container">
        <div className="row row-cols-md-4 g-3">
          {Object.keys(achievements).map((name) => {
            return (
              <div className="wrapper" key={name}>
                <MotionChild className="bg-secondary text-center p-4 rounded h-100 d-grid align-items-center">
                  <span className="d-block text-primary fw-700 p-2" style={{ fontSize: "2rem" }}>
                    {achievements[name]}
                  </span>
                  <span className="d-block text-secondary pb-2">{name}</span>
                </MotionChild>
              </div>
            );
          })}
        </div>
      </MotionParent>
      {/* Hire Me */}
      <div
        className="hire-section my-4 mt-md-0"
        style={{
          backgroundImage: "url('/bg_1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="wrapper py-5">
          <MotionParent className="container text-center py-5 my-4">
            <h2 className="text-light fw-900" style={{ fontSize: "2.7rem" }}>
              I'm <span className="text-primary">Available</span> for freelancing
            </h2>
            <p className="text-secondary my-3">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <LinkBtn className="mx-auto px-5" style={{ fontSize: ".75rem" }}>
              Hire Me
            </LinkBtn>
          </MotionParent>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
