// // import * as React from "react";
// // import React from "react";
// // import { styled, useTheme } from "@mui/material/styles";
// // import Box from "@mui/material/Box";
// // import MuiDrawer from "@mui/material/Drawer";
// // import MuiAppBar from "@mui/material/AppBar";
// // import Toolbar from "@mui/material/Toolbar";
// // import List from "@mui/material/List";
// // import CssBaseline from "@mui/material/CssBaseline";
// // import Typography from "@mui/material/Typography";
// // import IconButton from "@mui/material/IconButton";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// // import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// // import ListItem from "@mui/material/ListItem";
// // import ListItemButton from "@mui/material/ListItemButton";
// // import ListItemIcon from "@mui/material/ListItemIcon";
// // import ListItemText from "@mui/material/ListItemText";
// // import Receipts from "../../components/Receipts/Receipts";
// // import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
// // import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// // import GroupIcon from "@mui/icons-material/Group";
// // import Orders from "../../components/Orders/Orders";
// // import Deliveries from "./Deliveries";
// // // import Orders from "../../components/Orders/Orders";
// // import { Link } from "react-router-dom";
// // // import Services from "../../components/Service/Services";
// // import { useNavigate } from 'react-router-dom'
// // import { useState } from "react";
// // import "./Dashboard.css"


// // const drawerWidth = 240;

// // const openedMixin = (theme) => ({
// //   width: drawerWidth,
// //   transition: theme.transitions.create("width", {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.enteringScreen,
// //   }),
// //   overflowX: "hidden",
// // });

// // const closedMixin = (theme) => ({
// //   transition: theme.transitions.create("width", {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.leavingScreen,
// //   }),
// //   overflowX: "hidden",
// //   width: `calc(${theme.spacing(7)} + 1px)`,
// //   [theme.breakpoints.up("sm")]: {
// //     width: `calc(${theme.spacing(8)} + 1px)`,
// //   },
// // });

// // const DrawerHeader = styled("div")(({ theme }) => ({
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "flex-end",
// //   padding: theme.spacing(0, 1),
// //   // necessary for content to be below app bar
// //   ...theme.mixins.toolbar,
// // }));

// // const AppBar = styled(MuiAppBar, {
// //   shouldForwardProp: (prop) => prop !== "open",
// // })(({ theme, open }) => ({
// //   zIndex: theme.zIndex.drawer + 1,
// //   transition: theme.transitions.create(["width", "margin"], {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.leavingScreen,
// //   }),
// //   ...(open && {
// //     marginLeft: drawerWidth,
// //     width: `calc(100% - ${drawerWidth}px)`,
// //     transition: theme.transitions.create(["width", "margin"], {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   }),
// // }));

// // const Drawer = styled(MuiDrawer, {
// //   shouldForwardProp: (prop) => prop !== "open",
// // })(({ theme, open }) => ({
// //   width: drawerWidth,
// //   flexShrink: 0,
// //   whiteSpace: "nowrap",
// //   boxSizing: "border-box",
// //   ...(open && {
// //     ...openedMixin(theme),
// //     "& .MuiDrawer-paper": openedMixin(theme),
// //   }),
// //   ...(!open && {
// //     ...closedMixin(theme),
// //     "& .MuiDrawer-paper": closedMixin(theme),
// //   }),
// // }));

// // export default function Dashboard ( )
// // {
// //   const [user, setUser] = useState(null)
// //   const [error, setErrors] = useState([])
// //   const navigate = useNavigate(); 
  
// //   function handleLogoutClick ()
// //   {
// //     fetch("/api/logout", { method: "DELETE" }).then((response) => {
// //       if (response.ok) {
// //         setUser(null);
// //         navigate("/");
// //       } else {
// //         response.json().then((err) => setErrors(err.errors));
// //       }
// //     });
// //     //  alert("delete was successful");
// //   }
  

// //   const theme = useTheme();
// //   const [open, setOpen] = React.useState(false);

// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };

// //   return (
// //     <>
// //       <Box sx={{ display: "flex" }}>
// //         <CssBaseline />
// //         <AppBar position="fixed" open={open}>
// //           <Toolbar className="toolbar">
// //             <IconButton
// //               color="inherit"
// //               aria-label="open drawer"
// //               onClick={handleDrawerOpen}
// //               edge="start"
// //               sx={{
// //                 marginRight: 5,
// //                 ...(open && { display: "none" }),
// //               }}
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <div className="menucomps">
// //               <Typography variant="h6" noWrap component="div">
// //                 <em>Admin Dashboard</em>
// //               </Typography>
// //               <Typography variant="h6" noWrap component="div">
// //                 <button className="signoutBtn" onClick={ handleLogoutClick }>Sign Out</button>
// //               </Typography>
// //             </div>
// //           </Toolbar>
// //         </AppBar>
// //         <Drawer variant="permanent" open={open}>
// //           <DrawerHeader>
// //             <IconButton onClick={handleDrawerClose}>
// //               {theme.direction === "rtl" ? (
// //                 <ChevronRightIcon />
// //               ) : (
// //                 <ChevronLeftIcon />
// //               )}
// //             </IconButton>
// //           </DrawerHeader>
// //           {/* <Divider /> */}
// //           <List>
// //             {[
// //               <Link to="/dashboard" element={<Dashboard/>}>Dashbord</Link>,
// //               <Link to="/deliveries" element={<Deliveries/>}>Deliveries</Link>,
// //               // <Link to="/deliveries" element={<Deliveries/>}>Deliveries</Link>,
// //               <Link to="/orders" element={<Orders/>}>Orders</Link>,
// //               <Link to="/receipts" element={<Receipts/>}>Receipts</Link>,
// //             ].map((text, index) => (
// //               <ListItem key={text} disablePadding sx={{ display: "block" }}>
// //                 <ListItemButton
// //                   sx={{
// //                     minHeight: 48,
// //                     justifyContent: open ? "initial" : "center",
// //                     px: 2.5,
// //                   }}
// //                 >
// //                   <ListItemIcon
// //                     sx={{
// //                       minWidth: 0,
// //                       mr: open ? 3 : "auto",
// //                       justifyContent: "center",
// //                     }}
// //                   >
// //                     {(() => {
// //                       if (index === 0) {
// //                         return <DashboardCustomizeIcon />;
// //                       } else {
// //                         return <LocalShippingIcon/>;
// //                       }
// //                     })()}
// //                   </ListItemIcon>
// //                   <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
// //                 </ListItemButton>
// //               </ListItem>
// //             ))}
// //           </List>
// //           {/* <Divider /> */}
// //         </Drawer>
// //         <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="maindash">
// //           <DrawerHeader />
// //           <div className="typographs">
// //             {/* <Typography className="card container dashcards dashcard1">
// //               <div>
// //                  <Deliveries/> 
                
// //               <LocalShippingIcon className="localshippingicon" />
// //                 <h3 className="cardinfo">Deliveries</h3>
// //                 <p>Total Number Of Deliveries</p>
// //                 <Link to="/deliveries" element={<Deliveries/>}>Deliveries</Link>
// //               </div>
// //             </Typography> */}
// //             {/* <Typography className="card container dashcards dashcard2">
// //              <div>
// //                 <GroupIcon className="tenanticon" />
// //                 <h3 className="cardinfo">Orders</h3>
// //                 <p>Total Number Of Orders</p>
// //               </div> 
// //             </Typography> */}
// //             {/* <Typography className="table container table3">
// //               <div>
// //                 <Receipts/>  
// //                <PaymentsIcon className="payicon" />
// //                 <h3 className="cardinfo">Receipts</h3>
// //                 <p>A list of orders already Dispatched</p> 
// //               </div>
// //             </Typography>  */}
// //           </div>
// //         </Box>
// //       </Box>
// //       {/* <Button variant="outline" onClick={handleLogoutClick}>
// //         Logout
// //       </Button> */}
// //     </>
// //   );
// // }

// import * as React from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// // import Badge from '@mui/material/Badge';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems,secondaryListItems } from './Listitems';
// import Orders from '../../components/Orders/Orders';
// import Receipts from '../../components/Receipts/Receipts';
// import Chart from '../Chart';
// import Deliveries from './Deliveries';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Quickfleet.com
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

// const mdTheme = createTheme();

// function DashboardContent() {
//   const [open, setOpen] = React.useState(true);
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
   
      
    
//     <ThemeProvider theme={mdTheme}>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar position="absolute" open={open}>
//           <Toolbar
//             sx={{
//               pr: '24px', // keep right padding when drawer closed
//             }}
//           >
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               onClick={toggleDrawer}
//               sx={{
//                 marginRight: '36px',
//                 ...(open && { display: 'none' }),
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               component="h1"
//               variant="h6"
//               color="inherit"
//               noWrap
//               sx={{ flexGrow: 1 }}
//             >
//               Dashboard
//             </Typography>
//             <IconButton color="inherit">
//                {/* <Badge badgeContent={4} color="secondary">
//                 <NotificationsIcon /> 
//               </Badge>  */}
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//         <Drawer variant="permanent" open={open}>
//           <Toolbar
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'flex-end',
//               px: [1],
//             }}
//           >
//             <IconButton onClick={toggleDrawer}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </Toolbar>
//           <Divider />
//           <List component="nav">
//             {mainListItems}
//             <Divider sx={{ my: 1 }} />
//             {secondaryListItems}
//           </List>
//         </Drawer>
//         <Box
//           component="main"
//           sx={{
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'light'
//                 ? theme.palette.grey[100]
//                 : theme.palette.grey[900],
//             flexGrow: 1,
//             height: '100vh',
//             overflow: 'auto',
//           }}
//         >
//           <Toolbar />
//           <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//             <Grid container spacing={3}>
//               {/* Chart */}
//               <Grid item xs={12} md={8} lg={9}>
//                 <Paper
//                   sx={{
//                     p: 2,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     height: 240,
//                   }}
//                 >
//                   <Chart />
//                 </Paper>
//               </Grid>
             
//               {/* <Grid item xs={12} md={4} lg={3}>
//                 <Paper
//                   sx={{
//                     p: 2,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     height: 240,
//                   }}
//                 >
//                   <Deliveries/>
//                 </Paper>
//               </Grid> */}
//               </Grid>
//               {/* Recent Orders */}
//               <Grid item xs={12}>
//                 <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
//                   <Deliveries/>
//                 </Paper>
//               </Grid>
           
//               <Grid item xs={12}>
//                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//                   <Orders/>
//                 </Paper>
//               </Grid>
          
//               <Grid item xs={12}>
//                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//                   <Receipts/>
//                 </Paper>
//               </Grid>
              
//             <Copyright sx={{ pt: 4 }} />
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
    
//   );
// }

// export default function Dashboard() {
//   return <DashboardContent />;
// }
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { mainListItems, secondaryListItems } from './Listitems';
// import { mainListItems,secondaryListItems } from './Listitems';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import NotificationsIcon from '@mui/icons-material/Notifications';
import Chart from '../Chart';
import Deliveries from './Deliveries';
import Orders from '../../Orders/Orders';
import Receipts from '../../Receipts/Receipts';
import './Dashboard.css'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              {/* <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              {/* <Grid item xs={12} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deliveries />
                </Paper>
              </Grid> */}
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Deliveries/>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Receipts />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}