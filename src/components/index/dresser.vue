	<template>
		<div class="dresser">
			<div class="list_more">
				<p class="head"><span>HOT</span>人气美业师</p>
				<router-link to='/dresser'><div class="more">More&gt;</div></router-link>
			</div>
			<div class="wrap_list"> 
					<div class="list" v-for='(v,i) in msg' v-if='i<2'>
						<router-link to='/dresser_info'>
								<div class="wrap_ig">
									<img :src="v.pre_img" alt="">
								</div>
								<div class="wrap_p">
									<p>{{v.name}}</p>
									<p>{{v.type}}</p>
								</div>
								<span>{{v.level}}<div></div></span>
						</router-link>
					</div>
			</div>
		</div>
	</template>
	<script>
		export default {
			name: 'dresser',
			  data(){
			  	return {
			  		msg:''
			  	}
			  },
			  mounted:function(){
				  	this.$axios.get('./src/assets/data/dresser.json').then(response=>{
				  		this.msg=response.data.member;
				  	})
				  	.catch(error=>{
				  		console.log(error);
				  	})
			  }
		}
	</script>
	<style scoped>
		.dresser{
			margin-top:20px;
			background:white;
			padding-bottom: 10px;
		}
		.list_more{
			padding:20px;
			position:relative;
		}
		.more{
			position:absolute;
			top:20px;
			right:20px;
			color:#8c8c8c;
			font-size:1.0rem;
			font-weight:400;
		}
		.wrap_list{
			display:flex;
			width:100%;
			box-sizing:border-box;
			padding-bottom:10px;
		}
		.list{
			width:50%;
			font-size:0.5rem;
			padding:0 10px;
		}
		.list a{
			display:flex;
			position: relative;
		}
		.wrap_ig{
			width:37%;
			border-radius: 50%;
			overflow:hidden;	
		}
		.list .wrap_p{
			padding-top:15px;
		}
		.wrap_p p{
			width:100%;
			padding-left:10px;
		}
		.wrap_p p:first-child{
			font-size:1.2rem;
		}
		.wrap_p p:last-child{
			color:#666666;
			font-size:0.8rem;
			padding-top:5px;
		}
		.wrap_ig>img{
			width: 100%;
			height:auto;
		}
		.list a>span{
			position:absolute;
			bottom: -10px;
    		left: 10%;
			background:#e70034;
			color:white;
			padding:2px 1px;
			padding-right:5%;
		}
		.list a>span>div{
			width:7px;
			height:6px;
			background:white;
			border:7px solid #e70034;
			border-radius:50%;
			position:absolute;
			top:0px;
			right:-10px;
		}
		.list a{
			text-decoration:none;
			color:black;
		}
	</style>