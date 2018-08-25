	<template>
		<div class="list">
			<div class="wrap_list">
				<div v-for="v in msg">
					<router-link to="/dresser_info">
						<div class="list_item">
							<div class="wr_img">
								<img :src="v.pre_img" alt="">
							</div>
							<p>{{v.name}}</p>
							<span>{{v.level}}<div></div></span>
						</div>
					</router-link>
				</div>
			</div>
			<h1>{{this.$route.params.choice}}</h1>
		</div>
	</template>
	<script>
		export default({
	 		name: 'list',
	 		data(){
	 			return{
	 			 msg:''
	 			}
	 		},
		 	 mounted:function(){
		 	 			var url='./src/assets/data/dresser.json';
			 			this.$axios.get(url).then(response=>{
					  		this.msg=response.data.member;
					  	})
					  	.catch(error=>{
					  		console.log(error);
					  	})
			 	}
		})
	</script>
	<style scoped>
		.list{
			padding-bottom:80px;
			box-sizing:border-box;
		}
		.wrap_list{
			display:flex;
			width:100%;
			box-sizing:border-box;
			flex-wrap:wrap;
		}
		.wrap_list>div{
			width:50%;
			box-sizing:border-box;
			padding:0 20px;
			display:inline-block;
			text-decoration:none;
			color:black;
		}
		.wr_img{
			border-radius:50%;
			overflow:hidden;
		}
		.wr_img>img{
			width:100%;
			height:auto;
			margin:0;
			padding:0;
		}
		.list_item{
			padding:0 20px;
			text-align:center;
			margin-top:20px;
			box-sizing:border-box;
		}
		.list_item>p{
			overflow:hidden;
		    text-overflow:ellipsis;
		    white-space:nowrap
		}
		.list_item>span{
			position:relative;
			background:#e70034;
			color:white;
			padding:2px 1px;
			padding-right:5%;
			display:inline-block;
			margin-top:10px;
		}
		.list_item>span>div{
		    width: 10px;
			height: 10px;
			background: white;
			border: 8px solid #e70034;
			border-radius: 50%;
			position: absolute;
			top: 0px;
			right: -17px;
		}
	</style>