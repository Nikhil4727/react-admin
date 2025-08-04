import { useState } from "react";
import {Sidebar,Menu,MenuItem} from "react-pro-sidebar";
//import 'react-pro-sidebar/dist/pro-sidebar.css';
import {Box,IconButton,Typography,useTheme} from '@mui/material';
import {Link} from 'react-router-dom'; 
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { tokens } from "../../theme";

const Item=({title,to,icon,selected,setSelected})=>{
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  return (
    <MenuItem 
    active={selected===title} 
    style={{color:colors.grey[100]}}
    onClick={()=>setSelected(title)}
    icon={icon}
    component={<Link to={to}/>}
    >
    <Typography>{title}</Typography>
    
    </MenuItem>
  )
}
const SideBar = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const [isCollapsed,setIsCollapsed]=useState(false);
  const [selected,setSelected]=useState("Dashboard");
  return (
    <Box
      sx={{
          height:"100vh",
          display:"flex",
          background:colors.primary[400],
      }}
    >

     <Sidebar 
     collapsed={isCollapsed}
     backgroundColor={colors.primary[400]}
     rootStyles={{
      color:colors.grey[100],
     }}
     >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Admins
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed &&(
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                 alt="profile-user"
                 width="100px"
                 height="100px"
                 src={`../../assets/user.png`}
                 style={{cursor:"pointer",borderRadius:"50%"}}
                
                />
              </Box>
              <Box textAlign="center" mt={1}>
                <Typography variant="h4" color={colors.grey[100]}>
                  Nikhil
                </Typography>
                <Typography 
                >
                  Lohith jallah admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
              title="Dashbord"
              to="/"
              icon={<HomeOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>


            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Item
              title="COntact information"
              to="/contacts"
              icon={<ContactsOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
               <Item
              title="Invoice balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />

              <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>


               <Item
              title="Profile form"
              to="/form"
              icon={<PersonOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
               <Item
              title="Calender"
              to="/calender"
              icon={<CalendarTodayOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Item
              title="FAQ Pages"
              to="/faq"
              icon={<HelpOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />

              <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{m: "15px 0 5px 20px" }}
              >
                Chart
              </Typography>

             <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
             <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
               <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
               <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
          </Box>
        </Menu>

        </Sidebar>
        
        </Box>
  );
}

export default SideBar