	<template>
		<div class="login">
			<div class="title">
				<div class="wrap_close" @click="back"><img src="../../assets/images/close.png" alt=""></div>
				<span class="register">注册</span>
			</div>
			<div class="wrap_login">
				<p class="phone">手机快捷登录</p>
				<p>未注册的手机号码将自动注册俏猫账号</p>
				<div class="send">
					<input type="text" placeholder="请输入手机号">
					<span>获取验证码</span>
				</div>
				<div class="send">
					<input type="text" placeholder="请输入验证码">
				</div>
				<input type="button" value="登录">
				<div class="tips">账号密码登录</div>
				<div class="login_foot">
					<p class="wrap_weixin"><img src="../../assets/images/weixin.png" alt="">微信登录</p>
					<p>“登录/注册”即代表同意&nbsp;&nbsp;《俏猫用户协议》</p>
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
		.login{
			width:100%;
			position:fixed;
			z-index:3;
			color:#666666;
			background:white;
			padding-bottom:125px;
		}
		.title{
			position:relative;
			padding:20px 20px;
		}
		.wrap_close{
			position:absolute;
		}
		.wrap_close>img{
			width:70%;
		}
		.register{
			position:absolute;
			top:20px;
			right:20px;
		}
		.wrap_login{
			padding:40px 30px;
			box-sizing:border-box;
		}
		.phone{
			color:black;
			font-size:1.6rem;
			font-weight:400;
			padding-bottom:20px;
		}
		.send{
			position:relative;
			border-bottom:1px solid #bfbfbf;
			margin:10px 0;
		}
		.send>input{
			width:60%;
			height:60px;
			outline:none;
			border:none;
		}
		.send>span{
			position:absolute;
			width:40%;
			height:60px;
			text-align:center;
			line-height:60px;
			color:#6f6f6f;
		}
		.wrap_login>input[type="button"]{
			width:100%;
			padding:15px;
			background:#e70034;
			color:white;
			outline:none;
			border:none;
			border-radius:5px;
			margin-top:25px;
		}
		.tips{
			text-align:center;
			margin-top:20px;
			padding-bottom:100px;
			font-size:0.8rem;
		}
		.login_foot{
			text-align:center;
			font-size:0.8rem;
			color:#999999;
		}
		.wrap_weixin{
			margin-bottom:20px;
		}
		.wrap_weixin>img{
			width:2.3rem;
			margin-right:15px;
			margin-bottom:-10px;
		}
	</style>