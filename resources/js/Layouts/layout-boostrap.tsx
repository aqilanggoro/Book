// @flow
import * as React from 'react';
import Layout from "@/Layouts/layout";
import {SnackbarProvider} from "notistack";
import {CartManagerProvider} from "@/providers/CartManager";
import { LayoutProvider } from './layout.provider'

const Wrap = ({children}) => {
  return <SnackbarProvider anchorOrigin={{
    horizontal:'center',
    vertical:'bottom'
  }}>
    <CartManagerProvider>
      {children}
    </CartManagerProvider>
  </SnackbarProvider>

}

export const LayoutBoostrap = (element) => {
  const path = route().current()!;
  if (path.includes('backoffice')){
    return <Wrap>{element}</Wrap>;
  }
  return (
    <Wrap>
      <LayoutProvider>
        <Layout>
          {element}
        </Layout>
      </LayoutProvider>
    </Wrap>
  );
};
