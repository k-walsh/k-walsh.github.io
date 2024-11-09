import PageHeader from "../PageHeader";

function BDH() {
  return (
    <PageHeader
      img="images/work/covers/bdh_app.png"
      category="Mobile App Development"
      title="Brown Daily Herald Mobile App"
      description={[
        "The Brown Daily Herald is Brown University’s only student-run, financially independent newspaper that has been publishing content since 1891. During my senior year of college, I helped to develop the first ever mobile app version of the newspaper, allowing the organization move towards a digital-first approach. ",
        <br />,
        <br />,
        "As the frontend team manager, I designed and implemented the frontend architecture in React Native/Expo and coordinated the concurrent development with 4 of my peer engineers, as well as working through the summer to ensure the app was ready to deploy in the fall with a smooth handoff of leadership. The app allows users to opt-in to receive push notifications for breaking news and view stories on their phones with a more user-friendly experience than the current mobile website. This project required a great deal of collaboration between the backend and UI/UX teams but was a rewarding experience because the first version of the app is now available in the App Store!",
      ]}
      technologies="React Native, Expo"
      link={"https://apps.apple.com/us/app/the-brown-daily-herald/id6642661925"}
      id="bdhApp"
    />
  );
}

export default BDH;
