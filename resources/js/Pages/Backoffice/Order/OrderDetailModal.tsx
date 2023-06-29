import {Button, Dialog} from '@mui/material'
import {Close} from '@mui/icons-material'
import {useOrderDetail} from "@/Pages/Backoffice/Order/OrderDetailProvider";
import OrderView from "@/Components/OrderView";

export const OrderDetailModal = () => {
    const [{open, model}, {close, prepare}] = useOrderDetail();
    return (
        <Dialog open={open} onClose={close} PaperProps={{
            sx:{
                bgcolor:'transparent',
                boxShadow:0
            }
        }}>
            {
                model ?
                    <div>
                        <div style={{textAlign:'right'}}>
                            <Button
                                onClick={close}
                                size='small'
                                sx={{mb:2, borderRadius:2}}
                                color='error'
                                variant='contained'
                                startIcon={<Close/>}
                            >
                                Tutup
                            </Button>
                        </div>
                        <OrderView model={model}/>
                    </div>
                    : null
            }

        </Dialog>
    );
};
