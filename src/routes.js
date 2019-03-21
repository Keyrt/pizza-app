import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'


// 三级路由
import Phone from './components/about/contact/phone'
import PersonName from './components/about/contact/Personname'

export const routes = [{
    path: '/',
    name: "homeLink",
    components: {
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }
  },
  {
    path: '/menu',
    name: "menuLink",
    component: Menu
  },
  {
    path: '/admin',
    name: "adminLink",
    component: Admin,
    // beforeEnter:(to,from, next) => {
      // 路由独享守卫
      // alert("非登陆状态，不能访问此页面！");
      // next(false);
      //判断store.getter.isLogin ===false
      // if(to.path == '/login' || to.path == '/register'){
      //   next();
      // }else{
      //   alert("还没有登录，请先登录！");
      //   next('/login');
      // }
    // }
  },
  {
    path: '/about',
    name: "aboutLink",
    component: About,
    redirect: '/about/contact',
    children: [{
        path: '/about/contact',
        name: 'contactLink',
        component: Contact,
        redirect: '/about/contact/phone',
        children: [
          {
            path: '/about/contact/phone',
            name: 'phoneNumber',
            component: Phone
          },
          {
            path: '/about/contact/PersonName',
            name: 'PersonName',
            component: PersonName
          }
        ]
      },
      {
        path: '/history',
        name: 'historyLink',
        component: History
      },
      {
        path: '/delivery',
        name: 'deliveryLink',
        component: Delivery
      },
      {
        path: '/orderingGuide',
        name: 'orderingGuideLink',
        component: OrderingGuide
      }
    ]
  },
  {
    path: '/login',
    name: "loginLink",
    component: Login
  },
  {
    path: '/register',
    name: "registerLink",
    component: Register
  },
  {
    path: '*',
    redirect: '/'
  }
]