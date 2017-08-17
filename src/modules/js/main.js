//index
var index = {
	init: function (num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				let aLi = document.getElementsByTagName('li');
				for(let i=0;i<aLi.length;i++){
					aLi[i].index = i;
					aLi[i].onclick = function(){
						// alert(this.index)
					}
				}
			})
		})
	}
}
//about
var about = {
	init: function(num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				// console.log(num)
			})
		})
	}
}

//helpBulletin
var helpBulletin = {
	init: function(){
		require(['jquery'],function($){
			$(document).ready(function(){
			  //上下拉菜单
				var sta = false;
				$('.list_tilte1').click(function(){
					if (!sta) {
						$('.list_sonone li').stop().slideUp(500);
						$('.list_sontwo li').stop().slideDown(500);
						 sta =true;
					}else{
						$('.list_sonone li').stop().slideDown(500);
						$('.list_sontwo li').stop().slideUp(500);
						sta = false;
					}
				})
				$('.list_tilte2').click(function(){
					if (!sta) {
						$('.list_sonone li').stop().slideUp(500);
						$('.list_sontwo li').stop().slideDown(500);
						 sta =true;
					}else{
						$('.list_sonone li').stop().slideDown(500);
						$('.list_sontwo li').stop().slideUp(500);
						sta = false;
					}
				})
				$('.bulletin_detail .listp li').click(function(){
					$(this).children('span').css('color','blue');
					$(this).children('.detail').css('display','block');
					$(this).siblings().children('span').css('color','black');
					$(this).siblings().children('.detail').css('display','none');
				})
			})
		})	
	}
}



exports.index = index;
exports.about = about;
exports.helpBulletin = helpBulletin;