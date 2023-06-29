import { useEffect, FormEventHandler } from 'react';
import {Head, Link, router, useForm} from '@inertiajs/react';
import Layout from "@/Layouts/layout";
import {Box, Button, Paper, TextField} from "@mui/material";
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


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [, c ] = useLayout();
    c.withHeadElement(BackControl);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <>
            <Head title="Register" />
            <Box sx={sx}>
                <Paper>
                    <form onSubmit={submit}>
                        <div>
                            <TextField
                                value={data.name}
                                helperText={errors.name}
                                onChange={(e)=>setData('name', e.target.value)}
                                error={Boolean(errors.name)}
                                className='field'
                                label='Nama lengkap'
                                fullWidth
                            />
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
                            <TextField
                                onChange={(e)=>setData('password_confirmation', e.target.value)}
                                helperText={errors.password_confirmation}
                                error={Boolean(errors.password_confirmation)}
                                value={data.password_confirmation}
                                className='field'
                                label='Konfirmasi Password'
                                type='password'
                                fullWidth
                            />
                        </div>
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{my:2}}
                            fullWidth
                        >
                            Buat akun
                        </Button>
                    </form>
                </Paper>
            </Box>
        </>
    );
}
