import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Home() {
  const drawerWidth = 50;

   const [posts,setPosts]=useState([]);
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data =>{setPosts(data)
  }); 
  },[]);
    return (
      <div className='card'>
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
      { 
       (posts) ? 
       (<ul>
        {
          posts.map(post =>{
            return(<li>
                  <Card sx={{ maxWidth: 345,sm:200 }} >
                  <CardContent  sx={{ width:{xs:245,sm :280,lg :345,}}}>
                    <Typography gutterBottom variant="h5" component="div">{post.title}</Typography>
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