import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/count', component: '@/pages/count/index', exact: true },
    { path: '/global', component: '@/pages/global/index', exact: true },
  ],
  fastRefresh: {},
});
