// @flow
import * as React from 'react';
import {Box, Table, TableBody, TableCell, Chip,TableContainer, TableHead, TableRow, IconButton} from "@mui/material";
import { Edit,Delete } from '@mui/icons-material'
import {router, usePage} from "@inertiajs/react";

type Props = {

};

const Head = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{width:72}}>Gambar</TableCell>
                <TableCell>Judul</TableCell>
                <TableCell>Penulis</TableCell>
                <TableCell>Kategori</TableCell>
                <TableCell>Harga</TableCell>
                <TableCell>Aksi</TableCell>
            </TableRow>
        </TableHead>
    )
}

const intl = new Intl.NumberFormat();
const Row = ({gramedia_thumb, title, author, tags, price, id}) =>{
    const hrefEdit = route('backoffice.book.edit',{book: id});
    const hrefDel = route('backoffice.book.destroy',{book: id});
    const onEdit = (e) => {
        e.preventDefault();
        router.get(hrefEdit);
    }
    const onDelete = () => {
        const isConfirmed = confirm(`Apakah anda ingin menghapus data buku : ${title}`);
        if (isConfirmed){
            router.delete(hrefDel);
        }
    }

    return (
        <TableRow>
            <TableCell>
                <Box
                    component='img'
                    sx={{
                        width: 72
                    }} src={gramedia_thumb} alt=""/>
            </TableCell>
            <TableCell>
                {title}
            </TableCell>
            <TableCell>
                {author}
            </TableCell>
            <TableCell>
                {
                    tags.map(item=>(
                        <Chip sx={{bgcolor:'primary'}} key={item} label={item}  />
                    ))
                }
            </TableCell>
            <TableCell>
                Rp {intl.format(price)}
            </TableCell>
            <TableCell>
                <IconButton component='a' href={hrefEdit} onClick={onEdit} sx={{mr:2}}>
                    <Edit sx={{color: 'warning.main'}}/>
                </IconButton>
                <IconButton onClick={onDelete}>
                    <Delete sx={{color:'error.main'}}/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export const BookTable = (props: Props) => {
    const {books: {data}} = usePage().props as any;
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
        </div>
    );
};
