import {
  AppBar, Box, Container, InputAdornment, List, Paper, TextField, Typography,
  ThemeProvider,
  createTheme
} from "@mui/material";
import {router, usePage} from "@inertiajs/react";
import {useSnackbar} from "notistack";
import {useEffect} from "react";
import * as Mui from '@mui/material';
import { mainMenuConfig } from './layout.config'
import { SidebarContent } from './layout.sidebar-content'
import { Headbar } from './layout.headbar'


const baseTheme = createTheme();


const appbarSx = {
  bgcolor:'white',
  boxShadow:4,
  color:"black",
  "& > div":{
    display: 'flex',
    alignItems:'center'
  },
  "& .title":{
    mr:[0,1,4]
  },
  "& form":{
    flex: 1,
    mx:[0,1]
  },
  "& .MuiOutlinedInput-notchedOutline":{
    borderRadius:10,
  },
  "& .MuiOutlinedInput-root":{
    borderRadius:10,
    bgcolor:"rgb(243,244,246)"
  }
};

const mainSx = {
  height: '100vh',
  display: ['block','block', 'flex'],
  bgcolor: 'rgb(246,248,252)',
  overflow:'hidden',
  '& > .content':{
    flex:1,
    display:'flex',
    p: 1,
    "& > div":{
      flex:1,
      borderRadius:3,
      pb:2,
      overflow:'auto',
    }
  },
  '& > .sidebar':{
    width: ['100vw', '100vw', '30vw', '20vw'],
    display:'flex',
    flexDirection:'column',
    "& > div:last-of-type":{
      flex:1,
      display: 'flex',
      "& > div":{
        width: '100%',
      }
    },
    "& > div":{
      p: 1,
      "& > div":{
        bgcolor: 'white',
        p:1,
        boxShadow: 1,
        borderRadius: 2,
      }
    }
  }
}

const MainMenuItem = (
  {
    name,
    icon : Icon,
    inactiveIcon : InActiveIcon,
    label
  }) => {
  const active = route().current(name);
  const path = route(name);
  const ViewIcon = active ? Icon: InActiveIcon;
  const onClick = (e) => {
    e.preventDefault();
    console.log(path);
    router.get(path as unknown as string, {},{
    });
  }

  return (
    <Mui.ListItemButton
      sx={{
        "&:not(:last-of-type)":{
          mb:1
        },
        borderRadius:1
      }}
      component='a'
      href={path as unknown as string}
      onClick={onClick}
      selected={active}
    >
      <Mui.ListItemIcon>
        <ViewIcon/>
      </Mui.ListItemIcon>
      <Mui.ListItemText primary={label}/>
    </Mui.ListItemButton>
  )
}

const MainMenu = () => {
  return (
    <div>
      <div>
        <Mui.List dense>
          {
            mainMenuConfig.map(item=>(
              <MainMenuItem {...item} key={item.name}/>
            ))
          }
        </Mui.List>
      </div>
    </div>
  )
}

const Layout = ({children}) => {

  const {snackbar} = usePage().props as any;
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  useEffect(()=>{
    if (snackbar){
      enqueueSnackbar(snackbar.message, {
        variant: snackbar.variant
      })
    }
  },[snackbar]);

  return (
    <ThemeProvider theme={baseTheme}>
      <Box sx={mainSx}>
        <div className="sidebar">
          <MainMenu/>
          <SidebarContent/>
        </div>
        <div className='content'>
          <Paper>
            <Headbar/>
            {children}
          </Paper>
        </div>
        {/*<Headbar/>*/}
        {/*{children}*/}
      </Box>
    </ThemeProvider>
  )
}
export default Layout;
