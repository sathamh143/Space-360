import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Home() {


   const [posts,setPosts]=useState([]);
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data =>{setPosts(data)
  }); 
  },[]);
    return (
      <div >
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
                  <CardContent  >
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