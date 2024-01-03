import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid black",
  boxShadow: 24,
  p: 4,
};

const AddModalBtn = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        style={{
          color: "white",
          fontWeight: "bold",
          backgroundColor: "#134CAB",
          fontSize: "12px",
        }}
      >
        Add
        <AddCircleOutlineOutlinedIcon
          style={{ fontSize: "15px", marginLeft: "5px" }}
        />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "black",
              backgroundColor: "#E5E1DA",
            }}
          >
            X
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AddModalBtn;
