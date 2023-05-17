import React from 'react'
import Typography from '@mui/material/Typography';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Button,  TextField } from '@mui/material';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack';

function Adduser() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const btn={
      width:120,
      height:42,
      color: '#F95959',
      borderRadius:20,
      marginLeft:37,
      position:' absolute',
      marginTop:4,
        backgroundColor:' rgba(233, 79, 55, 0.2)',
        "&:hover":{
          background:'rgba(249, 89, 89, 1)',
          color:'white'
        }
    }
    const btnn={
      width:120,
      height:42,
      color: 'white',
      marginLeft:55,
      marginTop:4,
      borderRadius:20,
        backgroundColor:' rgba(249, 89, 89, 1)',
        "&:hover":{
          background:'rgba(233, 79, 55, 0.2)',
          color:'#F95959'
        }
    }
    
    return (
        <>
        <div>
           <Box sx={{height:80,}} mt={3} ml={3}>  
            <Grid container spacing={3} sx={{justifyContent:'space-between'}}>
        <Typography  variant='h5' 
        style={{ paddingTop:20,font: 'Rubik',Weight: 500,fontSize: 30,}}>
             Space360</Typography>
        
        <Stack direction="row" spacing={2}>
            <Button> <SearchIcon  /></Button>
            <Button> <NotificationsNoneIcon /></Button>    
         
         <Avatar alt="Remy Sharp" src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'/> 
         <Grid> 
      <Typography  variant='h6' >Needhichozhan</Typography>
      <p>user</p> 
      </Grid> 

       <Button><KeyboardArrowDownIcon style={{color:'red'}} /></Button>       
       </Stack>
       </Grid>
       </Box> 
        <Typography 
        style={{font:'rubik',fontWeight:500,fontSize:22,color:'#F95959'}} 
        ml={15} mt={1} >Add User</Typography>
        <div className='card'>
          <Container style={{height:500,width:550,marginLeft:20,}}>
          <Grid container spacing={2}>
          <Grid xs={6}>
           <Typography 
           style={{fontSize:24,Weight:500,font:'rubik'}}mt={4}
           ml={3}>First Name:</Typography>
          </Grid>
          <Grid>
          <TextField sx={{mt:4}} id="filled-basic" label="Enter your First name here..."  variant="filled" />
          </Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid xs={6}>
           <Typography 
           style={{fontSize:24,Weight:500,font:'rubik'}}
           ml={3} mt={5}>Last Name:</Typography>
          </Grid>
          <Grid style={{marginTop:50}}>
          <TextField id="filled-basic" label="Enter your Last name here..."  variant="filled" />
          </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={6}>
          <Typography 
          style={{fontSize:24,Weight:500,font:'rubik'}}
          ml={3} mt={3}> Email:</Typography>
          </Grid>
         <Grid mt={4}>
         <TextField id="filled-basic" label="Enter your mail ID here..."  variant="filled" />
          </Grid>
          </Grid>
        
          <Grid container spacing={2}>
            <Grid xs={6}>
          <Typography 
          style={{fontSize:24,Weight:500,font:'rubik'}}
          ml={3} mt={3}> Company:</Typography>
          </Grid>
         <Grid mt={4}  >
         <TextField  id="filled-basic" label="Type your company here..."  variant="filled" />
         
          </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={6}>
         <Typography
          style={{fontSize:24,Weight:500,font:'rubik'}}
           ml={3}mt={6}
           >Access:</Typography>
           </Grid>
           <Grid>
           <FormControl variant="filled" sx={{ m: 1, minWidth: 180 ,marginTop:5}}>
        <InputLabel  id="demo-simple-select-filled-label">Select Type</InputLabel>
        <Select
          value={age}
          onChange={handleChange}>
          <MenuItem value={10}>write</MenuItem>
          <MenuItem value={20}>Read</MenuItem>
         </Select>
         </FormControl>
            </Grid>
            </Grid>
            <Button sx={btn} >Discard</Button>
            <Button sx={btnn}>Submit</Button>
            </Container>
            </div>
            </div>
        </>
    )
}

export default Adduser

 