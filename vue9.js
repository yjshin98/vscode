let html = new Vue({
	el:"#box",
	data:{
		view:1,
		banner_no:0,	// 배너 배열번호
	},
	methods:{
		banner_movie:function(z){	// 이전, 다음 버튼에 대한 핸들링 메소드
			if(z == "right"){	// 다음				
				this.banner_no++;
				if(this.banner_no > 2){	// + 값 중 마지막 배너일 경우 처음 배너 번호 호출
					this.banner_no = 0;
				}
			}
			else{	// 이전
				this.banner_no--;
				if(this.banner_no < 0){	// - 값일 경우 맨 마지막 배너를 호출
					this.banner_no = 2;
				}
			}
		}
	}
});