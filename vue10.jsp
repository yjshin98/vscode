<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue 응용편</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.15"></script>
</head>
<body>
<section id="box">
	가격 : <input type="text" v-model="price"><br>
	수량 : <input type="text" v-model="ea"><br>
	<input type="button" value="합계확인" v-on:click="sum"><br>
	<span v-if="aa==1">총 합계 금액은 : {{total}} 원</span>
</section>
</body>
<script src="./vue10.js?v=3"></script>
</html>