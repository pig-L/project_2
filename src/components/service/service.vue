	<template>
		<div class="service">
			<div class="wrap_head">
				<div class="title"><span class="iconfont iconfont-6 icon-iconfont6" @click="back"></span>{{this.$route.params.type}}</div>
				<ul class="service_nav">
					<li>综合排序<span class="iconfont icon-xiala-"></span></li>
					<li>分类<span class="iconfont icon-xiala-"></span></li>
					<li>价格<span class="iconfont icon-xiala-"></span></li>
					<li>筛选<span class="iconfont icon-shaixuan"></span></li>
				</ul>
			</div>
			<div class="wrap_service">
				<div class="service_item" v-for="v in msg">
					<div class="service_img">
					<img :src="v.img[0]" alt="">
					</div>
					<p class="se_title">{{v.title}}</p>
					<div class="se_info">
						<span class="sales">￥{{v.discount}}</span>
						<span class="price">￥{{v.price}}</span>
						<span class="like"><img src="../../assets/images/aixin.png" alt="">{{v.like}}</span>
					</div>
					<div class="copy_right">
						<img src="../../assets/images/cp_rg.png" alt="">
						<span>俏猫</span>
					</div>
				</div>
			</div>
		</div>
	</template>
	<script>
		export default {
			name: 'service',
			  data(){
			  	return {
			  		msg:''
			  	}
			  },
			methods:{
				back(){
					this.$router.go(-1);
				}
			},
			 mounted:function(){
			 		if(this.$route.params.type=='化妆'){
			 			var url='./src/assets/data/makeup.json';
			 		}
			 		else if(this.$route.params.type=='美瞳'){
			 			var url='./src/assets/data/eyes.json';
			 		}
			 		else if(this.$route.params.type=='半永久'){
			 			var url='./src/assets/data/forever.json';
			 		}
				  	this.$axios.get(url).then(response=>{
				  		this.msg=response.data.demo;
				  	})
				  	.catch(error=>{
				  		console.log(error);
				  	})
			  }
		}
	</script>
	<style scoped>
		.service{
			padding-bottom:80px;
			background:white;
			position:absolute;
			z-index:2;
		}
		.wrap_head{
			width:100%;
			height:108px;
		}
		.title{
			border-bottom:1px solid #f1f1f1;
			width:100%;
			padding:10px 0;
			font-size:1.3rem;
			position:fixed;
			z-index:1;
			background:white;
			text-align:center;
		}
		.title>span{
			position:absolute;
			top:10px;
			left:20px;
			font-size:1.8rem;
		}
		.service_nav{
			width:100%;
			list-style:none;
			overflow:hidden;
			position:fixed;
			z-index:1;
			background:white;
			margin-top:48px;
		}
		.service_nav li{
			float:left;
			width:25%;
			padding:20px 0;
			text-align:center;
			border-bottom:1px solid #f1f1f1;
			font-size:0.9rem;
			color:#666666;
		}
		.service_nav li>span{
			margin-left:5px;
		}
		.wrap_service{
			display: flex;
			flex-wrap: wrap;
			width: 100%;
		}
		.service_item{
			width:50%;
			box-sizing:border-box;
			padding:0 10px;
			margin-top:40px;
			border-bottom:1px solid #f1f1f1;
		}
		.service_img{
			border-radius:5px;
			overflow:hidden;
		}
		.service_img>img{
			width:100%;
		}
		.se_title{
			padding:10px 0 20px;
		}
		.se_info{
			color:#9c9c9c;
		}
		.sales{
			color:#e65058;
			font-weight:bold;
		}
		.price{
			text-decoration: line-through;
		}
		.like>img{
			width:0.8rem;
			margin-right:5px;
			margin-left:10px;
		}
		.copy_right{
			margin-top:10px;
			margin-bottom:20px;
		}
		.copy_right>span{
			display: inline-block;
			vertical-align: top;
			margin-top:10px;
		}
		.copy_right>img{
			width:20%;
			display: inline-block;
			vertical-align: top;
		}
	</style>
