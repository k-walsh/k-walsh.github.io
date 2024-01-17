import PageHeader from "../PageHeader";

function Tunes() {
  return (
    <PageHeader
      img="images/work-covers/tunes3.png"
      category="Data Science"
      title="Tunes Over Time"
      partners="Sophia Liu, Mandy He, Annabeth Stokley, Kiera Walsh"
      description="Analyzed musical features of popular songs from the past 60 years
            using a Billboard Charts dataset and Spotify’s API. We found that
            songs from the 1990s-2010s have a higher speechiness and a lower
            instrumentalness than popular songs from 1960s-1990s, suggesting a
            shift in music features over time, possibly due to this rise of new
            genres in the 90s such as rap music."
      technologies="Python, APIs, SQL, Pandas, Sklearn, Matplotlib"
      link="https://github.com/k-walsh/tunes-over-time"
      id="tunes"
    />
  );
}

export default Tunes;
