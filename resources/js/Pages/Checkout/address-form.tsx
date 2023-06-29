import * as React from 'react';
import {Box, Button, Dialog, DialogContent, Divider, Grid, TextField, Typography} from "@mui/material";
import { PointOfSale } from '@mui/icons-material';
import {PropsWithChildren, useEffect} from "react";
import useCartManager from "@/providers/CartManager";
import {useForm} from "@inertiajs/react";
// @ts-ignore
import type { InertiaFormProps } from '@inertiajs/react/types/useForm'

type AddressInput = Record<'name' | 'phone' | 'postal_code' |'city' | 'address', string>;

type Data = AddressInput & {
    items: {
        id: number,
        amount: number
    }[]
}

type FieldProps = {
    name: keyof AddressInput;
    form: InertiaFormProps<Data>
}
const labelMap : Record<keyof AddressInput, string> = {
    postal_code :'Kode pos', city: 'Kota', phone: 'Nomor telepon penerima', name: 'Nama penerima', address: 'Alamat lengkap'
};
const Field = ({name, form }: FieldProps) => {
    const onChange = (e: any) => {
        form.setData(name, e.target.value);
        form.clearErrors(name);
    }
    return (
        <TextField
            error={Boolean(form.errors[name])}
            helperText={form.errors[name]}
            value={form.data[name]}
            onChange={onChange}
            fullWidth
            name={name}
            sx={{mb:1}}
            label={labelMap[name]}
        />
    )
}

const Info = ({title, children} : PropsWithChildren<{title : string}>) => {
    return (
        <Box sx={{display: 'flex', justifyContent:'space-between'}}>
            <Typography color='textSecondary'>{title}</Typography>
            <Typography color='textSecondary'>{children}</Typography>
        </Box>
    )
}

const intl = new Intl.NumberFormat();
const PaymentInfo = () => {
    const [, {productLen, total}] = useCartManager();
    return (
        <Box sx={{my: 2, bgcolor: 'divider', p: 2, borderRadius:2}}>
            <Info title='Jumlah produk'>
                x {productLen}
            </Info>
            <Info title='Total'>
                Rp {intl.format(total)}
            </Info>
        </Box>
    )
}



export const AddressForm = () => {
    const form = useForm<Data>();
    const [, {clear}] = useCartManager();
    const onSubmit = (e: any) => {
        e.preventDefault();
        form.post(route('checkout.store'),{
            onSuccess:()=>{
                clear();
            }
        });
    }
    const [items] = useCartManager();
    useEffect(()=>{
        form.setData('items',items.map(item=>({
            id: item.id,
            amount: item.amount
        })))
    },[items]);
    return (
        <form onSubmit={onSubmit}>
            <Typography color='textSecondary' variant='h6'>
                Alamat pengiriman
            </Typography>
            <Divider sx={{my:1}}/>
            <Field form={form} name='name'/>
            <Field form={form} name='phone'/>
            <Field form={form} name='postal_code'/>
            <Field form={form} name='city'/>
            <Field form={form} name='address'/>
            <PaymentInfo/>
            <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{
                    textTransform: 'none'
                }}
                startIcon={<PointOfSale/>}
            >
                Bayar
            </Button>
        </form>
    );
};
