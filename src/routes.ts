import * as Page from './pages';

const AppRoutes = [
    {
        path: '/login',
        Component: Page?.LoginPage,
        defaultLayout: true,
    },
    {
        path: '/',
        Component: Page?.DashboardPage,
        defaultLayout: true,
    },
];

export default AppRoutes;