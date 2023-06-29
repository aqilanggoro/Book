import { Link, Head } from '@inertiajs/react';
import {Paper, Typography, Grid, Divider, Box} from "@mui/material";
import {BookCard} from "@/Pages/Search";


const TagWrapper = ({name, random_books}) =>{
  return (
    <Box sx={{pb:5}}>
      <Typography fontWeight='bolder' variant='h5'>{name}</Typography>
      <Divider sx={{my:1}}/>
      <Grid container spacing={2}>
        {
          random_books.map(item=>(
            <BookCard md={3} lg={2} key={item.id} {...item}/>
          ))
        }

      </Grid>
    </Box>
  )
}
const taglabelSx = {
  "& > div":{
    bgcolor:'rgb(246,248,252)',
    p:1,
    borderRadius:12,
    px:3,
    '&:hover': {
      bgcolor:'rgb(234,241,251)',
    },
    transition: 'all ease .2s',
    cursor: 'pointer',
    flex:1,
    color:'rgb(125,125,125)'
  },
  display:'flex',
}
const TagLabel = ({name}) => {
  return (
    <Grid sx={taglabelSx} item xs={6} md={3}>
      <div>
        <Typography>
          {name}
        </Typography>
      </div>
    </Grid>
  )
}

export default function Welcome({tags}) {
  return (
    <>
      <Head title="Home" />
      <Box sx={{px:[1,1,2], mb:5}}>
        <Grid sx={{mb:2}} container spacing={2}>
          {
            tags.map(item=>(
              <TagLabel {...item} key={item.id}/>
            ))
          }
        </Grid>
        {
          tags.map(item=>(
            <TagWrapper {...item} key={item.id}/>
          ))
        }
      </Box>
    </>
  );
}
