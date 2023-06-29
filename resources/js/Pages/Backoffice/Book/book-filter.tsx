import {Autocomplete, Grid, MenuItem, TextField, Button} from "@mui/material";
import {Add} from "@mui/icons-material";
import {router, useForm, usePage} from "@inertiajs/react";


type SProp = {
    onChange(e: any) : void;
    options: any[]
    label :string;
}

const Select = ({options, onChange,label} : SProp) => {
    return (
        <TextField
            select
            onChange={(e=>onChange(e.target.value))}
            label={label}
            fullWidth
        >
            {
                options.map(item=>(
                    <MenuItem
                        key={(item)}
                        value={(item)}
                    >
                        {item}
                    </MenuItem>
                ))
            }
        </TextField>
    )
}

export const BookFilter = () => {

    const onChange = console.log;
    const { authors, tags, ziggy, query } = usePage().props as any;

    const { data, setData, get, submit : f } = useForm<any>({

    });
    const submit = (e) => {
        e.preventDefault();
        get(window.location.href, {
            preserveState:true,
            data
        });
    }
    const onTag = (e) => {
        return ()=>{
            setData('tag', e.id);
            router.get(window.location.href, {
                ...query,
                tag: e.id
            },{
                preserveState:true
            });
        }
    }
    const onKeyword = (e) => {
        setData('keyword', e.target.value);
    }

    const onReset = (e) => {
        router.get(ziggy.location, {});
    }


    return (
        <form onSubmit={submit}>
            <button type="submit" style={{display:'none'}}/>
            <Button
                variant='contained'
                startIcon={<Add/>}
                component='a'
                href={route('backoffice.book.create')}
                onClick={(e)=>{
                    e.preventDefault();
                    router.get(route('backoffice.book.create'))
                }}
                sx={{my:3}}
            >
                Tambah data buku
            </Button>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField label='Pencarian' onChange={onKeyword} fullWidth/>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label='Kategori'
                        select
                    >
                        {
                            tags.map(el=>(
                                <MenuItem onClick={onTag(el)} key={el.id} value={el.id}>
                                    {el.name}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Grid>
                <Grid item>
                    <Button
                        onClick={onReset}
                        disabled={!Boolean(Object.keys(data).length)}
                        sx={{
                            height:54
                        }}
                    >
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
