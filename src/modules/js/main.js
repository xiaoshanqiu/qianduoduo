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


//guide
var guide = {
	init: function(num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				var index = 0,
				len = $('.btn').length;
				$('.pics').css({width: 619*len + 'px'});
				function show(){
					$('.pics').stop().animate({left: -619*index +'px'});
					$('.btn').eq(index).find('.btn_pic01').hide();
					$('.btn').eq(index).find('.btn_pic02').show();
					$('.btn').eq(index).siblings().find('.btn_pic01').show();
					$('.btn').eq(index).siblings().find('.btn_pic02').hide();
				}
				show();
				$('.btn').click(function(){
					index = $(this).index();
					show();
				})

			})
		})
	}
}

exports.index = index;
exports.about = about;
exports.guide = guide;