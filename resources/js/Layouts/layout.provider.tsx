import {
  Component,
  ComponentType,
  createContext,
  createElement,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import {useToggle} from "react-use";


type HeadbarTypeElement = ReactNode | null;
type Data = [
  {
    enableSidebar: boolean
    headbar: HeadbarTypeElement
  },
  {
    withHeadElement(component: ComponentType<any>) : void;
    withoutSidebar(): void;
  }
];

const LayoutContext = createContext<Data|null>(null);

export default function useLayout(){
  return useContext(LayoutContext) as Data;
}

const useProvider = ()  : Data => {
  const [headbar, setHeadbar] = useState<ReactNode | null>(null);
  const [enableSidebar, toggle] = useToggle(true);
  const withHeadElement = (Component : ComponentType<any>) => {
    useEffect(()=>{
      setHeadbar(createElement(Component));
      return () =>{
        setHeadbar(null);
      }
    },[]);
  }
  const withoutSidebar = () => {
    useEffect(()=>{
      toggle(false);
      return () => {
        toggle(true)
      }
    },[])
  }
  return [
    {
      headbar,
      enableSidebar
    },
    {
      withHeadElement,
      withoutSidebar
    }
  ]
}

export const LayoutProvider = ({children}) => {
  return (
    <LayoutContext.Provider value={useProvider()}>
      {children}
    </LayoutContext.Provider>
  )
}
