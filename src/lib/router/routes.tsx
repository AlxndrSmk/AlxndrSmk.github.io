/* eslint-disable react-refresh/only-export-components */
import { type PathRouteProps } from 'react-router-dom';
import Error from '../pages/error';
import Page404 from '../pages/404';
import HomePage from '../pages/Home';
import ImprovePage from '../pages/Improve';

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Error />,
  },
];

export const userRoutes: Array<PathRouteProps> = [
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/improve',
    element: <ImprovePage />,
  },
  {
    path: '/',
    element: <Error />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
];
