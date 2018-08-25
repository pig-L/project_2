	<template>
		<div class="detail">
			<div class="detail_head">
				<div class="dr_title">
					<span class="iconfont iconfont-6 icon-iconfont6" @click="back"></span>
					<ul>
						<li class="current"><span>商品</span></li>
						<li><span>评价</span></li>
						<li><span>详情</span></li>
					</ul>
				</div>
			</div>
			<mt-swipe :show-indicators="false">
				<mt-swipe-item><img src="../../assets/images/img_1.jpg" alt=""></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/images/img_1_1.jpg" alt=""></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/images/img_1_2.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
			<div class="detail_info">
				<p>精致清新氧气生活妆</p>
				<div class="detail_price">
					<span class="de_sales">￥178</span>
					<span class="de_price">￥308</span>
					<span class="de_like">551人喜欢</span>
				</div>
			</div>
			<div class="detail_service">
				<span><img src="../../assets/images/zan.png" alt="">优质服务</span>
				<span><img src="../../assets/images/qian.png" alt="">迟到补偿</span>
				<span><img src="../../assets/images/shan.png" alt="">急速退款</span>
			</div>
			<div class="service_time">
				<span class="iconfont icon-shijian"></span>
				服务时长 【90分钟】
			</div>
			<div class="service_type">
				<span class="iconfont icon-fuwu"></span>
				服务方式 【上门服务】
			</div>
			<div class="comment_list">
				<p class="com_title">评价晒单 （43）</p>
				<div class="comment">
					<img src="../../assets/images/head.png" alt="">
					<div class="com_info">
						<p>137*****390</p>
						<p>2018-06-24</p>
						<div class="star">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
						</div>
					</div>
					<p class="com">非常满意，辛苦化妆师了。</p>
				</div>
				<div class="comment">
					<img src="../../assets/images/head.png" alt="">
					<div class="com_info">
						<p>137*****390</p>
						<p>2018-06-24</p>
						<div class="star">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
						</div>
					</div>
					<p class="com">非常满意，辛苦化妆师了。</p>
				</div>
				<div class="comment">
					<img src="../../assets/images/head.png" alt="">
					<div class="com_info">
						<p>137*****390</p>
						<p>2018-06-24</p>
						<div class="star">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
							<img src="../../assets/images/star.png" alt="">
						</div>
					</div>
					<p class="com">非常满意，辛苦化妆师了。</p>
				</div>
				<span class="more">查看更多</span>
			</div>
			<div  class="de_warn">
				<div class="wa_title">订购须知</div>
				1.俏猫在您下单后30分钟内确认接单;<br>
				2.订单确认后，修改订单或退款需提前2小时通知;<br>
				3.服务时间前2小时内申请退款将按30-100元/人扣取误工费;<br>
				4.正常服务时间为：9:00-21:00，非正常服务时间需要为美业师额外支付30-100元交通费用（按照路程而定）;
			</div>
			<div class="detail_img">
				<div class="img_title">图文详情</div>
				<img src="../../assets/images/desc_img_1.jpg" alt="">
				<img src="../../assets/images/desc_img_2.jpg" alt="">
				<img src="../../assets/images/desc_img_3.jpg" alt="">
				<img src="../../assets/images/desc_img_4.jpg" alt="">
				<img src="../../assets/images/com_1.jpg" alt="">
				<img src="../../assets/images/com_2.jpg" alt="">
				<img src="../../assets/images/com_3.jpg" alt="">
			</div>
		</div>
	</template>
	<script>
		export default({
		  name: 'detail',
		  methods:{
				back(){
					this.$router.go(-1);
				}
			},
			mounted:function(){
				$(".dr_title>ul>li").on("click",function(){
					$(this).addClass('current').siblings('li').removeClass('current');
				});
			}
		})
	</script>
	<style scoped>
		.detail{
			width:100%;
			box-sizing:border-box;
			position:absolute;
			background:#f3f3f3;
			z-index:2;
		}
		.detail_head{
			width:100%;
			height:48px;
		}
		.dr_title{
			width:100%;
			font-size:1.3rem;
			position:fixed;
			z-index:1;
			background:white;
			display:flex;
			padding:10px 20px 0;
			box-sizing:border-box;
			border-bottom:2px solid #c4c4c4;
		}
		.dr_title>span{
			font-size:1.6rem;
			margin-right:10px;
		}
		.dr_title>ul{
			overflow:hidden;
			margin-left:20px;
			padding-bottom:15px;
		}
		.dr_title>ul>li{
			float:left;
			text-align:center;
			font-size:1.0rem;
		}
		li.current{
			color:#e70034;
		}
		.dr_title>ul span{
			position:relative;
			padding:10px 20px;
			padding-bottom:15px;
		}
		li.current span::before{
			content:"";
			position: absolute;
			bottom: 2px;
			left: 0;
			width: 100%;
			height: 3px;
			background: #e70034;
		}
		.mint-swipe{
			height:402px;
		}
		.mint-swipe-item>img{
			height:100%;
		}
		.detail_info{
			position:relative;
			box-sizing:border-box;
			padding:30px 20px;
			border-bottom:1px dotted #a2a2a2;
			background:white;
		}
		.detail_info>p{
			font-size:1.1rem;
		}
		.detail_price{
			margin-top:10px;
		}
		.de_sales{
			color:#e9646b;
			font-size:1.1rem;
			margin-right:10px;
		}
		.de_price{
			color:#a2a2a2;
			font-size:0.8rem;
			text-decoration: line-through;
		}
		.de_like{
			position:absolute;
			right:20px;
			top:60px;
			color:#a2a2a2;
			font-size:0.9rem;
			color:#a2a2a2;
		}
		.detail_service{
			font-size:0.8rem;
			background:white;
		}
		.detail_service>span{
			display:inline-block;
			padding: 10px 15px;
		}
		.detail_service>span>img{
			width:1.2rem;
		}
		.service_time{
			background:white;
			padding:15px 20px;
			margin-top:10px;
			border-bottom:1px solid #e2e2e2;
		}
		.service_type{
			background:white;
			padding:15px 20px;
			border-bottom:1px solid #e2e2e2;
		}
		.comment_list{
			margin-top:20px;
			background:white;
		}
		.com_title{
			padding:10px 20px;
		}
		.comment{
			box-sizing:border-box;
			padding:20px;
			display:flex;
			flex-wrap:wrap;
		}
		.comment>img{
			width:2.3rem;
			height:2.3rem;
		}
		.com_info{
			flex-grow:1;
			position:relative;
		}
		.com_info>p{
			padding-left:10px;
			font-size:0.9rem;
		}
		.com_info>p:nth-of-type(2){
			color:#9c9c99;
			padding:10px;
		}
		.star{
			position:absolute;
			top:10px;
			right:0;
		}
		.star>img{
			width:0.8rem;
		}
		.com{
			width:100%;
			font-size:0.9rem;
		}
		.more{
			border-radius:5px;
			padding:10px 50px;
			text-algin:center;
			width:20%;
			display:block;
			border:1px solid black;
			font-size:0.8rem;
			margin:0 auto;
		}
		.de_warn{
			padding-left:20px;
			color: #666666;
			font-size:0.8rem;
			line-height:28px;
			background:white;
			margin-top:20px;
		}
		.wa_title{
			color:black;
			padding:10px 0;
			border-bottom:1px solid #e2e2e2;
			margin-bottom:10px;
		}
		.detail_img{
			background:white;
			margin-top:20px;
		}
		.img_title{
			padding:40px 0 20px;
			text-align:center;
		}
		.detail_img>img{
			width:100%;                                                  
		}
	</style>