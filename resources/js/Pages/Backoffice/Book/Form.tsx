import BackofficeLayout from "@/Layouts/BackofficeLayout";
import {Button, Grid, MenuItem, TextField} from '@mui/material'
import { Save } from '@mui/icons-material';
import {router, useForm, usePage} from "@inertiajs/react";
import {useEffect} from "react";


const Form = () => {
    const { tags, book } = usePage().props as any;

    const form = useForm<any>({
        title: book?.title,
        author: book?.author,
        tag: book?.tag,
        pages: book?.pages,
        publisher: book?.publisher,
        isbn: book?.isbn,
        price: book?.price,
        description: book?.description,
        issue: book?.issueInp,
        _method: !book ? 'post' : 'put'
    });
    const { errors } = form;
    const setData = form.setData;

    useEffect(()=>{
        if (book){
            if (book.tags.length){
                const f = tags.find(item=>item.name == book.tags[0]);
                if (f){
                    setData('tag', f.name);
                }
            }
            // form.setData('tag');
        }
    },[book]);


    const fieldProps = (name: string, file = false) => {
        const message = errors[name];
        const error = Boolean(message);
        return {
            name,
            value: file ? undefined: form.data[name],
            helperText: message ?? "",
            error,
            onChange(e){
                const t = e.target;
                console.log(file);
                form.clearErrors(name);
                if (file){
                    console.log(t.files);
                    if (t.files.length){
                        setData(name, t.files[0])
                    }
                    return;
                }
                setData(name, e.target.value);
            }
        }
    }
    const onTag = (e) => {
        return ()=>{
            form.clearErrors('tag');
            setData('tag', e.name);
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const ref = book ? route('backoffice.book.update', {
            book: book.id
            }) : route('backoffice.book.store');
        form.post(ref,{
            forceFormData:true,
        });
    }
    return (
        <BackofficeLayout back>
            <form onSubmit={onSubmit}>
                <Grid container sx={{mt:3}} spacing={2}>
                    <Grid item xs={12} md={4} sx={{
                        "& > div": {
                            mb: 2
                        }
                    }}>
                        <TextField {...fieldProps('title')} fullWidth label='Judul buku'/>
                        <TextField
                            fullWidth
                            error={Boolean(errors['tag'])}
                            label='Kategori'
                            select
                            value={form.data.tag ?? tags[0].name}
                        >
                            {
                                tags.map(el=>(
                                    <MenuItem onClick={onTag(el)} key={el.id} value={el.name}>
                                        {el.name}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField {...fieldProps('author')} fullWidth label='Penulis'/>
                        <TextField {...fieldProps('pages')} fullWidth inputProps={{min:0}} label='Halaman' type='number'/>
                        <TextField fullWidth label='Penerbit' {...fieldProps('publisher')}/>
                        <TextField fullWidth label='ISBN' {...fieldProps('isbn')}/>
                        <TextField fullWidth maxRows={8} minRows={5} label='Deskripsi buku' multiline {...fieldProps('description')}/>
                        <TextField fullWidth InputLabelProps={{
                            shrink:true
                        }} label='Tanggal terbit' type='date' {...fieldProps('issue')}/>
                        <TextField fullWidth inputProps={{min:0}} label='Harga' type='number' {...fieldProps('price')}/>
                        <TextField
                            InputLabelProps={{
                                shrink:true
                        }}
                            fullWidth
                            label='Foto'
                            type='file'
                            {...fieldProps('thumbnail', true)}
                        />
                        <Button
                            startIcon={<Save/>}
                            variant='contained'
                            type='submit'
                        >
                            Simpan
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </BackofficeLayout>
    );
};

export default Form;
