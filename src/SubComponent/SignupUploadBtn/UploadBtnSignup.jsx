import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

const UploadBtnSignup = () => {
  return (
    <Button component="label" color="primary" sx={{fontWeight:600,fontSize:"1.1rem",px:"0.7rem",py:"1.5rem",textAlign:"center"}}  variant="contained" startIcon={<CloudUploadIcon sx={{display:"flex",justifyContent:"center"}}/>}>
    Your Logo
    <VisuallyHiddenInput type="file" />
  </Button> )
}

export default UploadBtnSignup