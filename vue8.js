let code = new Vue({
	el:"#box",
	data:{
		user:a,	// js에서 넘어온 back-end변수값을 Vue 가상변수에 적용,
		money:point,
		texts:"[45인치] UHD 모니터",
		htmls:"<ul><li>공지사항1</li><li>공지사항2</li></ul>",
		lists:""
	},
	methods:{
		ok:function(){
			var w=0;
			while(w < 5){
				this.lists += "<li>게시물"+w+"</li>";
				w++;
			}
		}
	}
});