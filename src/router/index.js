/*
 * @Author: your name
 * @Date: 2021-03-14 21:18:18
 * @LastEditTime: 2021-03-17 02:23:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('@/pages/Home.vue');
const Document = () => import('@/pages/Document.vue');
const Intro = () => import('@/pages/Intro.vue');
const Contact = () => import('@/pages/Contact.vue');
const Install = () => import('@/pages/Install.vue');
const Start = () => import('@/pages/Start.vue');
const Icon = () => import('@/pages/Icon.vue');
const Button = () => import('@/pages/Button.vue');
const Radio = () => import('@/pages/Radio.vue');
const Switch = () => import('@/pages/Switch.vue');
const Select = () => import('@/pages/Select.vue');
const Slider = () => import('@/pages/Slider.vue');
const Input = () => import('@/pages/Input.vue');
const Textarea = () => import('@/pages/Textarea.vue');
const Menu = () => import('@/pages/Menu.vue');
const Tabs = () => import('@/pages/Tabs.vue');
const Popover = () => import('@/pages/Popover.vue');
const Bubble = () => import('@/pages/Bubble.vue');
const Skeleton = () => import('@/pages/Skeleton.vue');
const LazyImg = () => import('@/pages/LazyImg.vue');
const SquareImg = () => import('@/pages/SquareImg.vue');
const Spin = () => import('@/pages/Spin.vue');
const Loading = () => import('@/pages/Loading.vue');
const Toast = () => import('@/pages/Toast.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/document',
    name: 'Document',
    component: Document,
    redirect: '/document/intro',
    children: [
      { path: 'intro', name: 'Intro', component: Intro },
      { path: 'contact', name: 'Contact', component: Contact },
      { path: 'install', name: 'Install', component: Install },
      { path: 'start', name: 'Start', component: Start },
      { path: 'icon', name: 'Icon', component: Icon },
      { path: 'button', name: 'Button', component: Button },
      { path: 'radio', name: 'Radio', component: Radio },
      { path: 'switch', name: 'Switch', component: Switch },
      { path: 'select', name: 'Select', component: Select },
      { path: 'slider', name: 'Slider', component: Slider },
      { path: 'input', name: 'Input', component: Input },
      { path: 'textarea', name: 'Textarea', component: Textarea },
      { path: 'menu', name: 'Menu', component: Menu },
      { path: 'tabs', name: 'Tabs', component: Tabs },
      { path: 'popover', name: 'Popover', component: Popover },
      { path: 'bubble', name: 'Bubble', component: Bubble },
      { path: 'skeleton', name: 'Skeleton', component: Skeleton },
      { path: 'lazyImg', name: 'LazyImg', component: LazyImg },
      { path: 'squareImg', name: 'SquareImg', component: SquareImg },
      { path: 'spin', name: 'Spin', component: Spin },
      { path: 'loading', name: 'Loading', component: Loading },
      { path: 'toast', name: 'Toast', component: Toast },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const pageView = document.querySelector('.page-router-view');
  if (pageView) {
    pageView.scrollTo({ top: 0 });
  }
  next();
});

export default router;
