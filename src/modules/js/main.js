//index
var index = {
	init: function (num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				let index = 0;
				let index_time = null;
				let index_dywidth = $(".dynamic_list_box").width();
				function index_move(){	
					$('.dynamic_list').stop().animate({
						left: -(index_dywidth + 50)*index +"px"
					},500)
				}
				index_move()
				function index_showTime(){
					index_time = setInterval(function(){
						index ++;
						if(index>$('.dynamic_list li').length/2-1){
							index = 0
						}
						index_move();
					},2000)
				} 
				index_showTime()
				$('.cli_l').click(function(){				
					if(index<1){
						index = $('.dynamic_list li').length/2-1
					}else{
						index --
					}
					index_move()
				})
				$('.cli_r').click(function(){		
					index ++;		
					if(index>$('.dynamic_list li').length/2-1){
						index = 0
					}
					index_move()
				})
				$(".dynamic_list_box").mouseover(function(){
					clearInterval(index_time)
				}).mouseleave(function(){
					index_showTime()
				});

				let inde = 0
				$('.cli_le').click(function(){
					if(inde<1){
						return
					}else{					
						inde --;
						$('.company_list').animate({
							left: -($('.company_list li').width() + 43)*inde + "px"
						})
					}
				})
				$('.cli_ri').click(function(){
					if(inde+3<$('.company_list li').length-1){
						inde ++;
						$('.company_list').animate({
							left: -($('.company_list li').width() + 43)*inde + "px"
						})
					}				
				})
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

exports.index = index;
exports.about = about;