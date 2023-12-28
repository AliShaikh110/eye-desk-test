import React from "react";
import TaskCard from "./TasksCard/TaskCard";
import ReportCard from "./TodayReportCard/ReportCard";
import TodayHoliday from "./Todayholidaycard/TodayHoliday";
// import Taskcomp from "./Taskcomp";
import { Container } from "@mui/material";

const Task = () => {
  return (
    <>
      {/* <Taskcomp/> */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TaskCard />
        <ReportCard />
        <TodayHoliday />
      </Container>
    </>
  );
};

export default Task;
