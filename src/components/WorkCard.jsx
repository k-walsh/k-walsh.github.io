import Modal from "@mui/material/Modal";
import { useState } from "react";

function WorkCard(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const open = props.open;
  // const handleOpen = props.handleOpen;
  // const handleClose = props.handleClose;

  return (
    <div className="workModal">
      <div className="workCard">
        <div className="projectImgContainer">
          <img
            src={props.path}
            alt={`project cover for ${props.title}`}
            onClick={handleOpen}
            className="projectImg"
          />
        </div>
        <div className="cardlabel">
          <h3>{props.title}</h3>
          <p className="type">{props.type}</p>
          <p className="show">Show Project</p>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          backgroundColor: "rgb(0, 0, 0, 0.05)",
          //   backgroundColor: "rgb(120 119 119, .28)",
        }}
        disableAutoFocus
      >
        <div className="modalBox" id={props.modalID}>
          {props.page}
        </div>
      </Modal>
    </div>
  );
}

export default WorkCard;
