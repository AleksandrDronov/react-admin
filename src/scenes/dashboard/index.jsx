import { Box } from "@mui/material";
import Header from "../../components/Header";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignContent="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <ProgressCircle />
    </Box>
  );
};

export default Dashboard;
