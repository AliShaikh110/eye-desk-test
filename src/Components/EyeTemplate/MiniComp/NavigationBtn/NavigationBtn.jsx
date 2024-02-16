import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HistoryComp from '../../../HistoryComp/Main/HistoryComp';
import RefractionMain from '../../../RefractionComponent/Main/Main';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    return (
        <Box sx={{ width: '100%', }}>
        <Box paddingX={"1rem"}  >

            <Box sx={{border:'1px solid rgba(105, 105, 105, 0.5)', borderBottom: 0, borderColor: 'divider', backgroundColor:"#f7f7f7", }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx={{fontSize:{md:"0.825rem", lg: "0.9rem"}, paddingX :{md:"1.3rem",lg : "2rem"}, fontWeight : 600}} label="History" {...a11yProps(0)} />
                    <Tab sx={{fontSize:{md:"0.825rem", lg: "0.9rem"}, paddingX :{md:"1.3rem",lg : "2rem"}, fontWeight : 600}} label="Refraction" {...a11yProps(1)} />
                    <Tab sx={{fontSize:{md:"0.825rem", lg: "0.9rem"}, paddingX :{md:"1.3rem",lg : "2rem"}, fontWeight : 600}} label="Examination" {...a11yProps(2)} />
                    <Tab sx={{fontSize:{md:"0.825rem", lg: "0.9rem"}, paddingX :{md:"1.3rem",lg : "2rem"}, fontWeight : 600}} label="Investigation" {...a11yProps(3)} />
                    <Tab sx={{fontSize:{md:"0.825rem", lg: "0.9rem"}, paddingX :{md:"1.3rem",lg : "2rem"}, fontWeight : 600}} label="Diagnosis" {...a11yProps(4)} />
                    <Tab sx={{fontSize:{md:"0.825rem", lg: "0.9rem"}, paddingX :{md:"1.3rem",lg : "2rem"}, fontWeight : 600}} label="Advice" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <HistoryComp />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <RefractionMain />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Examination
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Investigation
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Diagnosis
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                Advice
            </CustomTabPanel>
        </Box>
        </Box>

    );
}