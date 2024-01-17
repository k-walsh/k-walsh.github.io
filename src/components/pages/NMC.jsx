import PageHeader from "../PageHeader";

function NMC() {
  return (
    <PageHeader
      img="images/work-covers/nmc.png"
      category="Web Development"
      title="New Majority Capital Dashboard"
      description="This interactive dashboard was designed to reflect data on topics
            such as wealth inequality, minority business ownership, and growth
            of industries, utilizing Census APIs and a SQL backend to
            efficiently retrieve and visualize data for all counties in the US.
            The purpose is to spread information about the racial and gender
            wealth gap and highlight the role small business ownership could
            have in closing it."
      technologies="React, JavaScript, CSS, Python, Pandas, APIs, SQL"
      comingSoon={true}
      id="nmc"
    />
  );
}

export default NMC;
