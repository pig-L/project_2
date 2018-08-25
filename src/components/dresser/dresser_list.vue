	<template>
		<div class="dresser_list">
			<div class="wrap_header">
				<div class="dr_title">
					<span class="iconfont icon-fanhui" @click="back"></span>
					<div class="dr_search"><img src="../../assets/images/search.png" alt=""><input type="text" placeholder="请输入要搜索的关键字"></div>
				</div>
				<ul>
				<li class="current"><router-link to="/list"><span>人气最高</span></router-link></li>
				<li><router-link to="/list_2"><span>新店开张</span></router-link></li>
				</ul>
			</div>
			<router-view></router-view>
		</div>
	</template>
	<script>
		export default({
		  name: 'dresser_list',
		  methods:{
				back(){
					this.$router.go(-1);
				}
			},
			mounted:function(){
				$(".wrap_header>ul>li").on("click",function(){
					$(this).addClass('current').siblings('li').removeClass('current');
				});
			}
		})
	</script>
	<style scoped>
		.dr_title{
			width:100%;
			font-size:1.3rem;
			position:fixed;
			z-index:1;
			background:white;
			display:flex;
			padding:10px 20px;
			box-sizing:border-box;
		}
		.dr_title>span{
			font-size:1.8rem;
			margin-right:10px;
		}
		.dr_search{
			flex-grow:1;
			background:#eeeeee;
			border-radius:5px;
		}
		.wrap_header{
			height:113px;
			width:100%;
		}
		.dr_search>input{
			border:none;
			outline:none;
			background:#eeeeee;
			display: inline-block;
			vertical-align: top;
			margin-top:7px;
			font-size:14px;
		}
		.dr_search>img{
			width:1.2rem;
			margin:7px 5px 0px 10px;
			display: inline-block;
			vertical-align: top;
		}
		.wrap_header>ul{
			width:100%;
			list-style:none;
			overflow:hidden;
			position:fixed;
			margin-top:52px;
			border-bottom:1px solid #eeeeee;
			background:white;
			z-index:1;
		}
		.wrap_header a{
			text-decoration:none;
			color:black;
		}
		.wrap_header>ul>li{
			width:50%;
			float:left;
			text-align:center;
			padding:20px 0;
		}
		li.current a{
			color:#e70034;
		}
		.wrap_header>ul span{
			position:relative;
			padding:20px 10px;
		}
		li.current span::before{
			content:"";
			position: absolute;
			bottom: 2px;
			left: 0;
			width: 100%;
			height: 4px;
			background: #e70034;
		}
	</style>