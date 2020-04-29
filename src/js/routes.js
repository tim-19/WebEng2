import Home from '../pages/Home';
import About from '../pages/About';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
