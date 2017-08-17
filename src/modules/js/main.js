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
					$(".list-coo li").mouseover(function(){
						var index = $(this).index();
						$(".list-pic li").eq(index).show().siblings().hide()
					})				
			})
		})
	}
}

exports.index = index;
exports.about = about;