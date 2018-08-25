	<template>
		<footer>
			<ul>
			<li><router-link to="/index"><img src="../../assets/images/foot_1.png" alt=""><p>首页</p></router-link></li>
			<li><router-link to="/find"><img src="../../assets/images/foot_2.png" alt=""><p>发现</p></router-link></li>
			<li><router-link to="/login"><img src="../../assets/images/foot_3.png" alt=""><p>订单</p></router-link></li>
			<li><router-link to="/login"><img src="../../assets/images/foot_4.png" alt=""><p>我的</p></router-link></li>
			</ul>
		</footer>
	</template>
	<style scoped>
		footer{
			width:100%;
			background:#f7f7fa;
			border-top:1px solid #dfdee2;
			position:fixed;
			bottom:0;
			left:0;
			z-index:1;
		}
		ul{
			width:100%;
		}
		ul>li{
			float:left;
			width:25%;
			text-align:center;
			font-size:0.8rem;
		}
		ul>li img{
			width:30%;
		}
		ul>li>a{
			color:black;
			text-decoration:none;
		}
	</style>