// @flow
import * as React from 'react';
import {Box, Divider, Grid, IconButton, Paper, Typography} from "@mui/material";
import useCartManager, {CartItem} from "@/providers/CartManager";
import {AddCircle, Delete, RemoveCircle} from "@mui/icons-material";

type Props = {

};

const sx = {
  mb: 2,
  p: 2,
  borderRadius:3,
  bgcolor: 'rgb(246,248,252)',
  "& img":{
    width: '100%',
    height: 200,
    borderRadius: 3,
    boxShadow:10,
  },
  "& .form-container":{
    p: 2,
    borderRadius: 2,
    mt:'auto',
    // borderColor:'rgb(166,199,243)',
    bgcolor:'rgba(255,255,255,0.7)'
  },
  "& .info-container":{
    display: 'flex',
    flexDirection: 'column'
  }
}

const intl = new Intl.NumberFormat();
const AmountControl = ({model} : {model: CartItem}) => {
  const [, {increase, decrease, remove}] = useCartManager();
  return (
    <div>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        '& .amount':{
          width: 30,
          textAlign: 'center'
        }
      }}>
        <Typography variant='caption' fontWeight='bolder' color='textSecondary' sx={{mr:'auto'}}>
          Rp {intl.format(model.amount * model.price)}
        </Typography>
        <IconButton onClick={()=>increase(model)}>
          <AddCircle color='secondary'/>
        </IconButton>
        <Typography className='amount'>{model.amount}</Typography>
        <IconButton onClick={()=>decrease(model)}>
          <RemoveCircle color='secondary'/>
        </IconButton>
        <IconButton color='error' onClick={()=>remove(model)}>
          <Delete/>
        </IconButton>
      </Box>
    </div>
  )
}
const Item = ({model} : {model: CartItem}) => {
  return (
    <Box sx={sx}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <img src={model.img} alt=""/>
        </Grid>
        <Grid item xs={10} className='info-container'>
          <Box sx={{px:3}}>
            <Typography variant='h5' color='textSecondary'>{model.title}</Typography>
            <Divider sx={{mb:2}}/>
            <Typography fontWeight='bolder' color='textSecondary'>
              @ Rp {intl.format(model.price)}
            </Typography>
            <div className='form-container'>
              <AmountControl model={model}/>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const ItemList = () => {

  const [items] = useCartManager();

  return (
    <div>
      {
        items.map(item=>(
          <Item model={item} key={item.id}/>
        ))
      }
      {
        ! items.length ?
          <Typography align='center' color='textSecondary'>
            Keranjang anda kosong
          </Typography> : null
      }
    </div>
  )
}

export const CartList = (props: Props) => {
  return (
    <div>
      <Typography variant='h6' color='textSecondary'>Keranjang belanja</Typography>
      <Divider sx={{my:1}}/>
      <ItemList/>
    </div>
  );
};
