<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue raido 활용법 및 submit 활용법</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.15"></script>
</head>
<body>
<!-- 
	v-model을 사용시 checked 속성이 적용되지 않음 | Vue에서 data 가상 변수값에 동일한 value를 적용하면 자동으로 checked 됨(=checked)
 -->
 
<section id="box">
<!-- submit 사용시 vue 컨테이너 안에 form을 선언 해야만 정상 작동함 -->
	 <form id="f" method="get" action="./vue5.jsp" v-on:submit="abc">
		<input type="radio" name="coupon" value="신규" v-model="cp">신규가입쿠폰<br>
		<input type="radio" name="coupon" value="10" v-model="cp">10%할인 쿠폰<br>
		<input type="radio" name="coupon" value="3000" v-model="cp">택배비 무료 쿠폰<br>
		<input type="submit" value="쿠폰적용">
	</form>
</section>

<br><br>

<!-- 상품검색 응용편 -->
<section id="box2">
	<form id="sh" method="get" action="./vue5.jsp" v-on:submit="gopage">
		상품검색 : <input type="text" name="search1" v-model="search">	<!-- 2.2이하 버전 사용시 ref="search" 선언 후 focus 설정 -->
		<button>검색</button>
	</form>
</section>
</body>
<script src="./vue5.js?v=1"></script>
</html>