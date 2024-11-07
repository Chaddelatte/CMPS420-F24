import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from './App.tsx';
import FAQ from './Routes/FAQ/FAQ.tsx';
import Generator from './Routes/Generator/Generator.tsx';
import Results from './Routes/Results/Results.tsx';
export const ROUTES = {
    Dashboard: {
        path: '/',
        element: <App />,
    },
    
    Support: {
        path: '/support',
        element: <FAQ />,
    },

    Generator: {
        path: '/generate',
        element: <Generator />,
    },

    Results: {
        path: '/results',
        element: <Results />,
    },
};

const routes: RouteObject[] = [
    {
        element: <App />,
        children: Object.values(ROUTES).map(({ path, element }) => ({
            path,
            element,
        })),
    },
];

export const router = createBrowserRouter(routes);
