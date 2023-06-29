import { Tab, Tabs, Typography, Box } from '@mui/material'
import {ShoppingCart, LibraryBooks} from "@mui/icons-material";
import { useRemember } from '@inertiajs/react'
import { TabContext } from '@mui/lab';
import { SidebarCart } from './sidebar.cart'
import { SidebarCollection } from './sidebar.collection'
import useLayout from "@/Layouts/layout.provider";

const sx = {
  '& .tab':{
    textTransform: 'none',
    flex:1,
    borderRadius:2,
    "& .item":{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
}

const TabItem = ({icon, label, value, onChange}) => {
  return (
    <Tab value={value} onClick={()=>onChange(value)} className='tab' label={
      <div className='item'>
        {icon}
        <Typography sx={{ml:2}} variant='caption'>
          {label}
        </Typography>
      </div>
    }/>
  )
}

const mainSx = {
  display: 'flex',
  flexDirection:'column',
};
export const SidebarContent = () => {

  const [tab, setTab] = useRemember('cart', 'sidebar-content-key');
  const onChange = (v :string) => {
    setTab(v);
  }
  const [ {enableSidebar} ] = useLayout();
  if (! enableSidebar){
    return <div/>
  }
  return (
    <div>
      <Box sx={mainSx}>
        <TabContext value={tab}>
          <Tabs
            onChange={(e)=>{
              setTab(e as any)
            }}
            variant='fullWidth'
            sx={sx}
            value={tab}
          >
            <TabItem onChange={onChange} icon={<ShoppingCart/>} value='cart' label="Keranjang"/>
            <TabItem onChange={onChange} icon={<LibraryBooks/>} value='collection' label="Koleksi buku"/>
          </Tabs>
          <SidebarCart/>
          <SidebarCollection/>
        </TabContext>
      </Box>
    </div>
  )
}
