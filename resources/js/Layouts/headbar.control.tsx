import {Box, IconButton} from "@mui/material";
import { AccountCircle, ShoppingCart, Favorite} from '@mui/icons-material'
import {usePage, router} from "@inertiajs/react";
import CartControl from "@/Layouts/CartControl";

type Props = {

};
const sx = {
    display: ['none', 'flex'],
    "& button":{
        mx:1
    },
}

const accountHandler = (user) => (e:any) => {
    e.preventDefault();
    router.get(route(user? 'dashboard' : 'login'));
}

export const HeadbarControl = (props: Props) => {
    const {auth : {user}} = usePage().props as any;
    return (
        <Box sx={sx}>
            <IconButton onClick={accountHandler(user)} component='a'>
                <AccountCircle/>
            </IconButton>
            {
                !user ? null : <IconButton>
                    <Favorite/>
                </IconButton>
            }
            <CartControl/>
        </Box>
    );
};
