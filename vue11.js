let html = new Vue({
	el:"#box",
	data:{
		lists:["홍길동","이순신","강감찬"],	// 원시배열 형태
		person:[
			{names:"홍길동",age:"29"},
			{names:"강감찬",age:"50"},
			{names:"이순신",age:"26"},
		],
		pass:{	// 기본키 배열
			username:"조경훈",
			usertest:"정보처리기사 실기시험",
			userscore:"98점 합격"
		},
		fileno:3
	},
	methods:{
		
	}
});