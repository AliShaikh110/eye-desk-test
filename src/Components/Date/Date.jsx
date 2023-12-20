import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const Date = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#1757C2", height: "70px", width: "100%" }}
      >
        <div
          style={{
            marginLeft: "20%",
          }}
        >
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            style={{ height: "10px" }}
          >
            <DemoContainer
              components={["DatePicker"]}
              style={{ height: "10px" }}
            >
              <DatePicker
                defaultValue={dayjs("1999-01-10")}
                style={{ height: '10px', '& input': { height: '10px' } }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
    </>
  );
};

export default Date;


// import React from 'react';
// import { LocalizationProvider, DatePicker as MuiDatePicker, makeStyles } from '@mui/lab';
// import AdapterDayjs from '@mui/lab/AdapterDayjs';
// import dayjs from 'dayjs';

// const useStyles = makeStyles({
//   datePicker: {
//     height: '10px',
//     '& .MuiInputBase-input': {
//       height: '10px',
//     },
//   },
// });

// const YourComponent = () => {
//   const classes = useStyles();

//   return (
//     <div style={{ backgroundColor: "#1757C2", height: "70px", width: "100%" }}>
//       <div style={{ marginLeft: "20%" }}>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <MuiDatePicker
//             defaultValue={dayjs("1999-01-10")}
//             classes={{ root: classes.datePicker }}
//           />
//         </LocalizationProvider>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;

