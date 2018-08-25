	<template>
		<div class="dresser_info">
			<div class="info_head">
				<img src="../../assets/images/info_head.png" alt="">
				<div class="iconfont iconfont-6 icon-iconfont6 back" @click="back"></div>
				<div class="pri_info">
					<img src="../../assets/images/img_3.jpg" alt="">
					<div class="info">
						<p>赖晓君</p>
						<span>专业</span>
					</div>
					<div class="renzheng"><img src="../../assets/images/rez.png" alt=""></div>
					<ul>
						<li>100%<p>好评率</p></li>
						<li>38.77%<p>接单率率</p></li>
						<li>7<p>关注数</p></li>
					</ul>
				</div>
				<div class="introduction">
					<p>店铺介绍</p>
					<ul>
						<li>从业【6年】</li>
						<li>简介<br>本人从事美睫工作5年，专注美睫，，有丰富的嫁接经验，擅长无感、舒适嫁接。</li>
					</ul>
				</div>
			</div>
		</div>
	</template>
	<script>
		export default {
			name: 'login',
			methods:{
				back(){
					this.$router.go(-1);
				}
			}
		}
	</script>
	<style scoped>
		.dresser_info{
			padding-bottom:155px;
			background:white;
			position:absolute;
			z-index:2;
		}
		.info_head{
			position:relative;
		}
		.info_head>img{
			width:100%;
		}
		.back{
			position:absolute;
			top:30px;
			left:20px;
			font-size:1.6rem;
			color:white;
			background:#878685;
			border-radius:50%;
			padding:10px;
		}
		.pri_info{
			position:absolute;
			top:155px;
			left:0;
			background:white;
			width:100%;
			display:flex;
			box-sizing:border-box;
			padding:20px;
			flex-wrap:wrap;
		}
		.pri_info>img{
			width:6rem;
			height:6rem;
			margin-right:10px;
		}
		.pri_info>ul{
			width:100%;
			list-style:none;
			overflow:hidden;
		}
		.pri_info>ul>li{
			width:33.3%;
			padding:20px 0;
			text-align:center;
			float:left;
		}
		.info>span{
			padding:5px;
			background:#e70034;
			margin-top:10px;
			display:inline-block;
		}
		.renzheng{
			position:absolute;
			right:20px;
			top:30px;
		}
		.renzheng>img{
			width:4rem;
		}
		.introduction{
			padding:20px;
			box-sizing:border-box;
			width:100%;
		}
		.introduction ul{
			margin-top:10px;
		}
		.introduction ul li{
			padding:10px 0;
		}
		.introduction p{
			font-size:1.4rem;
		}
	</style>