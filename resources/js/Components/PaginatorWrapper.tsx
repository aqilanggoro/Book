import {Box, Pagination} from '@mui/material'
import {router, usePage} from "@inertiajs/react";
export const PaginatorWrapper = ({current_page: page, last_page: last}) => {
    const { query } = usePage().props as any
    const onChange = (e: any, page : number) => {
        router.get(window.location.href, {
            ...query,
            page
        },{
            preserveState:true,
            preserveScroll:false,
            onFinish: ()=>{
                document.querySelectorAll(".scroll-after-page").forEach(el=>{
                    console.log(el);
                    el.scrollTo({
                        left:0,
                        top:0,
                        behavior:'smooth'
                    })
                })
            }
        })
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Pagination
                sx={{
                    mt:2,
                    mb:5
                }}
                color='primary'
                page={page}
                count={last}
                onChange={onChange}
            />
        </Box>
    );
};
