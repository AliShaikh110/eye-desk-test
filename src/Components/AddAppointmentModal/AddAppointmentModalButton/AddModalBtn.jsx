import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RegistrationAndAptFormMain from "../../PatientRegistration&AptForm/RegistrationAndAptFormMain";
import { useAppContext } from "../../../AppContext/AppContext";

const styleModal = {
  position: "absolute",
  overflow: "auto",
  width: "100%",
  height: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "0px !important",
  margin: "0px !important",
};

const AddModalBtn = () => {
  const { setName, setAddress, setMiddleName} = useAppContext();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (modalName, modalMiddleName,modalAddress) => {
    setName(modalName);
    setMiddleName(modalMiddleName);
    setAddress(modalAddress);
    setOpen(false);
  };

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
        <Box sx={styleModal}>
          <Button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "black",
              backgroundColor: "#E5E1DA",
              fontWeight: "bold",
            }}
          >
            X
          </Button>
          <Box>
            <RegistrationAndAptFormMain onSave={handleSave} onClose={handleClose} />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddModalBtn;
