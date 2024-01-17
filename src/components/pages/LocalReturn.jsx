import PageHeader from "../PageHeader";

function LocalReturn() {
  return (
    <PageHeader
      img="images/work-covers/local.png"
      category="Web Development"
      title="Community Wealth Dashboard"
      description={[
        "This dashboard shows a snapshot of community wealth across communities in Rhode Island, created for a nonprofit, LocalReturn, whose mission is to build community wealth in neighborhoods that have experienced historical disinvestment. It was built in Tableau, using indicators gathered from extensive research across sources such as the Census, RI Dept of State, and more.",
        <br />,
        <br />,
        "On top of standard measures of wealth such as income, poverty rates, and unemployment, other factors like diversity, the environment, homeownership, diverse business scenes, property value, accessibility, and community engagement bring wealth to a community too, and can be explored in this interactive dashboard to learn and raise questions about the economic and social resilience of our communities in RI.",
      ]}
      technologies="Tableau, Excel, Python, Pandas"
      link="https://public.tableau.com/views/RITableau/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link"
      id="local"
    />
  );
}

export default LocalReturn;
