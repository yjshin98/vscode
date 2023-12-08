let html = new Vue({
	el:"#box",
	data:{
		price:"",
		ea:"",
		total:"",
		aa:"0"
	},
	methods:{
		sum:function(){
			this.total = Number(this.price*this.ea).toLocaleString();
			if(this.total > 0 || this.total != ""){
				this.aa = 1;
			}
			else{
				this.aa = 0;
			}
		}
	}
});