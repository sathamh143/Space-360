import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';


function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function TransferList() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([ 1, 2, 3,4,5,6,7,8,9]);
  const [right, setRight] = React.useState([ "1a", '2b', '3c','4d','5e','6f','7g','8h','9k']);
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };
  const card ={
    padding:2,
    "&:hover":{
      background:' rgba(233, 79, 55, 0.2)',
    } }
  const list={
    width:10,
    height:42,
    color: 'white',
    borderRadius:40,
      backgroundColor:'rgba(249, 89, 89, 1)',
      "&:hover":{
        background:' rgba(233, 79, 55, 0.2)',
        color:' #F95959'
      }}
      const btn={
  width: 40,
  marginRight: 16,
  color: '#F95959',
  position: 'relative',
  borderRadius: 40,
  backgroundColor: ' rgba(233, 79, 55, 0.2)',
  border: '1px solid rgba(233, 79, 55, 0.2)'
}
const btnn={
  width: 40,
  marginLeft: 16,
  marginBottom:-4,
  color: '#F95959',
  position: 'relative',
  borderRadius: 40,
  backgroundColor: ' rgba(233, 79, 55, 0.2)',
  border: '1px solid rgba(233, 79, 55, 0.2)'
}

  const customList = (items) => (
    <>
     

    <Paper sx={{ width: 270, height: 326, overflow: 'auto' }}>
      
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
              sx={card}
            >
              <ListItemText  id={labelId} primary={`Assets ${value }`} />
            </ListItem>
          
          );
        })}
      </List>
    </Paper>
    </>

  );

  return (
    <>
   <div>
        <Typography variant='h4' ml={10} mt={6}>Available</Typography>
        <Typography variant='h4'  ml={75}  mt={-6}  >Target</Typography>
    </div>
  
    <Grid container spacing={3} mt={2}justifyContent="center" alignItems="center">
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={list}
          
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right">
            ≫
          </Button>
          <Button className='list1' sx={btnn} onClick={handleCheckedRight}>&gt;</Button>
          <Button  sx={btn} onClick={handleCheckedLeft} > &lt;</Button>
          <Button
             sx={list}
            onClick={handleAllLeft}
            aria-label="move all left">
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>
    </>
  );
}