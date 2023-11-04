import LinkBtn from "/src/common/linkBtn/Index";
import SectionTitle from "/src/common/sectionTitle/Index";
import { MotionParent, MotionChild } from "/src/common/motionDiv/Index";

const Resume = () => {
  const cardsContent = [
    {
      date: "2014-2015",
      title: "Master Degree of Design",
      from: "CAMBRIDGE UNIVERSITY",
      brief:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      date: "2018-2019",
      title: "Ph.D. in Astrophysics",
      from: "HARVARD UNIVERSITY",
      brief:
        "The most beautiful experience we can have is the mysterious. It is the source of all true art and science.",
    },
    {
      date: "2012-2014",
      title: "Science in Computer Science",
      from: "STANFORD UNIVERSITY",
      brief:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      date: "2010-2012",
      title: "High School Diploma",
      from: "NEW YORK HIGH SCHOOL",
      brief: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      date: "2008-2010",
      title: "Web Development Certificate",
      from: "CODING ACADEMY",
      brief:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    },
    {
      date: "2005-2008",
      title: "Associate Degree in Business",
      from: "CITY COLLEGE",
      brief:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
    },
  ];

  return (
    <section id="resume" className="resume">
      <MotionParent className="container">
        {/* Title */}
        <SectionTitle bgText="Resume">
          <SectionTitle.Headding>Resume</SectionTitle.Headding>
          <SectionTitle.Brief>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
            paradisematic country, in which roasted parts of sentences fly into your mouth.
          </SectionTitle.Brief>
        </SectionTitle>

        {/* Content */}
        <div className="cards row row-cols-md-2 g-4">
          {cardsContent.map((element) => (
            <MotionParent key={element.title}>
              <div className=" h-100 bg-secondary p-4 rounded">
                <MotionChild.span className="date text-primary fw-900" style={{ fontSize: "1.6rem" }}>
                  {element.date}
                </MotionChild.span>
                <MotionChild.h3 className="text-light my-2" style={{ fontSize: "1.6rem" }}>
                  {element.title}
                </MotionChild.h3>
                <MotionChild.span
                  className="provider text-secondary fw-600"
                  style={{ fontSize: ".75rem", letterSpacing: ".25em" }}
                >
                  {element.from}
                </MotionChild.span>
                <MotionChild.p className="text-secondary my-4">{element.brief}</MotionChild.p>
              </div>
            </MotionParent>
          ))}
        </div>

        {/* Button */}
        <MotionParent className="mt-5 pt-5">
          <LinkBtn className="mx-auto py-4 px-5">Download CV</LinkBtn>
        </MotionParent>
      </MotionParent>
    </section>
  );
};

export default Resume;
