import * as React from "react";
import './App.css';
import SidebarMenu from "./component/SidebarMenu";
 import CardBox from "./component/CardBox";
import { Box, Card, Grid, Stack } from "@mui/material";
import CommonTable from "./component/commonComponent/CommonTable";
import SidebarChart from "./Container/ChartContainer/SidebarChart";
import { render } from "react-dom";
import DonutWithText from "./Container/ChartContainer/PieChart";
import PieChart from "./Container/ChartContainer/PieChart";
import DashboardContainer from "./Container/Dashboard/DashboardContainer";
// import ChartStackedbar from "./ChartStackedBar/ChartStackedbar";

// import PRoutes from "./routes/PRoutes";

function App() {
  return (
 <>

<DashboardContainer />
  {/* <PRoutes />  */}
 </>
    
  );
}

export default App;
