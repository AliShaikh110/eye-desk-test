import React from 'react'
import Navbar from '../../Nav/Navbar';

const OT = () => {
  return (
    <>
  <Navbar/>
OT Component
    </>
  )
}

export default OT;

// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
// import Stack from '@mui/material/Stack';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Page1 from './Pagination/Page1';
// import Page2 from './Pagination/Page2';
// import Page3 from './Pagination/Page3';
// import Page4 from './Pagination/Page4';

// const OT = () => {
//   const [currentPage, setCurrentPage] = React.useState(1);

//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   const renderComponentBasedOnPage = () => {
//     switch (currentPage) {
//       case 1:
//         return <Page1/>
//       case 2:
//         return <Page2/>;
//       case 3:
//         return <Page3/>
//       case 4:
//         return <Page4/>
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Stack spacing={2}>
//         <Pagination
//           count={4}
//           page={currentPage}
//           onChange={handlePageChange}
//           renderItem={(item) => (
//             <PaginationItem
//               slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
//               {...item}
//             />
//           )}
//         />
//       </Stack>
      
//       {renderComponentBasedOnPage()}
//     </>
//   );
// };


// export default OT;
