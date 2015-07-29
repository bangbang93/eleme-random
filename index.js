// 饿了么随机餐厅
// version 0.1 BETA!
// 2015-07-29
// Copyright (c) 2015, bangbang93
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          饿了么随机餐厅
// @namespace     https://blog.bangbang93.com
// @description   今天三餐吃什么
// @include       http://ele.me/*
// @grant none
// ==/UserScript==

var randomRest = function (){
	var rests = document.querySelectorAll('.rstblock');
	var i = Math.round(Math.random() * rests.length + 1);
	window.open(rests[i].href);
}

var button = document.createElement('button');
button.style.position = 'absolute';
button.style.float = 'left';
button.style.top = 0;
button.style.left = 0;
button.innerText = '随机餐厅';
button.onclick = randomRest;
document.body.appendChild(button);