	<template>
		<div class="find" v-cloak>
			<div class="head">发现</div>
			<div class="h_img">
				<img src="../../assets/images/h_img_1.jpg" alt=""><img src="../../assets/images/h_img_2.jpg" alt="">
			</div>
			<div class="intro"><span></span><p>她们都在晒</p></div>
			<div class="comment_list" v-for="(v,i) in msg" v-if="v.comment.length>0">
				<div class="wrap_head">
					<img src="../../assets/images/head.png" alt="">
				</div>
				<div class="wrap_comment">
					<p>{{v.comment[0].name}}</p>
					<p>{{v.comment[0].content}}</p>
					<router-link to="/detail">
						<div class="wrap_service">
							<img :src="v.img[0]" alt="">
							<span>{{v.title}}</span>
						</div>
					</router-link>
					<div class="give_like">
						<span>{{v.comment[0].time}}</span>
						<span class="iconfont icon-dianzan"><span>0</span></span>
					</div>
					<div class="send_comment">
						<span class="iconfont icon-pinglun1"></span>
						<input type="text" placeholder="我有话要说">
					</div>
				</div>
			</div>
			<div class="comment_list" v-for="(v,i) in message" v-if="v.comment.length>0">
				<div class="wrap_head">
					<img src="../../assets/images/head.png" alt="">
				</div>
				<div class="wrap_comment">
					<p>{{v.comment[0].name}}</p>
					<p>{{v.comment[0].content}}</p>
					<router-link to="/detail">
						<div class="wrap_service">
							<img :src="v.img[0]" alt="">
							<span>{{v.title}}</span>
						</div>
					</router-link>
					<div class="give_like">
						<span>{{v.comment[0].time}}</span>
						<span class="iconfont icon-dianzan"><span>0</span></span>
					</div>
					<div class="send_comment">
						<span class="iconfont icon-pinglun1"></span>
						<input type="text" placeholder="我有话要说">
					</div>
				</div>
			</div>
		</div>
	</template>
	<script>
		export default {
			name: 'find',
			  data(){
			  	return {
			  		msg:'',
			  		message:''
			  	}
			  },
			  mounted:function(){
				  	this.$axios.get('./src/assets/data/makeup.json').then(response=>{
				  		this.msg=response.data.demo;
				  	})
				  	.catch(error=>{
				  		console.log(error);
				  	});
				  	this.$axios.get('./src/assets/data/eyes.json').then(response=>{
				  		this.message=response.data.demo;
				  	})
				  	.catch(error=>{
				  		console.log(error);
				  	})
			  }
		}
	</script>
	<style scoped>
		[v-cloak] {
		    display: none;
		}
		.find{
			padding-bottom:40px;
		}
		.head{
			font-size:1.6rem;
			padding:10px 0;
			text-align:center;
			border-bottom:1px solid #dedede;
			color:#232323;
		}
		.h_img{
			box-sizing:border-box;
			padding:10px 20px;
			width:100%;
		}
		.h_img>img{
			display:inline-block;
			width:50%;
		}
		.intro{
			padding-left:20px;
		}
		.intro>p{
			padding-left:10px;
			display: inline-block;
			vertical-align: top;
		}
		.intro>span{
			width:5px;
			height:20px;
			background:#e70034;
			display: inline-block;
			vertical-align: top;
		}
		.comment_list{
			width:100%;
			display:flex;
			padding:20px;
			box-sizing:border-box;
			border-bottom:1px solid #dedede;
		}
		.wrap_comment{
			flex-grow:1;
			font-size:1.0rem;
		}
		.wrap_comment a{
			color:black;
		}
		.wrap_comment>p:first-child{
			padding:10px;
		}
		.wrap_comment>p:nth-of-type(2){
			padding:10px 0 20px 10px;
		}
		.give_like{
			color:#bbbbbb;
			position:relative;
		}
		.give_like>span{
			display:inline-block;
			padding:20px 0;
		}
		.iconfont.icon-dianzan{
			position:absolute;
			top:0px;
			right:0px;
			font-size:1.4rem;
		}
		.iconfont.icon-dianzan>span{
			font-size:1.0rem;
			padding-left:10px;
		}
		.wrap_head>img{
			width:90%;
		}
		.wrap_service>img{
			width:20%;
			height:auto;
		}
		.wrap_service{
			background:#eeeeee;
			padding:5px;
			border-radius:5px;
		}
		.wrap_service>span{
			display:inline-block;
			vertical-align:top;
			margin-top:20px;
		}
		.send_comment{
			display:flex;
			border:1px solid #bbbbbb;
		}
		.send_comment>span{
			font-size:2.3rem;
			color:#bbbbbb;
			padding:0 10px;
		}
		.send_comment>input{
			outline:none;
			border:none;
			padding-bottom:30px;
			padding-top:5px;
		}
	</style>