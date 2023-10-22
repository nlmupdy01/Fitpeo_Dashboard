import * as React from "react";
import { Sidebar, Menu, MenuItem,   SubMenu,  useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link , NavLink } from 'react-router-dom';

function SidebarMenu() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={({ height: "120h" }, { display: "flex" ,background:'#0047AB	'  })}>
      <Sidebar style={{ height: "150vh"  }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Dashboard</h2>
            {/* <NavLink to="/" /> */}
          </MenuItem>

          {/* <Link to={'/home'} >   */}
          <MenuItem icon={<HomeOutlinedIcon />}>Home </MenuItem>
          {/* </Link> */}
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <SubMenu
           label={'With Suffix'}
            icon={<ReceiptOutlinedIcon />}
          >
            <MenuItem>Submenu 1</MenuItem>
            <MenuItem>Submenu 2</MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <SubMenu
           label={'With Suffix'}
            icon={<ReceiptOutlinedIcon />}
          >
            <MenuItem>Submenu 1</MenuItem>
            <MenuItem>Submenu 2</MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <h1 style={{ color: "#000000", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main> */}
    </div>
  );
}

export default  SidebarMenu;
