import PageHeader from "../PageHeader";

function CS111() {
  return (
    <PageHeader
      img="images/work-covers/111-site2.png"
      category="Web Development"
      title="CS 111 Website"
      description={[
        "This website was designed for the Fall 2023 iteration of CS111 at Brown University. As a Head Teaching Assistant for this course, I led a team of TAs in the redevelopment of this website to adapt it to our new theme - rubber ducks.",
        <br />,
        <br />,
        "CS111 was the intro computer science course I took at Brown, which was the first CS course I have ever taken, and TAing for this class for the past two years has been a highlight of my time at Brown. Throughout the semester, I updated the site with new assignments and loved changing the themes of the ducks to match the seasons.",
      ]}
      technologies="Jekyll, HTML, CSS, Github Pages"
      link="https://brown-csci0111.github.io/pages/home.html"
      id="cs111"
    />
  );
}

export default CS111;
