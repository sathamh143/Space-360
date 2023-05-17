import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function createData(name, calories, fat, carbs, protein,assets,action) {
  return { name, calories, fat, carbs, protein,assets,action };
}


const rows = [
  createData('01','Asset 1',
  <Link
  component="button"
  variant="body2"
  sx={{color:'black'}}
  onClick={() => {
    console.info("I'm a button.");
  }}
><img className='image' src ={'https://images.unsplash.com/photo-1522770179533-24471fcdba45'} alt="some" /> 
  img6673 <CloseIcon style={{color:'red'}}/>
</Link>,
     'URL    ',' String','htts://de...org'
   ,'Created'),
  createData('02','Asset 2',
  <Link
  component="button"
  variant="body2"
  sx={{color:'black'}}
  onClick={() => {
    console.info("I'm a button.");
  }}
><img className='image' src ={'https://images.unsplash.com/photo-1522770179533-24471fcdba45'} alt="some" /> 
  img6673 <CloseIcon style={{color:'red'}}/>
</Link>, 
    'Shapefile','File','IMG-455...jpg',
 'Deleted'),
  createData('03','Asset 3',  
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
   'Demfile', 'File',
  <p>IMG-455...jpg</p>,'Modified'),
 
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 900,marginTop:7,height:395,}} aria-label="simple table">
        <TableHead>
          <TableRow  >
            <TableCell>S.NO</TableCell>
            <TableCell>Title/Name</TableCell>
            <TableCell align="">Thumnail Image</TableCell>
            <TableCell align="left">Desription</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Assets</TableCell>
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
              <TableCell >{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell >{row.carbs}</TableCell>
              <TableCell >{row.protein}</TableCell>
              <TableCell >{row.assets}</TableCell>
              <TableCell >{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}