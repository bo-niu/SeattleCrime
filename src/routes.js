import Discussion from './Discussion.jsx';
import Report from './Report.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';

const routes = [
  { path: '/discussion', component: Discussion },
  { path: '/home?', component: Home },
  { path: '/report', component: Report },
  { path: '/about', component: About },
  { path: '*', component: NotFound },
];

export default routes;
