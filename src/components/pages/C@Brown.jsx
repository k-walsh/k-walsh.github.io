import PageHeader from "../PageHeader";

function CBrown() {
  return (
    <PageHeader
      img="images/work/covers/concentrations.png"
      category="Data Story, Web Development"
      title="Concentrations@Brown"
      description={[
        "This data narrative tells the story about how concentrations (aka majors) at Brown University have shifted over the last 20 years. The article is centered around three graphs, which together reveal an interesting trend in the changing academic landscape at Brown: social science majors used to top the charts, but have recently been on the decline while computer science majors are rising steadily.",
        <br />,
        <br />,
        "This story was created by first scraping data related to course enrollment and degree completions and then exploring trends, plotting the data with ggplot, and adjusting the chart aesthetics in adobe illustrator. Putting everything together into a compelling narrative combined many of my passions — data, visualizations, and web design.",
      ]}
      technologies="HTML, CSS, Adobe Illustrator, R, Python, Pandas, Webscraping"
      link={"https://k-walsh.github.io/concentrations-at-brown/"}
      id="c@brown"
    />
  );
}

export default CBrown;
