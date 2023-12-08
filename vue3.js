let html = new Vue({	// 실시간 데이터를 바녕할 수 있습니다.
	el:"#box",
	data:{
		t1:"",
		t2:"",
		p:"숫자를 입력하세요",
		total:""
	},
	methods:{
		abc:function(){	// vue의 html 입력값은 기본이 문자열
			this.total = Number(this.t1) + Number(this.t2); // this => data함수를 지칭
		}
	}
});


let se = new Vue({
	el:"#box2",
	data:{
		no:"0123456",
		tt:"",
		pa:"보안코드를 입력해 주세요.",
		msg:""
	},
	methods:{
		aaa:function(){
			if(this.tt == ""){
				alert("보안코드를 입력하세요.");
			}
			else if(this.no == this.tt){
				this.msg = "보안코드를 확인하였습니다";
			}
			else{
				this.msg = "해당 보안코드가 잘못되었습니다.";
			}
		}
	}
})