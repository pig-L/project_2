	<template>
		<div class="index">
			<v-header></v-header>
			<div class="hot_range">
				<p class="title">热卖排行</p>
				<div class="decr">
					<span>
						<div class="top"></div>
						<div class="bottom"></div>
					</span>
					这24小时大家都在买什么
					<span>
						<div class="top"></div>
						<div class="bottom"></div>
					</span>
				</div>
				<div class="wrap_list"> 
					<div class="list" v-for='v in msg'>
						<router-link to='/detail'>
								<div class="wrap_ig">
									<img :src="v.img" alt="">
									<div class="wrap_like">
										<img src="../../assets/images/aixin.png" alt="">
										<span>{{v.like}}</span>
									</div>
								</div>
								<p>{{v.title}}</p>
								<span class="sales">￥{{v.discount}}</span><span class="price">￥{{v.price}}</span>
						</router-link>
					</div>
				</div>
			</div>
			<v-dresser></v-dresser>
			<v-makeup></v-makeup>
			<v-eyes></v-eyes>
			<v-forever></v-forever>
			<p>——&nbsp;人家是有底线的&nbsp;——</p>
		</div>
	</template>
	<script>
		import vheader from './header.vue'
		import makeup from './makeup.vue'
		import eyes from './eyes.vue'
		import forever from './forever.vue'
		import dresser from './dresser.vue'
		export default {
			name: 'index',
		  data(){
		  	return {
		  		msg:''
		  	}
		  },
		  components: {
		    'v-header':vheader,
		    'v-makeup':makeup,
		    'v-eyes':eyes,
		    'v-forever':forever,
		    'v-dresser':dresser
		  },
		  mounted:function(){
			  	this.$axios.get('./src/assets/data/hot.json').then(response=>{
			  		this.msg=response.data.list;
			  	})
			  	.catch(error=>{
			  		console.log(error);
			  	})
		  }
		}
	</script>
	<style scoped>
		.index{
			background:#f5f5f5;
		}
		.index>p{
			text-align:center;
			color:#999999;
			font-size:0.9rem;
			padding-top:10px;
			padding-bottom:70px;
		}
		.hot_range{
			margin-top:20px;
			padding-top:40px;
			background:white;
			margin-bottom:20px;
		}
		.title{
			font-size:1.5rem;
			padding-bottom:10px;
		}
		.top{
				width: 24px;
				height: 2px;
				background: #999999;
				margin-top:2px;
			}
		.bottom{
			width: 12px;
			height: 2px;
			background: #999999;
			margin-top: 6px;
			margin-left: 12px;
		}
		.decr{
			color:#999999;
			font-size:0.8rem;
			margin-bottom:40px;
		}
		.hot_range{
			text-align: center;
		}
		.decr>span{
			display: inline-block;
		}
		.decr>span:last-child{
			left: 70%;
		}
		.decr>span:last-child .bottom{
			margin-left:0px;
			margin-right:12px;
		}
		.wrap_list{
			display:flex;
			width:100%;
			box-sizing:border-box;
			padding-bottom:10px;
		}
		.list{
			width:33.3%;
			text-align: center;
			font-size:0.5rem;
			padding:0 5px;
		}
		.wrap_ig{
			width:100%;
			position: relative;
			border-radius: 10px;
			overflow:hidden;
		}
		.wrap_ig>img{
			width: 100%;
			height:auto;
		}
		.list a{
			text-decoration:none;
			color:black;
		}
		.wrap_like{
			position: absolute;
			top: 10px;
			right: 10px;
			width: 50%;
			height: 25px;
			background: rgba(255,255,255,0.5);
			border-radius: 20px;
			text-align:center;
		}
		.wrap_like>span{
			display: inline-block;
			vertical-align: top;
			font-size:0.8rem;
			line-height:25px;
		}
		.wrap_like>img{
			margin-top: 5px;
			display: inline-block;
			vertical-align: top;
			width:1.2rem;
		}
		.list>a>p{
			padding:10px 10px;
		}
		.list>a>span{
			padding:10px 0;
		}
		.sales{
			color: #ec3c64;
			margin-right: 10px;
			font-weight: bold;
		}
		.price{
			color: #a5a5a5;
			text-decoration: line-through;
		}
	</style>