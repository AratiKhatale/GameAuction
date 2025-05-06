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
import { useNavigate } from 'react-router-dom';

function Header() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
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
            name: 'Players',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOntsEPCU2mYpMefDW0J-IHBr8sp0_T9QtMA&s',
            onclick: () => navigate('/PlayerInfo')
           
        },
        {
            id: '2',
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
                                <img src={data.img} alt={data.name} style={{
                                    width: 24,
                                    height: 27,
                                    backgroundColor: '#e0e0e0', // light grey background
                                    padding: 3,
                                    borderRadius: '50%', // makes it circular
                                    objectFit: 'cover'
                                }} />
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
            <Drawer open={open} onClose={toggleDrawer(false)}    >
                {DrawerList}
            </Drawer>
        </div>
    );
}
export default Header;
