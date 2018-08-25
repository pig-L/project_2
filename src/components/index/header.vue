	<template>
		<header>
			<nav>
				<div class="nav_left"><span>广州市</span><img src="../../assets/images/down.png" alt=""></div>
				<div class="nav_middle"><img src="../../assets/images/search.png" alt=""><input type="text" placeholder="魅力社交妆"></div>
				<div class="nav_right"><img src="../../assets/images/index_6.png" alt=""></div>
			</nav>
			<div class="wrap_bg"><img src="../../assets/images/bg.jpg" alt=""></div>
			<div class="nav_list">
			<ul>
				<router-link :to="'/service/'+'化妆'"><li><img src="../../assets/images/index_1.png" alt=""><p>化妆</p></li></router-link>
				<router-link :to="'/service/'+'美瞳'"><li><img src="../../assets/images/index_2.png" alt=""><p>美瞳</p></li></router-link>
				<router-link  :to="'/service/'+'半永久'"><li><img src="../../assets/images/index_3.png" alt=""><p>半永久</p></li></router-link>
				<router-link to="/beauty"><li><img src="../../assets/images/index_4.png" alt=""><p>医美</p></li></router-link>
				<router-link to="/train"><li><img src="../../assets/images/index_5.png" alt=""><p>培训</p></li></router-link>
			</ul>
			</div>
		</header>
	</template>
	<script>
		export default({
		  name: 'vheader'
		})
	</script>
	<style scoped>
		header{
			background:white;
		}
		nav{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			display:flex;
			height:54px;
			z-index:1;
			background:white;
		}
		.nav_left{
			font-size:0.9rem;
			padding:0px 10px;
			line-height:54px;
		}
		.nav_middle{
			flex-grow:1;
			margin-top:10px;
			background:#eeeeee;
			border-radius:5px;
			margin-bottom:10px;
			position:relative;
		}
		.nav_middle>input{
			border:none;
			outline:none;
			background:#eeeeee;
			position:absolute;
			top:7px;
			left:38px;
			font-size:14px;
		}
		.nav_middle>img{
			width:1.2rem;
			margin:7px 5px 0px 10px;
			display: inline-block;
			vertical-align: top;
		}
		.nav_right{
			padding:10px;
		}
		.nav_left>span{
			padding:20px 0px;
		}
		.nav_left>img{
			width:0.8rem;
			margin-left:10px;
		}
		.nav_right>img{
			width:1.8rem;
		}
		.wrap_bg{
			margin-top:54px;
			width:100%;
		}
		.wrap_bg>img{
			width:100%;
			margin-bottom:80px;
		}
		.nav_list>ul{
			overflow:hidden;
			width:100%;
			padding-bottom:10px;
		}
		.nav_list>ul li{
			float:left;
			width:20%;
			text-align:center;
		}
		.nav_list a{
			text-decoration:none;
			color:black;
			font-size:0.6rem;
			line-height:20px;
		}
		.nav_list img{
			width:2.2rem;
		}
	</style>