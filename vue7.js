let html = new Vue({
	el:"#box",
	data:{	// methods 이름과 동일한 이름 사용 금지
		b:"button",
		numbers:0,
		btn1:"+",
		btn2:"-"
	},
	methods:{	// data의 이름과 동일한 이름을 사용금지
		btn_numbers:function(z){
			if(z == "+"){	// 이벤트 핸들링
				this.numbers++;	// 1식 증가
			}
			else{			
				if(this.numbers > 0){	// 0보다 클 때 
					this.numbers--;	// 1씩 감소
				}
				
			}
		}
	}
});


let html2 = new Vue({
	el:"#box2",
	data:{
		s:"",
		ea:"",
		total_number:0
	},
	methods:{
		product:function(){
			this.total_number = (Number(this.s)*Number(this.ea)).toLocaleString();
		}
	}
});