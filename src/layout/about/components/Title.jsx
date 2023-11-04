import SectionTitle from "/src/common/sectionTitle/Index";

const Title = () => {
  return (
    <SectionTitle bgText="About" alignLeft>
      <SectionTitle.Headding>About Me</SectionTitle.Headding>
      <SectionTitle.Brief>
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
      </SectionTitle.Brief>
    </SectionTitle>
  );
};

export default Title;
