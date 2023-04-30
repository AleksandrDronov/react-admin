import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimeLineOutlinedIcon from "@mui/icons-material/TimeLineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


const SidebarMenu = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState('Dashboard');
    const { collapseSidebar, collapsed } = useProSidebar();



    return (
      <Box
        sx={{
          "& .ps-sidebar-root" : {
            border: "none"
          },
          "& .ps-sidebar-container" : {
            background: `${colors.primary[400]}`,
          },
          "& .ps-menuitem-root .ps-menu-button" : {
            padding: "5px 35px 5px 20px"
          },
          "& .ps-menuitem-root .ps-menu-button:hover" : {
            color: "#868dfb",
            backgroundColor: `${colors.primary[400]}`
          },
          "& .ps-menu-button.active" : {
            color: "#6870fa"
          }
        }}
      >
        <Sidebar>
          <Menu>
            {/* LOGO AND MENU ICON*/}
            <MenuItem
              onClick={() => collapseSidebar()}
              icon={collapsed ? <MenuOutlinedIcon /> :undefined}
              style={{
                margin: "10px 0 0 0",
              }}
            >
              {!collapsed && (
                <Box 
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <MenuOutlinedIcon />
                </Box>
              )}
            </MenuItem>

            {/* USER */}
            {!collapsed && (
              <Box mb="25px" mt="10px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img 
                    src="../../assets/user.png"
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    style={{ cursor: "pointer", borderRadius: "50%"}}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Ed Roh</Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
                </Box>
              </Box>
            )}

          </Menu>
        </Sidebar>
      </Box>
    )
}

export default SidebarMenu;