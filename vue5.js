var a = new Vue({
	el:"#box",
	data:{
		cp:""	// radio 선택값
	},
	methods:{
		abc:function(z){
			z.preventDefault();	// return false 동일
			if(this.cp == ""){
				alert("쿠폰을 선택해 주세요")
			}
			else{
				// return false, return ture(X)
				f.submit();
			}
		}
	}
});

var b = new Vue({
	el:"#box2",
	data:{
		search:""
	},
	methods:{
		gopage:function(a){
			a.preventDefault();
			if(this.search == ""){
				alert("검색할 상품명을 입력해 주세요")
				sh.search1.focus();	// 2.5 이상 정상작동
				// this.$refs.search.focus();
			}
			else{
				sh.submit();
			}
		}
	}
});