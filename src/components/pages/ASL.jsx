import PageHeader from "../PageHeader";

function ASL() {
  return (
    <div>
      <PageHeader
        img="images/work-covers/asl.png"
        category="Computer Vision"
        title="ASL Alphabet Translator"
        partners="Kiera Walsh and Joan Nekoye"
        description="This project focuses around building a model that can classify
            American Sign Language (ASL) alphabet handshapes and display the
            corresponding letter. Using vgg16 as the base of this model and
            adding a custom head and dropout layers, we were able to classify
            images with a testing accuracy of 62.77%. The project culminated in
            a live camera feed in which users place their hand inside a box, a
            screenshot of this box is fed through our model, and the prediction
            of the model is calculated and the corresponding letter is displayed
            on the screen."
        technologies="Python, OpenCV, TensorFlow"
        link="https://github.com/k-walsh/duo-lingos"
        id="asl"
      />
    </div>
  );
}

export default ASL;
