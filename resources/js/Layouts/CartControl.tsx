import * as React from 'react';
import useCartManager, {CartItem as Item} from "@/providers/CartManager";
import {useState} from "react";
import {Badge, Box, Button, Grid, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {ExitToApp, ShoppingCart} from "@mui/icons-material";
import {router} from "@inertiajs/react";

const intl = new Intl.NumberFormat();
const CartItem = ({ model, call }: {model : Item, call: ()=>void}) => {
    const ref = route('book.show', {
        book: model.id
    });
    const handle = (e: any) => {
        e.preventDefault();
        call();
        router.get(ref);
    }
    return (
        <MenuItem
            component='a'
            onClick={handle}
            href={ref}
            sx={{display: 'block'}}
        >
            <Grid container spacing={1}>
                <Grid sx={{
                    "& img":{
                        height: 128,
                        width: '100%'
                    }
                }} xs={2} item>
                    <img src={model.img} alt=""/>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='body1'>
                        {model.title}
                    </Typography>
                    <Typography variant='caption'>
                        Harga : Rp {intl.format(model.price)}
                    </Typography>
                </Grid>
            </Grid>
        </MenuItem>
    )
}

const useOnCheckOut = () => {
    router.get(route('checkout'));
}

const CartControl = () => {
    const [items] = useCartManager();
    const [anchor, setAnchor] = useState<HTMLButtonElement| null>(null);
    const open = Boolean(anchor);
    const handleOpen = (e: any) => setAnchor(e.currentTarget);
    const close = ()=> setAnchor(null);
    return (
        <>
            <Badge color='error' badgeContent={!items.length ? null : items.length}>
                <IconButton onClick={handleOpen}>
                    <ShoppingCart/>
                </IconButton>
            </Badge>
            <Menu
                anchorOrigin={{
                    horizontal:-128*2,
                    vertical:'bottom'
                }}
                open={open}
                anchorEl={anchor}
                onClose={close}
                PaperProps={{
                    elevation:1,
                    sx: {
                        maxWidth:600
                    }
            }}
            >
                {
                    items.map(item=><CartItem call={close} model={item} key={item.id}/>)
                }
                <Box sx={{textAlign:'center', p: 2}}>
                    <Button
                        component='a'
                        onClick={(e)=>{
                            e.preventDefault();
                            router.get(route('checkout'))
                        }}
                        href={route('checkout')}
                        startIcon={<ExitToApp/>}
                        variant='contained'
                        sx={{textTransform: 'none'}}
                        size='large'
                        color='secondary'
                        fullWidth
                    >
                        Lanjut ke pembayaran
                    </Button>
                </Box>
            </Menu>
        </>
    );
};
export default CartControl;
