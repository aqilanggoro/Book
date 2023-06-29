import Layout from "@/Layouts/layout";
import {Head, usePage, router} from "@inertiajs/react";
import {Box, Container, Grid, List, ListItemButton, ListItemText, Paper, Typography} from "@mui/material";
import {SearchForm} from "@/Layouts/search-form";

type P = {
  tags : Record<string, any>[]
  books : Record<string, any>
}
const bookSx = {
  p:.5,
  width: '100%',
  borderRadius:4,
  bgcolor:'rgb(246,248,252)',
  boxShadow:0,
  borderColor:'transparent',
  ":hover":{
    bgcolor:"rgb(234,241,251)",
    "& .img":{
      boxShadow: 20,
    }
  },
  transition: 'all ease .5s',
  "& .img":{
    m:2,
    transition: 'all ease .5s',
    borderRadius:4,
    position:'relative',
    minHeight: 175,
    maxHeight: 175,
    "& > .img-wrapper":{
      position: 'absolute',
      borderRadius:4,
      top:0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center'
    }
  },
  "& .truncate":{
    mb:'auto'
  },
  display: 'flex',
  flexDirection:'column',
  cursor:'pointer',
  "& p, & span":{
    textDecoration:'none!important'
  },
  textDecoration:'none!important'
}

const intl = new Intl.NumberFormat()
const handleCard = (book) => {
  return (e: any) => {
    e.preventDefault();
    router.get(route('book.show',{book}))
  }
}
export const BookCard = (p : any) => {
  const {author, title, price, id, gramedia_thumb} = p;
  const {md = 4, lg = 3} = p;
  return (
    <Grid item xs={6} md={md} lg={lg} sx={{display: 'flex'}}>
      <Paper
        variant='outlined'
        component='a'
        href={route('book.show', {book : id})}
        onClick={handleCard(id)}
        sx={bookSx}
      >
        <div className="img">
          <div className="img-wrapper" style={{backgroundImage:`url(${gramedia_thumb})`}}></div>
          {/*<img src="" alt="" className="wrapper"/>*/}
        </div>
        <Typography px={2} my={1} color='textSecondary' variant='caption'>
          {author}
        </Typography>
        <div className="truncate">
          <Typography px={2} mb={1} variant='subtitle2'>
            {title}
          </Typography>
        </div>
        <Typography mb={2} variant='body2' color='secodary.dark' textAlign='center'>
          Rp {intl.format(price)}
        </Typography>
      </Paper>
    </Grid>
  )
}

const onTag = (href: string) => {
  return (e:any)=>{
    e.preventDefault();
    router.get(href);
  }
}
const Sidebar = () => {
  const { tags, query : {tag = ""} } = usePage<P>().props as any;
  const active = (id: string) => id == tag;

  return (
    <div className='sidebar'>
      <List>
        {
          tags.map((item)=>(
            <ListItemButton
              component='a'
              onClick={onTag(route('search', {tag: item.id}))}
              href={route('search', {keyword: item.name})}
              key={item.id}
              selected={active(item.id)}
            >
              <ListItemText primaryTypographyProps={{
                className: 'primary'
              }} primary={item.name}/>
            </ListItemButton>
          ))
        }
      </List>
    </div>
  )
}
const sx = {
  // paddingTop: t=>`${(t.mixins.toolbar.minHeight as number) + 24}px`,

  "& .sidebar":{
    "& .primary":{
      textTransform:'capitalize'
    }
  },
}
const SearchPage = () => {
  const { books : {data} } = usePage().props as any;
  return (
    <>
      <Head title="Pencarian" />
      <Box sx={sx}>
        <Grid container spacing={1}>
          <Grid item lg={3} md={4}>
            <Sidebar/>
          </Grid>
          <Grid item lg={9} md={8}>
            <Grid container spacing={2}>
              {
                data.map(item=><BookCard {...item} key={item.id}/>)
              }
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default SearchPage;
