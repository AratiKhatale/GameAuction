import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MovingIcon from '@mui/icons-material/Moving';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import AddIcon from '@mui/icons-material/Add';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const drawerWidth = 60;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: 'black',
  color: 'white',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  backgroundColor: 'black',
  color: 'white',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
 
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [open] = React.useState(false);

  const sidebarData = [
    { id: 'search', name: 'Search', icon: <SearchIcon /> },
    { id: 'home', name: 'Home', icon: <HomeIcon /> },
    { id: 'live', name: 'Live', icon: <LiveTvIcon /> },
    { id: 'trending', name: 'Trending', icon: <MovingIcon /> },
    { id: 'add', name: 'Add', icon: <AddIcon /> },
    { id: 'shuffle', name: 'Shuffle', icon: <ShuffleIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <List sx={{ mt: 2 }}>
          {sidebarData.map((data) => (
            <ListItem key={data.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  py: 2,
                  color: 'white',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  {data.icon}
                </ListItemIcon>
                {open && (
                  <ListItemText
                    primary={data.name}
                    sx={{ color: 'white', mt: 1 }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
