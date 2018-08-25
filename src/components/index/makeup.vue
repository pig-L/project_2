	<template>
		<div class="makeup">
			<div class="list_more">
				<p class="head">化妆</p>
				<p>看脸时代，颜值UP</p>
				<router-link :to="'/service/'+'化妆'"><div class="more">More&gt;</div></router-link>
			</div>
			<div class="wrap_list"> 
					<div class="list" v-for='(v,i) in msg' v-if='i<3'>
						<router-link to='/detail'>
								<div class="wrap_ig">
									<img :src="v.img[0]" alt="">
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
	</template>
	<script>
		export default {
			name: 'makeup',
			  data(){
			  	return {
			  		msg:''
			  	}
			  },
			  mounted:function(){
				  	this.$axios.get('./src/assets/data/makeup.json').then(response=>{
				  		this.msg=response.data.demo;
				  	})
				  	.catch(error=>{
				  		console.log(error);
				  	})
			  }
		}
	</script>
	<style scoped>
		.makeup{
			margin-top:20px;
			background:white;
		}
		.list_more{
			padding:20px;
			position:relative;
		}
		.more{
			position:absolute;
			top:30px;
			right:20px;
			color:#8c8c8c;
			font-size:1.0rem;
			font-weight:400;
		}
		.list_more>p:nth-of-type(2){
			color:#666666;
			font-size:0.8rem;
			padding:5px 0 0 10px;
		}
		.list_more .head{
			font-size:1.2rem;
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