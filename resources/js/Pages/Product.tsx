import Layout from "@/Layouts/layout";
import {Head, router} from "@inertiajs/react";
import {Box, Button, Container, Divider, Grid, IconButton, Paper, Typography} from "@mui/material";
import {ReactNode, useState} from "react";
import {ArrowBack, Share, ShoppingBag} from '@mui/icons-material'
import {BookCard} from "@/Pages/Search";
import useCartManager, {CartItem} from "@/providers/CartManager";
import useLayout from "@/Layouts/layout.provider";


type Props = {

};
const sx = {
  "& img":{
  },
  "& > .head .img":{
    m:5,
    boxShadow:20,
    borderRadius:0,
    display: 'flex',
    "& img":{
      width: "100%",
      height:'100%',
      m:0,
      bgcolor:'red'
    }
  }
}

const Img = ({img}) => {
  return (
    <div className='img'>
      <img style={{height: 400}} src={img} alt=""/>
    </div>
  )
}

const BookDetail = ({title, children} : {title: string, children: ReactNode}) => {
  return (
    <Grid item xs={6}>
      <Typography variant='caption' color='textSecondary'>{title}</Typography>
      <Typography color='textSecondary'>{children}</Typography>
    </Grid>
  )
}

const descriptionSx = {
  my:2,
  mx:2,
  mb:5,
  textAlign:'justify',
  p:5,
  borderRadius: 5,
  bgcolor:'rgb(245,247,251)',
  "& .text":{
    transition: 'all ease 0.2s'
  },
  "& button":{
    textTransform:'capitalize',
    mt:2
  }
}

const DescriptionView = ({description}) => {

  const [expand, setExpand] = useState<boolean>(false);
  const toggle = () => setExpand(! expand);
  const text = !expand ? 'Baca selengkapnya' : 'Tutup deskripsi';
  return (
    <Box sx={descriptionSx}>
      <Typography className={`text ${expand ? "" : "truncate-description"}`}>
        {description}
      </Typography>
      <Box sx={{textAlign:'right'}}>
        <Button onClick={toggle} variant='outlined' size='small'>{text}</Button>
      </Box>
    </Box>
  )
}
const onAuthor = (e: any) => {
  e.preventDefault();
  router.get(e.target.getAttribute('href'));
}
const BookInfo = (props) => {
  const { title, author, pages, publisher, issue, isbn,description } = props;
  return (
    <div>
      <Grid container spacing={1} sx={{mt:2}}>
        <Grid item xs={10}>
          <Typography
            sx={{
              textDecoration:'none'
            }}
            onClick={onAuthor}
            component='a'
            href={route("search", {keyword: author})}
            variant='h6'
            color='textSecondary'
          >
            {author}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <IconButton>
            <Share/>
          </IconButton>
        </Grid>
      </Grid>
      <Divider sx={{mt:2}}/>
      <Typography fontWeight='bold' sx={{my:2}} variant='h2'>
        {title}
      </Typography>
      <div>
        <Typography color='textSecondary' fontWeight='bolder'>
          Detail buku
        </Typography>
        <Divider sx={{mb:1}}/>
        <Grid container spacing={2}>
          <BookDetail title='Jumlah halaman'>
            {pages}
          </BookDetail>
          <BookDetail title='Penerbit'>
            {publisher}
          </BookDetail>
          <BookDetail title='Tanggal terbit'>
            {issue}
          </BookDetail>
          <BookDetail title='ISBN'>
            {isbn}
          </BookDetail>
        </Grid>
      </div>
    </div>
  )
}
const BackControl = () => {
  return (
    <div>
      <IconButton onClick={()=>window.history.back()}>
        <ArrowBack/>
      </IconButton>
    </div>
  )
}

const Product = ({product, recomendations}: any) => {
  const { title } = product;
  const [, {add, exist}] = useCartManager();
  const [, config ] = useLayout();
  config.withHeadElement(BackControl);

  return (
    <>
      <Head title={`${title}`} />
      <Box sx={sx}>
        <Grid className='head' container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <Img img={product.gramedia_thumb}/>
          </Grid>
          <Grid item xs={12} md={10} lg={9}>
            <BookInfo {...product}/>
          </Grid>
        </Grid>
        <Box sx={{textAlign:'center'}}>
          <Button
            disabled={exist(CartItem.make(product))}
            onClick={()=>add(CartItem.make(product))}
            sx={{textTransform: 'none'}}
            color='secondary'
            startIcon={<ShoppingBag/>}
            variant='contained'
            size='large'
          >
            Tambah ke keranjang
          </Button>
        </Box>
        <DescriptionView {...product}/>
        <Box sx={{px:2}}>
          <Typography variant='h5'>
            Rekomendasi
          </Typography>
          <Divider sx={{my:2}}/>
          <Box sx={{
            // bgcolor:'rgb(245,247,251)',
            p:2,
            borderRadius: 2,
          }}>
            <Grid container spacing={2}>
              {
                recomendations.map(item=>(
                  <BookCard {...item} md={2} lg={2} key={item.id}/>
                ))
              }
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Product;
