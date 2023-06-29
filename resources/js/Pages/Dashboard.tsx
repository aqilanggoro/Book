import {Head, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import Layout from "@/Layouts/layout";
import {Container, Grid, Tabs, Tab, AppBar, Box, IconButton} from "@mui/material";
import OrderView from "@/Components/OrderView";
import { TabPanel, TabContext } from '@mui/lab';
import {ArrowBack} from "@mui/icons-material";
import useLayout from "@/Layouts/layout.provider";
import {BackControl} from "@/Components/BackControl";

const OrderList = () => {
  const {orders} = usePage().props as any;
  return (
    <div>
      {
        orders.map(item=>(
          <OrderView model={item} key={item.id}/>
        ))
      }
    </div>
  )
}
export default function Dashboard({ auth, orders }: PageProps) {
  const [,c] = useLayout();
  c.withHeadElement(BackControl);
  return (
    <>
      <Head title='Dashboard' />
      <Box sx={{px:2}}>
        <Grid container sx={{mt:3}}>
          <Grid item xs={8}>
            <OrderList/>
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
