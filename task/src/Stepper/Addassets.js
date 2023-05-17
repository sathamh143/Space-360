import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import PublishIcon from '@mui/icons-material/Publish';
import { Button, TextField } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function createData(name, calories, fat, carbs, protein,assets,action) {
  return { name, calories, fat, carbs, protein,assets,action };
}
const  upload ={
  width:120,
  height:42,
  color:'rgba(249, 89, 89, 1)',
  borderRadius: 20,
  backgroundColor:'white',
  border: '1px solid rgba(249, 89, 89, 1)'
}

const rows = [
  createData('01','Asset 1',
    <Button sx={upload}>Upload<PublishIcon style={{color:'red'}}/></Button>,
     'URL', <TextField
     hiddenLabel
     id="filled-hidden-label-small"
     defaultValue="String"
     variant="filled"
     size="small"
   />, <TextField id="demo-helper-text-misaligned-no-helper" label="Type the URL.." />
   ,<Button><DeleteIcon style={{color:'red'}}/></Button>),

  createData('02','Asset 2',
  <Link
  component="button"
  variant="body2"
  sx={{color:'black'}}
  onClick={() => {
    console.info("I'm a button.");
  }}
><img className='image' src ={'https://images.unsplash.com/photo-1522770179533-24471fcdba45'} alt ="some" /> 
  img6673 <CloseIcon style={{color:'red'}}/>
</Link>, 
    'Shapefile', <TextField
    hiddenLabel
    id="filled-hidden-label-small"
    defaultValue="File"
    variant="filled"
    size="small"
  />, <TextField id="demo-helper-text-misaligned-no-helper" label="Browse" />,
  <Button><DeleteIcon style={{color:'red'}}/></Button>),
  
  createData('03','Asset 3',  
  <Button sx={upload} className='upload'>Upload<PublishIcon style={{color:'red'}}/></Button>,
   'demfile', <TextField
   hiddenLabel
   id="filled-hidden-label-small"
   
   defaultValue="Select Type"
   variant="filled"
   size="small"
   icon ="select"
 ><ArrowDropDownIcon/></TextField>,
  <p>-NA</p>,<Button><DeleteIcon style={{color:'red'}}/></Button>),
 
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600,marginTop:7,height:395}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.NO</TableCell>
            <TableCell>Title/Name</TableCell>
            <TableCell align="">Thumnail Image</TableCell>
            <TableCell >Desription</TableCell>
            <TableCell >Type</TableCell>
            <TableCell >Assets</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.assets}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}