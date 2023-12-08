<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue - 반복문 : v-for(for in)</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.15"></script>
</head>
<!-- body 태그에 Vue 컨테이너 생성 불가 -->
<body>
<aside id="box">
<!-- v-for : 배열이 기본(키배열, 배열) -->
	<ul>
		<!-- v-for는 vue 전용 반복문 출력 (for in) 기본 사항 -->
		<!-- lists - 배열이름 a - 배열 데이터값 -->
		<li v-for="a in lists">{{a}}</li>
	</ul>
	
	<ol>
		<!-- key 배열 키이름을 입력하여 출력하는 형태, index : 배열번호 -->
		<li v-for="b,index in person">{{b.names}}님 나이는 {{b.age}}세 입니다. {{index}}</li>
	</ol>
	
	<dl>
		<dt>응시자 시험 합격 현황</dt>
		<!-- c : 데이터값 | d : 키값 | e : 배열번호 -->
		<dd v-for="c,d,e in pass">{{c}}</dd>
	</dl>
	
	<!-- 배열값 없이 사용시 숫자 1부터 시작 -->
	<ul>
		<li v-for="aa,bb in fileno"><input type="file">{{bb}}</li>
	</ul>
</aside>
</body>
<script src="./vue11.js?v=2"></script>
</html>