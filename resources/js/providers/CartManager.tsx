import {createContext, useContext, useEffect, useState} from "react";
import {useLocalStorage} from "react-use";


type Cart = {
    id : number
    amount: 1,
    price: 1
};

export class CartItem{
    constructor(
        public id,
        public title : string,
        public price : number,
        public img: string,
        public amount : number = 1,
    ) {}
    _equal = (other :CartItem ) : boolean => this.id != other.id;

    get subTotal() : number{
        return this.price * this.amount;
    }

    static make({id,title, price, gramedia_thumb}){
        return new CartItem(id, title, price, gramedia_thumb,1);
    }
    static exists(stacks : CartItem[], item: CartItem) : boolean{
        if (! stacks.length) return false;
        return stacks.find(el=> item._equal(el)) != null;
    }

    toString = ()=>({
        amount: this.amount,
        id: this.id,
        title: this.title,
        price: this.price,
        gramedia_thumb: this.img
    });
}

type CartManager = [
    CartItem[], Record<'add' | 'increase' | 'decrease' | 'remove', (item: CartItem)=>void > & {
        exist(item: CartItem) : boolean,
        total : number
        productLen : number,
        clear(): void;
    }
];

const useCartManagerProvider = () : CartManager => {
    const [items , setItems] = useState<CartItem[]>(()=>{
        const c = window.localStorage.getItem('local.cart');
        return c ? (JSON.parse(c) as any[]).map(CartItem.make) : [];
    });
    useEffect(()=>{
        window.localStorage.setItem('local.cart', JSON.stringify(items.map(i=>i.toString())))
    },[items]);
    const remove = (cart : CartItem) => {

        setItems(prev => [...prev!.filter(item=> item.id != cart.id)]);
    };
    const amountHandler = (cart: CartItem,amount: number) => {
        setItems(prev=> [...prev!.map(item=>{
            if (cart.id == item.id){
                item.amount = amount;
            }
            return item;
        })]);
    }
    const increase = (item : CartItem ) => {
        return amountHandler(item, item.amount + 1);
    }
    const decrease = (item : CartItem ) => {
        return amountHandler(item, item.amount - 1 == 0 ? 1 : item.amount -1);
    }
    const add = (item: CartItem)=>{
        const exists = items.find(c=>c.id == item.id);
        if (exists) return increase(item);
        setItems(prev=>[...items!, item]);
    }
    const exist = (item: CartItem) : boolean => items.find(i=>i.id == item.id) != null;

    const total = items.reduce((a,b )=>{
        return a + b.subTotal;
    }, 0);
    const clear = () => {
        setItems([]);
    }

    const productLen = items.reduce((a,b )=>{
        return a + b.amount;
    }, 0);
    return [
        items!,
        {
            increase,
            decrease,
            remove,
            add,
            exist,
            clear,
            total,
            productLen,
        }
    ];
}
const Ctx = createContext<CartManager | null>(null);
export const CartManagerProvider = ({children}) => {
    const s = useCartManagerProvider();
    return <Ctx.Provider value={s}>
        {
            children
        }
    </Ctx.Provider>
}
export default function useCartManager(){
    return useContext(Ctx) as CartManager;
}
