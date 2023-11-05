import LinkBtn from "/src/common/linkBtn/Index";
import SectionTitle from "/src/common/sectionTitle/Index";
import { MotionParent, MotionChild } from "/src/common/motionDiv/Index";

const Contact = () => {
  const contactInfo = [
    {
      icon: "/contact/icon_4.svg",
      title: "ADDRESS",
      details: { text: "198 West 21th Street, Suite 721 New York NY 10016", type: "text" },
    },
    {
      icon: "/contact/icon_3.svg",
      title: "CONTACT NUMBER",
      details: { text: "+ 1235 2355 98", type: "link", href: "#" },
    },
    {
      icon: "/contact/icon_2.svg",
      title: "EMAIL ADDRESS",
      details: { text: "info@yoursite.com", type: "link", href: "#" },
    },
    {
      icon: "/contact/icon_1.svg",
      title: "WEBSITE",
      details: { text: "yoursite.com", type: "link", href: "#" },
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionTitle bgText="Contact">
          <SectionTitle.Headding>Contact Me</SectionTitle.Headding>
          <SectionTitle.Brief>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </SectionTitle.Brief>
        </SectionTitle>

        {/* Contacts Info */}
        <div className="mt-3 row row-cols-md-2 row-cols-lg-4 gy-5 gx-5 gx-lg-3">
          {contactInfo.map(({ icon, title, details }) => (
            <MotionParent className="wrapper text-center" key={title}>
              <MotionChild className="d-inline-block icon p-4 rounded-circle bg-secondary">
                <img className="m-3" src={icon} width="28" height="28" alt={title} />
              </MotionChild>
              <MotionChild.span className="d-block text-light fw-500 mt-4 mb-3" style={{ fontSize: "1.1rem" }}>
                {title}
              </MotionChild.span>
              {details.type === "link" ? (
                <MotionChild.a className="d-block text-light text-decoration-none" href={details.href}>
                  {details.text}
                </MotionChild.a>
              ) : (
                <MotionChild.span className="d-block text-secondary">{details.text}</MotionChild.span>
              )}
            </MotionParent>
          ))}
        </div>

        {/* Contact Form */}
        <MotionParent className="row g-0 row-cols-md-2 flex-md-row-reverse mt-5 pt-5">
          <form className="p-3 p-md-5 d-flex flex-column gap-3" style={{ backgroundColor: "#f8f9fa" }}>
            <MotionChild.input type="text" className="form-control p-3" placeholder="Your Name" />
            <MotionChild.input type="email" className="form-control p-3" placeholder="Your Email" />
            <MotionChild.input type="text" className="form-control p-3" placeholder="Subject" />
            <MotionChild.textarea
              className="form-control p-3"
              style={{ resize: "none" }}
              placeholder="Message"
              cols="30"
              rows="7"
            ></MotionChild.textarea>
            <LinkBtn className="px-5 fw-500 w-100 w-md-fit">Send Message</LinkBtn>
          </form>
          <div
            className="img"
            style={{ background: "center / cover url('/contact/form.webp')", minHeight: "30rem" }}
          ></div>
        </MotionParent>
      </div>
    </section>
  );
};

export default Contact;
