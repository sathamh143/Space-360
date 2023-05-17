import React from 'react'
import Typography from '@mui/material/Typography';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

function Space360() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const btn={
      width:120,
      height:42,
      color: '#F95959',
      borderRadius:20,
      marginLeft:95,
      position:' absolute',
      marginTop:6,
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
      marginLeft:114,
      marginTop:6,
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

        <div className='nav'>
        <Typography  variant='h5' 
        style={{ paddingTop:20,font: 'Rubik',Weight: 500,fontSize: 36,}}>
             Space360</Typography>
           
        <div className='icon'>
           <Button>  <NotificationsNoneIcon /></Button>
            <Button> <SettingsIcon  /></Button>
             <Button><AccountCircleIcon /></Button>

         </div> 
        </div> 
        <Typography 
        style={{font:'rubik',fontWeight:500,fontSize:32,color:'#F95959'}} 
        ml={20} mt={4} >New Project</Typography>
        <div className='card'>

         {/* <Card className='container'> */}
          <Container style={{height:400,width:750,marginLeft:10,}}>
          <Grid container spacing={2}>
          <Grid xs={7}>
           <Typography 
           style={{fontSize:24,Weight:500,font:'rubik'}} mt={3}
           ml={3}>Project Name:</Typography>
          </Grid>
          <Grid>
          <TextField id="filled-basic" label="Enter your Project name here..."  variant="filled"sx={{marginTop:5}} />
          </Grid>
          </Grid>
        
          <Grid container spacing={2}>
          <Grid xs={7}>
          <Typography 
          style={{fontSize:24,Weight:500,font:'rubik'}}
          ml={3} mt={6}>Project Description:</Typography>
          </Grid>
         <Grid  style={{marginTop:50}}>
          <TextField
          id="filled-multiline-static"
          multiline
          style={{width:200}}
          rows={4}
          variant="filled"/>
          </Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid xs={7}>
         <Typography
          style={{fontSize:24,Weight:500,font:'rubik'}}
           ml={3}mt={6}
           >Feature:</Typography>
           </Grid>
           <Grid>
           <FormControl variant="filled" sx={{ m: 1, minWidth: 180 ,marginTop:5}}>
        <InputLabel  id="demo-simple-select-filled-label">Select from the list</InputLabel>
        <Select
          value={age}
          onChange={handleChange}>
          <MenuItem>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
            </Grid>
            </Grid>
            </Container>
            </div>
            <Button sx={btn} >Discard</Button>
            <Button sx={btnn}>Save</Button> 
            </div> 
        </>
    )
}

export default Space360
