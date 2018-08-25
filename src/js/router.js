import VueRouter from 'vue-router'

import service from '../components/service/service.vue'
import index from '../components/index/index.vue'
import find from '../components/find/find.vue'
import login from '../components/login/login.vue'
import detail from '../components/detail/detail.vue'
import beauty from '../components/service/beauty.vue'
import train from '../components/service/train.vue'
import dresser_list from '../components/dresser/dresser_list.vue'
import dresser_info from '../components/dresser/dresser_info.vue'
import list from '../components/dresser/list.vue'
import list_2 from '../components/dresser/list_2.vue'
export default new VueRouter({
	routes:[
		{path:'/service/:type',component:service},
		{path:'/beauty',component:beauty},
		{path:'/train',component:train},
		{path:'/index',component:index},
		{path:'/find',component:find},
		{path:'/login',component:login},
		{path:'/detail',component:detail},
		{
			path:'/dresser',
			component:dresser_list,
			children:[
				{
					path:'/list',
					component:list
				},
				{
					path:'/list_2',
					component:list_2
				},
				{
					path:'/',
					redirect:'/list'
				}
			]
		},
		{path:'/dresser_info',component:dresser_info},
		{path:'/',redirect:'/index'}
	]
})