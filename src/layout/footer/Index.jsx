import { MotionParent, MotionChild } from "/src/common/motionDiv/Index";

const Footer = () => {
  const icons = {
    listItem: {
      viewBox: "0 0 512 512",
      width: 15,
      innerSvg: (
        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
      ),
    },
    locationIcon: {
      viewBox: "0 0 512 512",
      width: 20,
      innerSvg: (
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
      ),
    },
    callIcon: {
      viewBox: "0 0 512 512",
      width: 20,
      innerSvg: (
        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
      ),
    },
    mailIcon: {
      viewBox: "0 0 512 512",
      width: 20,
      innerSvg: (
        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
      ),
    },
    twitter: {
      viewBox: "0 0 512 512",
      innerSvg: (
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
      ),
    },
    facebook: {
      viewBox: "0 0 320 512",
      innerSvg: (
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      ),
    },
    instagram: {
      viewBox: "0 0 512 512",
      innerSvg: (
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      ),
    },
  };

  const lists = [
    {
      title: "Links",
      items: [
        { icon: icons.listItem, text: "Home", href: "#" },
        { icon: icons.listItem, text: "About", href: "#" },
        { icon: icons.listItem, text: "Services", href: "#" },
        { icon: icons.listItem, text: "Projects", href: "#" },
        { icon: icons.listItem, text: "Contact", href: "#" },
      ],
    },
    {
      title: "Services",
      items: [
        { icon: icons.listItem, text: "Web Design", href: "#" },
        { icon: icons.listItem, text: "Web Development", href: "#" },
        { icon: icons.listItem, text: "Business strategy", href: "#" },
        { icon: icons.listItem, text: "Data Analysis", href: "#" },
        { icon: icons.listItem, text: "Graphic Design", href: "#" },
      ],
    },
    {
      title: "Have a Questions?",
      items: [
        { icon: icons.locationIcon, text: "203 Fake St. Mountain View, San Francisco, California, USA", href: null },
        { icon: icons.callIcon, text: "+2 392 3929 210", href: "#" },
        { icon: icons.mailIcon, text: "info@yourdomain.com", href: "#" },
      ],
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="row row-cols-md-4">
          {/* First Col */}
          <MotionParent className="mb-4">
            <MotionChild.h2 className="fs-4 fw-500 text-light mb-4 pb-3">About</MotionChild.h2>
            <MotionChild.p className="text-secondary">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts.
            </MotionChild.p>
            <div className="icons mt-md-5 pt-4">
              {[
                ["Twitter", icons.twitter],
                ["Facebook", icons.facebook],
                ["Instagram", icons.instagram],
              ].map(([linkName, { viewBox, innerSvg }], i) => (
                <MotionChild.a
                  className="d-inline-block p-2 bg-secondary rounded-circle me-3"
                  href="#"
                  aria-label={`Visit my ${linkName}`}
                  key={i}
                >
                  <svg width="25" height="25" className="fill-secondary m-1" viewBox={viewBox}>
                    {innerSvg}
                  </svg>
                </MotionChild.a>
              ))}
            </div>
          </MotionParent>

          {/* Other Cols */}
          {lists.map(({ title, items }) => (
            <MotionParent className="mb-4" key={title}>
              <MotionChild.h2 className="fs-4 fw-500 text-light mb-md-4 pb-3">{title}</MotionChild.h2>
              <ul className="ps-0">
                {items.map(({ icon, text, href }) => (
                  <MotionChild.li className="d-flex gap-2 mx-0 mb-2" key={text}>
                    <div className="flex-shrink-0" style={{ width: "1.2rem" }}>
                      <svg width={icon.width} height="28" className="fill-secondary" viewBox={icon.viewBox}>
                        {icon.innerSvg}
                      </svg>
                    </div>
                    <div className="flex-grow-1">
                      {href ? (
                        <a className="text-secondary text-decoration-none" href={href}>
                          {text}
                        </a>
                      ) : (
                        <p style={{ color: "#FFFFFFB3" }}>{text}</p>
                      )}
                    </div>
                  </MotionChild.li>
                ))}
              </ul>
            </MotionParent>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <MotionParent className="container my-5 pb-5">
        <p className="text-center fw-500" style={{ color: "#999" }}>
          Copyright ©2023 All rights reserved | This template is made with Beltagy by
          <a
            className="text-secondary text-decoration-none text_hover-light"
            href="https://colorlib.com"
            target="_blank"
          >
            Colorlib
          </a>
        </p>
      </MotionParent>
    </footer>
  );
};

export default Footer;
