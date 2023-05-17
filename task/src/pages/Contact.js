import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Home() {
 

   const [posts,setPosts]=useState([]);
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(data => data.json())
    .then(data =>{setPosts(data)

  }); 
  },[]);
  console.log('flagone',{posts})
    return (
      <div className='card'>
        <Box
        component="main"
     >
      { 
       (posts) ? 
       (<ul>
        {
          posts.map(post =>{
            return(<li>
                  <Card  >
                  <CardContent  sx={{ width:{xs:245,sm :280,lg :745,}}}>
                  <Typography variant="body2" color="text.secondary"> {post.body}</Typography>
                  </CardContent>
                  </Card>
                  </li>
                  )
            })
          }
       </ul>) : (<h3>loading....</h3>)}
       </Box>
       </div>
    );
  }
  export default Home;