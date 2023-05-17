import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const drawerWidth = 320;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Button><MenuIcon/></Button>
        <Typography variant='h5' color={'darkBlue'}> Dashboard </Typography>
        </Toolbar>
      <Divider />
      <List>
        {[''].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
            
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
               <Button>< NavLink to ="/Stepper"> Stepper</NavLink></Button> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[''].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
            
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
               <Button>< NavLink  to ="/space360"> Space360</NavLink></Button> 
               
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box sx={{ display:'flex'}}>
     
     
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }  }}
        aria-label="mailbox folders">
        
        <Drawer
          variant="permanent"
         
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}



export default ResponsiveDrawer;