import {
  Avatar,
  Box,
  Typography,
  IconButton,
  Tooltip,
  List,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar
} from "@mui/material";
import {ArrowBack, ExitToApp} from '@mui/icons-material'
import {router, usePage} from "@inertiajs/react";
import {useSnackbar} from "notistack";
import {useEffect} from "react";


const sx = {
  display: 'flex',
  height: '100vh',
  overflow:'hidden',
  "& .sidebar": {
    borderTopRightRadius:16,
    borderBottomRightRadius:16,
    position: ['fixed', 'fixed', 'static'],
    width: ['100%', '100%', '20%', '20%', '15%'],
    bgcolor:'primary.light',
    '& .avatar':{
      height: 128/2,
      width: 128/2,
      my:2
    },
    "& .account-control":{
      borderRadius:4,
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      bgcolor:'primary.main',
      alignItems: 'center',
      color:'white',
      py:2,
      boxShadow: 5,
      "& .uname":{
        px:1
      }
    }
  },
  "& .center":{
    textAlign:'center',
    display: 'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  "& .content": {
    flex:1,
    height: '100vh',
    overflowY:'auto',
    position: 'relative'
  },
}
const routeMap = [
  ['Buku', 'book.index'],
  ['Pesanan', 'order.index'],
];
const labelMap = [...routeMap, [
  "Tambah data buku", 'book.create',
]]
const findTitle = (loc: string) => {
  const find = labelMap.find(item=>{
    return route(`backoffice.${item[1]}`) == loc;
  });
  return find ? find[0] : "Edit data";
}

const AppNav = ({r } : {r: string[]}) => {
  const [trans, path] = r;
  const href = route(`backoffice.${path}`);
  const handler = (e)=>{
    e.preventDefault();
    router.get(href);
  }
  const { props } = usePage<any>();
  const active = href == props.ziggy.location;
  return (
    <ListItemButton
      component='a'
      onClick={handler}
      href={href}
      selected={active}
      sx={{
        "&.Mui-selected":{
          bgcolor:'divider'
        }
      }}
    >
      <ListItemText
        primaryTypographyProps={{
          sx: {
            color:'white'
          }}
        }
        primary={trans}
      />
    </ListItemButton>
  )
}

const Header = ({back}) => {
  const { props } = usePage<any>();
  const t = findTitle(props.ziggy.location) ?? "Edit data";
  const {snackbar} = props as any;
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  useEffect(()=>{
    if (snackbar){
      enqueueSnackbar(snackbar.message, {
        variant: snackbar.variant
      })
    }
  },[snackbar]);
  return (
    <Box sx={{
      p:1,
      position:'sticky',
      top:0,
      left: 0,
      bgcolor:'white',
      zIndex: 1000
    }}>
      <AppBar position='static' sx={{bgcolor:'primary.light', borderRadius:3}}>
        <Toolbar>
          {
            back ?
              <IconButton sx={{mr:2}} onClick={()=>window.history.back()}>
                <ArrowBack sx={{color:'white'}}/>
              </IconButton> : null
          }
          <Typography variant='h4' fontWeight='bolder'>{t}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
const Sidebar = () => {
  const { auth : {user : {name}} } = usePage().props as any;
  const onLogout = (e: any)=>{

    // router.post(route('logout'));
  }
  return (
    <div>
      <Box
        sx={{width: '100%'}}
      >
        <Box sx={{p:1}}>
          <div className="account-control">
            <Typography className='uname'>{name}</Typography>
            <Tooltip title='Logout'>
              <form action="/logout" method='post'>
                {/*@ts-ignore*/}
                <input type="hidden" name='_token' value={window.csrf}/>
                <IconButton type='submit'>
                  <ExitToApp sx={{
                    color:'white'
                  }}/>
                </IconButton>
              </form>
            </Tooltip>
          </div>
        </Box>
      </Box>
      <List>
        {
          routeMap.map(item=>{
            return <AppNav r={item} key={item[1]}/>
          })
        }
      </List>
    </div>
  )
};

const BackofficeLayout = ({children, back}: any) => {
  return (
    <Box sx={sx}>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="content scroll-after-page">
        <Box className='' sx={{
          minHeight: '100vh',
          position: 'relative'
        }}>
          <Header back={back}/>
          <Box sx={{
            minHeight: '100vh',
            px:2
          }}>
            {children}
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default BackofficeLayout;
