import { useEffect, FormEventHandler } from 'react';
// import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, Link, router, useForm} from '@inertiajs/react';
import {Box, Paper, TextField, Checkbox, Button, Typography} from "@mui/material";
import Layout from "@/Layouts/layout";
import useLayout from "@/Layouts/layout.provider";
import {BackControl} from "@/Components/BackControl";

const sx = {
  overflow: "hidden",
  display: 'flex',
  alignItems:'center',
  justifyContent:'center',
  "& > div":{
    width: ["80%",'50%', '40%', '25%'],
    p:3
  },
  "& .footer":{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  "& .field":{
    mt:3
  }
}


const H = () => {
  return (
    <></>
  )
}
export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('login'));
  };
  const [, config] = useLayout()
  config.withHeadElement(BackControl);
  return (
    <>
      <Head title="Log in" />
      <Box sx={sx}>
        <Paper>
          <form onSubmit={submit}>
            <div>
              <TextField
                value={data.email}
                helperText={errors.email}
                onChange={(e)=>setData('email', e.target.value)}
                error={Boolean(errors.email)}
                className='field'
                label='Alamat email'
                fullWidth
              />
              <TextField
                onChange={(e)=>setData('password', e.target.value)}
                helperText={errors.password}
                error={Boolean(errors.password)}
                value={data.password}
                className='field'
                label='Password'
                type='password'
                fullWidth
              />
            </div>
            <div className="block mt-4">
              <label className="flex items-center">
                <Checkbox
                  name="remember"
                  checked={data.remember}
                  onChange={(e, c) => setData('remember', c)}
                />
                <Typography component='span' variant='caption' className="ml-2 text-sm text-gray-600">Ingat saya</Typography>
              </label>
            </div>
            <div className="footer">
              {canResetPassword && (
                <Typography
                  component='a'
                  href={route('password.request')}
                  className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Lupa password anda?
                </Typography>
              )}
              <Box sx={{
                textAlign:'right'
              }}>
                <Button
                  variant='contained'
                  type='submit'
                >
                  Login
                </Button>
              </Box>
            </div>
            <Button
              component='a'
              href={route('register')}
              onClick={e=>{
                e.preventDefault();
                router.get(route('register'));
              }}
              variant='contained'
              sx={{my:2}}
              fullWidth
            >
              Buat akun
            </Button>
          </form>
          {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
        </Paper>
      </Box>
    </>
  );
}
