import {createContext, useContext, useState} from "react";


type Data = [
    {
        open: boolean,
        model: any
    },
    {
        prepare(model: any):  void;
        close(): void
    }
];

const useProvider = (): Data => {
    const [open, setOpen] = useState<boolean>(false);
    const [model, setModel] = useState<any|null>(null);
    const prepare = (model) => {
        setModel({...model});
        setTimeout(()=>{
            setOpen(true)
        },400)
    };
    const close = () => {
        setOpen(false)
        setTimeout(()=>{
            setModel(null);
        },400)
    };
    return [{
        model, open,
    }, {close, prepare}]

}
const Context = createContext<null| Data>(null);

export const useOrderDetail = () => useContext(Context) as Data;
export const OrderDetailProvider = ({children}) => {
    const p = useProvider();
    return (
        <Context.Provider value={p}>
            {children}
        </Context.Provider>
    );
};
