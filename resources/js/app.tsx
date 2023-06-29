import './bootstrap';
import '../css/app.scss';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {CartManagerProvider} from "@/providers/CartManager";
import { SnackbarProvider } from 'notistack';
import {LayoutBoostrap} from "@/Layouts/layout-boostrap";



const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
      const p = await resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx'));
      //@ts-ignore
      p.default.layout = LayoutBoostrap;
      return p;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
          <App {...props} />
        );
    },
    progress: {
        color: '#4B5563',
    },
});
