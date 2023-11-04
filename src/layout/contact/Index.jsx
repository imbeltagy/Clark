import LinkBtn from "../../common/linkBtn";
import SectionTitle from "/src/common/sectionTitle";

const Contact = () => {
  const contactInfo = [
    {
      icon: "/src/assets/images/contact/icon_4.svg",
      title: "ADDRESS",
      details: { text: "198 West 21th Street, Suite 721 New York NY 10016", type: "text" },
    },
    {
      icon: "/src/assets/images/contact/icon_3.svg",
      title: "CONTACT NUMBER",
      details: { text: "+ 1235 2355 98", type: "link", href: "#" },
    },
    {
      icon: "/src/assets/images/contact/icon_2.svg",
      title: "EMAIL ADDRESS",
      details: { text: "info@yoursite.com", type: "link", href: "#" },
    },
    {
      icon: "/src/assets/images/contact/icon_1.svg",
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
            <div className="wrapper text-center" key={title}>
              <div className="d-inline-block icon p-4 rounded-circle bg-secondary">
                <img className="m-3" src={icon} width="28" alt={title} />
              </div>
              <span className="d-block text-light fw-500 mt-4 mb-3" style={{ fontSize: "1.1rem" }}>
                {title}
              </span>
              {details.type === "link" ? (
                <a className="d-block text-light text-decoration-none" href={details.href}>
                  {details.text}
                </a>
              ) : (
                <span className="d-block text-secondary">{details.text}</span>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="row g-0 row-cols-md-2 flex-md-row-reverse mt-5 pt-5">
          <form className="p-5 d-flex flex-column gap-3" style={{ backgroundColor: "#f8f9fa" }}>
            <input type="text" className="form-control p-3" placeholder="Your Name" />
            <input type="email" className="form-control p-3" placeholder="Your Email" />
            <input type="text" className="form-control p-3" placeholder="Subject" />
            <textarea
              className="form-control p-3"
              style={{ resize: "none" }}
              placeholder="Message"
              cols="30"
              rows="7"
            ></textarea>
            <LinkBtn className="px-5 fw-500">Send Message</LinkBtn>
          </form>
          <div
            className="img"
            style={{ background: "center / cover url('/src/assets/images/contact/form.jpg')", minHeight: "30rem" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
