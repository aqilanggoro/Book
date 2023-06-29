import {
  AppBar,
  Box,
  TextField,
  Toolbar,
  InputAdornment,
  Typography,
  IconButton,
  Button,
  ButtonGroup
} from "@mui/material";
import {AccountCircle, ExitToApp, Search} from '@mui/icons-material'
import useLayout from "@/Layouts/layout.provider";
import {cloneElement, createElement} from "react";
import {router, useForm, usePage} from "@inertiajs/react";

const sx = {
  py:'12px',
  px:2,
  position: 'sticky',
  left:0,
  top:0,
  zIndex:1000,
  // bgcolor: 'rgb(246,248,252)',
  bgcolor:'white',
  "& > .head":{
    borderRadius:2,
    bgcolor:'white',
    boxShadow:0,
    display: 'flex',
    flexDirection:'row',
    "& .account":{
      ml:'auto'
    }
  }
}
const inputSx = {
  borderRadius:10,
  bgcolor: 'rgb(234,241,251)',
  "& .MuiOutlinedInput-notchedOutline":{
    borderColor:'rgb(234,241,251,0.2)',
  },
  "&.Mui-focused, &:hover":{
    "& .MuiOutlinedInput-notchedOutline,":{
      borderColor:'rgb(202,220,244)',
    },
  },
  "&:focused":{
    borderColor:'red',
  },
}
const onLogout = () => {
  router.post('/logout');
}
const onLogin = (e) => {
  e.preventDefault();
  router.get('login');
}
const UserSection = () => {
  const { auth : {user}} = usePage().props as any;

  return (
    <div className='account'>
      {
        user ?
          <ButtonGroup>
            <Button
              startIcon={<AccountCircle/>}
            >
              {user.name}
            </Button>
            <Button
              onClick={onLogout}
              startIcon={<ExitToApp/>}
            >
              Keluar
            </Button>
          </ButtonGroup> :
          <IconButton
            component='a'
            href={route('login')}
            onClick={onLogin}
          >
            <AccountCircle/>
          </IconButton>
      }
    </div>
  )
}
export const Headbar = () => {
  const [{headbar}] = useLayout();
  const { query } = usePage().props as any;
  const form = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    router.get(route('search'),{
      ...query,
      keyword: form.data.keyword
    })
  }

  return (
    <Box sx={sx}>
      <AppBar className='head' position='static' >
        <>
          {
            ! headbar ?
              <form onSubmit={onSubmit}>
                <button type='submit' style={{display: 'none'}}/>
                <TextField
                  value={form.data.keyword}
                  onChange={(e)=>form.setData('keyword', e.target.value)}
                  size='small'
                  placeholder='Pencarian'
                  className='input'
                  InputProps={{
                    sx: inputSx,
                    startAdornment:(
                      <InputAdornment position='start'>
                        <Search/>
                      </InputAdornment>
                    )
                  }}
                />
              </form>
               : headbar!
          }
        </>
        <UserSection/>
      </AppBar>
    </Box>
  );
};
