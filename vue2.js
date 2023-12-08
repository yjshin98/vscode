let a = new Vue({	// vue 영역을 할당
	el:"#box",
	data:{	// v-bind(속성), v-model(=value) 형태로 처리하는 position (함수만사용 X) 가상변수만 O
		test:"hong",
		c:"div_box",
		p:"아이디를 입력하세요"
	},
	methods:{	// 여러 가상의 함수 집합공간 함수만 O | 가상변수 생성(X)	
		abc:function(){
			alert("전송 하였습니다.");
		},
		bbb:function(z){
			console.log(z.target.value)
		}
	}
});