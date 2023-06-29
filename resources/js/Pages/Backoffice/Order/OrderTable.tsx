import {
    Box,
    Chip,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip
} from "@mui/material";
import * as React from "react";
import {router, usePage} from "@inertiajs/react";
import {CheckCircle, Delete, Edit, ListAlt, PointOfSale} from "@mui/icons-material";
import {useOrderDetail} from "@/Pages/Backoffice/Order/OrderDetailProvider";
import {PaginatorWrapper} from "@/Components/PaginatorWrapper";


const Head = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Penerima</TableCell>
                <TableCell>Nomor telepon</TableCell>
                <TableCell>Kode pos</TableCell>
                <TableCell>Kota</TableCell>
                <TableCell>Total pembayaran</TableCell>
                <TableCell>Aksi</TableCell>
            </TableRow>
        </TableHead>
    )
}

const intl = new Intl.NumberFormat();

const Row = (model) =>{
    const [, {prepare}] = useOrderDetail()
    const { name, phone, postal_code, total, city } = model;
    const onPay = () => {
        router.put(route('backoffice.order.update', {
            order: model.id
        }))
    }
    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>
                {phone}
            </TableCell>
            <TableCell>
                {postal_code}
            </TableCell>
            <TableCell>
                {city}
            </TableCell>
            <TableCell>
                Rp {intl.format(total)}
            </TableCell>
            <TableCell>
                <Tooltip title='Pembayaran'>
                    <IconButton onClick={()=>prepare(model)}>
                        <ListAlt sx={{color: 'info.main'}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Pembayaran'>
                    <IconButton onClick={model.status? undefined: onPay}>
                        {
                            model.status ?
                                <CheckCircle sx={{color: "primary.main"}}/> :
                                <PointOfSale sx={{color:'warning.main'}}/>
                        }
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    )
}

export const OrderTable = () => {
    const { orders } = usePage().props as any;
    const { data } = orders
    return (
        <div>
            <TableContainer>
                <Table>
                    <Head/>
                    <TableBody>
                        {
                            data.map(item=>(<Row {...item} key={item.id}/>))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <PaginatorWrapper {...orders} />
        </div>
    );
};
