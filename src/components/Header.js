import '../App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

function Header() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const addData = [
        {
            id: 'player',
            name: 'Add Player',
            icon: <PersonAddIcon />,
            onclick: () => navigate('/addPlayer')
        },
        {
            id: 'leader',
            name: 'Add Leader',
            icon: <PersonAddIcon />,
            onclick: () => navigate('/addLeader')
        },
    ]

    const information = [
        {
            id: '1',
            name: 'Home',
            icon: <HomeIcon />,
            onclick: () => navigate('/')
        },
        {
            id: '2',
            name: 'Players',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOntsEPCU2mYpMefDW0J-IHBr8sp0_T9QtMA&s',
            onclick: () => navigate('/PlayerInfo')

        },
        {
            id: '3',
            name: 'Leaders',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhm7KSdy5OldcJWgiZnANJP1lij19o2futQ&s',
            onclick: () => navigate('/leaderInfo')

        },
    ]

    const DrawerList = (
        <Box sx={{ width: 250, }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {information.map((data, index) => (
                    <ListItem key={data.id} disablePadding>
                        <ListItemButton onClick={() => {
                            data.onclick();
                            setOpen(false);
                        }}>
                            <ListItemIcon>
                                {
                                    data.img ? <img src={data.img} alt={data.name} style={{
                                        width: 24,
                                        height: 27,
                                        backgroundColor: '#e0e0e0',
                                        padding: 3,
                                        borderRadius: '50%', 
                                        objectFit: 'cover'
                                    }} /> : data.icon
                                }

                            </ListItemIcon>
                            <ListItemText primary={data.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {addData.map((data, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => {
                            data.onclick();
                            setOpen(false);
                        }}>
                            <ListItemIcon>
                                {data.icon}
                            </ListItemIcon>
                            <ListItemText primary={data.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon onClick={toggleDrawer(true)} />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Welcome
                        </Typography>
                        <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            {location.pathname === '/' && (
                // <div style={{display:'flex'}}>
                
                    
                //   <Typography>Super Player Auction
                //   Live Player Auction Application</Typography>
               
                // <Box sx={{ textAlign: 'center', mt: 4,display: 'flex',
                //     flexDirection: 'row',
                //     alignContent: 'flex-end',
                //     justifyContent: 'flex-end' }}>
                //     <img
                //         // src="https://miro.medium.com/v2/resize:fit:1400/1*d0s6wr_2dJzo1VNneZIoWw.gif"
                //         src="https://superplayerauction.com/_next/static/media/Slider-1.b3e8ce14.png"
                //         alt="Cricket Auction"
                //         style={{
                //             // width: '100%',
                //             // maxWidth: '600px',
                //             height: 'auto',
                //             // borderRadius: '12px',
                //             // boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                //         }}
                //     />
                // </Box>
                // </div>
                <Box sx={{ flexGrow: 1, px: 4, py: 6 }}>
                <Grid container spacing={4} alignItems="center">
                  {/* Text Section */}
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Super Player Auction
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Live Player Auction Application to manage teams, players and leader bidding in real-time.
                    </Typography>
                  </Grid>
          
                  {/* Image Section */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                      <img
                        src="https://superplayerauction.com/_next/static/media/Slider-1.b3e8ce14.png"
                        alt="Cricket Auction"
                        style={{
                        //   width: '100%',
                          maxWidth: '585px',
                          height: 'auto',
                        //   borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}
            <Drawer open={open} onClose={toggleDrawer(false)}    >
                {DrawerList}
            </Drawer>
        </div>
    );
}
export default Header;
