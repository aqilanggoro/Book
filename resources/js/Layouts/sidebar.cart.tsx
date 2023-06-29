import { TabPanel } from '@mui/lab'
import useCartManager, {CartItem} from "@/providers/CartManager";
import {Button, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import { PointOfSale } from '@mui/icons-material'
import {router} from "@inertiajs/react";

const sx = {
  "& img":{
    width: '30px',
    height: '50px',
  },
  alignItems:'flex-start',
  "& .primary":{
    color:'#5f5f5f'
  }
}
const intl = new Intl.NumberFormat();

const CartView = ({model}: {model: CartItem}) => {
  return (
    <ListItemButton sx={sx}>
      <ListItemIcon>
        <img src={model.img} alt=""/>
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{
          className:'primary',
          sx:{
            fontWeight: 'bolder'
          }
        }}
        secondaryTypographyProps={{
          variant:'caption'
        }}
        primary={model.title}
        secondary={`Rp ${intl.format(model.price)}`}
      />
    </ListItemButton>
  )
}

const mainSx = {
  display: 'flex',
  flexDirection:'column',
  flex:1,
  p:0,
  "& > .content":{
    flex:1
  }
}

export const SidebarCart = () => {
  const [ books ] = useCartManager();
  const path = route('checkout');
  const onPay = (e) => {
    e.preventDefault();
    router.get(path);
  }

  return (
    <TabPanel sx={mainSx} value='cart'>
      <div className="content">
        <List dense>
          {
            books.map(item=>(
              <CartView model={item} key={item.id}/>
            ))
          }
        </List>
      </div>
      <div className="footer">
        <Button
          component='a'
          onClick={onPay}
          href={path}
          startIcon={<PointOfSale/>}
          fullWidth
          variant='contained'
          sx={{
            borderRadius:2,
          }}
        >
          Pembayaran
        </Button>
      </div>
    </TabPanel>
  );
};
