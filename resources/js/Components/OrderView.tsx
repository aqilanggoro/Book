// @flow
import * as React from 'react';
import {Box, Button, Collapse, Divider, Grid, Paper, Typography} from "@mui/material";
import {useToggle} from "react-use";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {PropsWithChildren} from "react";
import {router} from "@inertiajs/react";

type Props = {
    model: any
};
const sx = {
    p: 2,
    borderRadius:2,
    mb:2
}
const cardSx = {
    borderRadius:2,
    '& .img-wrap':{
        textAlign:'center',
        position: 'relative',
        '& .img':{
            height: 75,
            width: 75,
            borderRadius: '50%',
            backgroundSize : 'cover',
            backgroundPosition:'center'
        }
    },
    m: 1, p :1
}
const intl = new Intl.NumberFormat();
const OrderCard = ({amount,img, title, author, price}) => {
    return (
        <Paper variant='outlined' sx={cardSx}>
            <Grid container spacing={2}>
                <Grid item xs={2} display='flex' justifyContent='center'>
                    <div className="img-wrap">
                        <div className="img" style={{backgroundImage:`url(${img})`}}/>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Typography color='textSecondary' fontWeight='bolder'>
                            {title}
                        </Typography>
                    </Box>
                    <Divider/>
                    <Typography variant='body2' color='textSecondary'>
                        {author}
                    </Typography>
                    <Box sx={{
                        mt:3,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Typography color='textSecondary'>
                            QTY : {amount}
                        </Typography>
                        <Typography color='textSecondary'>
                            @ Rp {intl.format(price)}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

const OrderListView = ({orders}) => {
    const [open, toggle] = useToggle(false);
    return (
        <Box
            sx={{
                bgcolor:'rgba(224,224,224,0.40)',
            }}
        >
            <Button
                onClick={toggle}
                component='div'
                sx={{
                    display: 'flex',
                    justifyContent:'space-between',
                    textTransform: 'none',
                    borderRadius: 0
            }}
            >
                <Typography variant='button' textTransform='none'>
                    {!  open ? 'Tampilkan pesanan' : 'Tutup'}
                </Typography>
                {
                    open ? <ExpandLess/> : <ExpandMore/>
                }
            </Button>
            <Collapse in={open} sx={{
                borderRadius: 2,
            }}>
                {
                    orders.map(model => (
                        <OrderCard {...model} key={model.id}/>
                    ))
                }
            </Collapse>
        </Box>
    )
}


const OrderView = ({model}: Props) => {

    const onPay = () => {
        router.post(route('orders.payment', {
            order: model.id
        }))
    }

    return (
        <div>
            <Paper
                variant='outlined'
                sx={sx}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent:'space-between'
                    }}
                >
                    <Typography
                        fontWeight='bolder'
                        color='textSecondary'
                        variant='h6'
                        textTransform='capitalize'>Nomor pesanan : {model.invoice_number.toUpperCase()}
                    </Typography>
                </Box>
                <Divider sx={{mb:1}}/>
                <Typography
                    sx={{mb:2}}
                    variant='body2'
                    display='flex'
                    component='div'
                >
                    Waktu pesanan : <Typography fontWeight='bolder' color='textSecondary' variant='body2' sx={{ml:1}}>{model.created_at}</Typography>
                </Typography>
                <OrderListView orders={model.items}/>
                <Typography sx={{mt: 1}} color='textSecondary'>
                    Detail pengiriman
                </Typography>
                <Divider sx={{my:1}}/>
                <Info title='Nama penerima'>
                    {model.name}
                </Info>
                <Info title='Nomor telepon'>
                    {model.phone}
                </Info>
                <Info title='Kota & kodepos'>
                    {model.city}, {model.postal_code}
                </Info>
                <Info title='Alamat'>
                    {model.address}
                </Info>
                <Divider/>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems : 'center'
                    }}
                >
                    <Typography>
                        Total
                    </Typography>
                    <Typography sx={{my:2}} variant='h4'>
                        Rp {intl.format(model.total)}
                    </Typography>
                </Box>
            </Paper>
        </div>
    );
};

const Info = ({title, children} : PropsWithChildren<{title: string}>) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Typography variant='body2' color='textSecondary'>{title}</Typography>
            <Typography>{children}</Typography>
        </Box>
    )
}
export default OrderView;
