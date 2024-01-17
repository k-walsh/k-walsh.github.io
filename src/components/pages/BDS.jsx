import PageHeader from "../PageHeader";

function BDS() {
  return (
    <PageHeader
      // img="images/work-covers/bds.png"
      img="images/work-covers/bds-cover.png"
      category="BDS Capstone"
      title="Data Storytelling"
      description={[
        "I conducted a semester-long research project to examine the effects of embellishments in data visualization on user experience, particularly in regards to memory, understandability, and takeaway messages.",
        <br />,
        <br />,
        "After running two experiments with about 100 participants, I found that embellishments don’t seem to hinder accuracy in interpreting the information shown in a chart, and people are more likely to form a stronger opinion on the data when it is presented with embellishments, especially related embellishments that show a clear meaning and connection to the data.",
      ]}
      technologies="Python, Pandas, PsychoPy, Pavlovia, Stats Libraries"
      id="bds"
    />
  );
}

export default BDS;
