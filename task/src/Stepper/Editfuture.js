import React from 'react'
import Typography from '@mui/material/Typography';
import { Card, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Custom from '../Custom';
import Grid from '@mui/material/Grid';

function Editfuture() {
    
    return (
        <>
        <div style={{marginTop:20}}>
          <Card>
        <Container style={{height:428,width:800,marginTop:20}}>
        <Grid container spacing={2}>
          <Grid xs={7} mt={4}>
           <Typography 
           style={{fontSize:24,Weight:500,font:'rubik'}}
           ml={3}mt={2}>Project ID:</Typography>
          </Grid>
          <Grid mt={4}>
          <TextField id="filled-basic" label="987909864567754"  variant="standard"disabled />
          </Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid xs={7} mt={4}>
           <Typography 
           style={{fontSize:24,Weight:500,font:'rubik'}}
           ml={3} mt={2}>Project Name:</Typography>
          </Grid>
          <Grid mt={4}>
          <TextField id="filled-basic" label="Justical league"  variant="standard" disabled />
          </Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid xs={7} mt={4}>
           <Typography 
           style={{fontSize:24,Weight:500,font:'rubik'}}
           ml={3}mt={4}>Users:</Typography>
          </Grid>
          <Grid mt={4}>
           <Custom/>
          </Grid>
          </Grid>
        
          <Grid container spacing={2}>
          <Grid xs={7} mt={4}>
          <Typography 
          style={{fontSize:24,Weight:500,font:'rubik'}}
          ml={3} mt={5}>Project Description:</Typography>
          </Grid>
         <Grid  sx={{mt:2}} mt={4}>
          <TextField
          id="filled-multiline-static"
          multiline
          style={{width:200}}
          rows={3}
          variant="filled"/>
          </Grid>
          </Grid>
        
          <Grid container spacing={2}>
          <Grid xs={7} mt={4}>
           <Typography 
           style={{fontSize:24,Weight:500,font:'rubik'}}
           ml={3}mt={2}>Modified:</Typography>
          </Grid>
          <Grid mt={4}>
          <TextField id="filled-basic" label="08/05/2022"  variant="standard"disabled />
          </Grid>
          </Grid>
            </Container>
            </Card>
        </div>
        </>
    )
}

export default Editfuture
