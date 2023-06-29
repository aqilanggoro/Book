import * as React from 'react';
import Layout from "@/Layouts/layout";
import {AddressForm} from "@/Pages/Checkout/address-form";
import {Box, Container, Grid, IconButton, Typography} from "@mui/material";
import {CartList} from "@/Pages/Checkout/cart-list";
import useLayout from "@/Layouts/layout.provider";
import {ArrowBack} from "@mui/icons-material";
import {Head} from "@inertiajs/react";

type Props = {

};

const PageHead = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <IconButton onClick={()=>window.history.back()}>
        <ArrowBack/>
      </IconButton>
      <Typography color='textSecondary' fontWeight='bold' sx={{ml:2}} variant='h4'>
        Pembayaran
      </Typography>
    </Box>
  )
}

export const Checkout = (props: Props) => {
  const [, config] = useLayout();
  config.withoutSidebar();
  config.withHeadElement(PageHead);
  return (
    <>
      <Head title='Pembayaran'/>
      <Box sx={{px:2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <CartList/>
          </Grid>
          <Grid item xs={12} md={4}>
            <AddressForm/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Checkout;
