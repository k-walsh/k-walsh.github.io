import PageHeader from "../PageHeader";

function NewsQuiz() {
  return (
    <PageHeader
      img="images/work/covers/newsquiz.png"
      category="Web Development"
      title="Brown Daily Herald News Quiz"
      description="This news quiz tests readers’ knowledge of the past week’s top
               stories from Brown University’s student-run newspaper, the Brown
               Daily Herald. This project was designed to be easily scalable,
               producing a new quiz each week at a unique url simply by updating a
               json with the week’s questions."
      technologies="React, JavaScript, CSS"
      link="https://projects.browndailyherald.com/news-quiz/"
      id="NewsQuiz"
    />
  );
}

export default NewsQuiz;
