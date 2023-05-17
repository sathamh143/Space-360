import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import { StepIcon } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Addassets from './Addassets';
import EditAssoiate from './EditAssoiate';
import Review from './Review';
import Editfuture from './Editfuture';


const steps = ['Edit feature', 'Add assets', 'Edit Assosiate','review','Submit'];
const stepDecription =[<Editfuture/>, <Addassets/>, <EditAssoiate/>,<Review/>,'destription2'];

const stepIcons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  }

const ProgressStepper = () => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  
  const totelSteps = steps.length;
  const completedSteps = Object.keys(completed).length;
  const allStepsCompleted = completedSteps === totelSteps;
  
  const handleBack = () => {
    setActiveStep ((prevActiveStpes)=> prevActiveStpes - 1);
  }
    const handleNext = ()=>{
    const newCompleted = completed ;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep ((prevActiveStpes)=> prevActiveStpes + 1);
    }
 
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const btn={
    width:120,
    height:42,
    marginLeft:63,
    color: '#F95959',
    borderRadius:20,
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
    marginLeft:80,
    color: '#F95959',
    borderRadius:20,
    position:' absolute',
    border: '1px solid #F95959',
    marginTop:6,
    backgroundColor:'white',
    "&:hover":{
      background:'rgba(249, 89, 89, 1)',
      color:'white'
    }
  } 
  const back={
    width:120,
    height:42,
    color: '#F95959',
    borderRadius:20,
    position:' absolute',
    border: '1px solid #F95959',
    marginTop:6,
    backgroundColor:'white',
    "&:hover":{
      background:'rgba(249, 89, 89, 1)',
      color:'white'
    }
  }
    
  return (
  <>
     <div className='nav'>
        <Typography 
        variant='h5' 
        style={{ paddingTop:20,font: 'Rubik',Weight: 500,fontSize: 36,}}>
        Space360</Typography>
           
        <div className='icon'>
           <Button> <NotificationsNoneIcon /></Button>
            <Button> <SettingsIcon  /></Button>
             <Button><AccountCircleIcon/></Button>
         </div> 
      </div> 



    <div className='stepper' >
        <Stepper activeStep={activeStep} sx={{maxWidth:'lg'}} >

            {steps.map((step) => (
                <Step key={step} >
                  
                    <StepLabel>{step}</StepLabel>
                   
                </Step>
            ))}

            </Stepper>
        <div>

             {allStepsCompleted ? (
                <>
                <Typography>all steps completed</Typography>
                <Button variant='contained' onClick={handleReset} >reset</Button>
                </>
             ):(
            <>
                <Typography>{stepDecription[activeStep]}</Typography>
                
                <Button 
                sx={back}
                onClick={handleBack} 
                variant='contained' 
                hidden={activeStep === 0}
                > Back <ArrowBackIcon/></Button> 
  
                <Button sx={btn}>Discard</Button>
                  <Button 
                 sx={btnn}
                onClick={handleNext} 
                variant='contained' 
               >{activeStep === steps.length - 2 ? 'Save' : 'Next'}<ArrowForwardIcon/></Button>    
            </>
             ) }
        </div>
    </div>
    </>            
    
  );
}
export default ProgressStepper;