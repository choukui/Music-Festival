/**
 * Created by kuikui on 2015/10/14.
 */
$(function () {
	$('.muisc img').toggle( function () {
		this.src = "../images/muisc1.png";
		document.getElementById("audio").pause();
	}, function () {
		this.src = "../images/muisc.png";
		document.getElementById("audio").play();
	});
	var swiper=new Swiper('.swiper-container',{
		pagination: '.swiper-pagination',
		paginationClickable: false,
		direction:'vertical',
		onInit: function(swiper){
			$('.shahuan .img1').addClass('commenAnimation');
			$('.shahuan .imgred').addClass('commenAnimation');
			$('.xiangxia').addClass('xiangxiaAnimation');
			$('.triangle-shenzhen').addClass('shenzhenAnimation');
			$('.triangle-shanghai').addClass('shanghaiAnimation');
			$('.triangle-zhuhai').addClass('zhuhaiAnimation');
			$('.triangle-nanjing').addClass('nanjingAnimation');
			$('.triangle-taiyuan').addClass('taiyuanAnimation');
			$('.triangle-xian').addClass('xianAnimation');
			$('.triangle-dalian').addClass('dalianAnimation');
			$('.leftshan').addClass('leftshanAnimation');
			$('.rightshan').addClass('rightshanAnimation');
			$('.fubiaoti').addClass('fubiaotiAnimation');
		},
		onSlideChangeEnd:function(swiper){
			if(swiper.activeIndex==0){
				$('.shahuan .img1').addClass('commenAnimation');
				$('.shahuan .imgred').addClass('commenAnimation');
				$('.xiangxia').addClass('xiangxiaAnimation');
				$('.triangle-shenzhen').addClass('shenzhenAnimation');
				$('.triangle-shanghai').addClass('shanghaiAnimation');
				$('.triangle-zhuhai').addClass('zhuhaiAnimation');
				$('.triangle-nanjing').addClass('nanjingAnimation');
				$('.triangle-taiyuan').addClass('taiyuanAnimation');
				$('.triangle-xian').addClass('xianAnimation');
				$('.triangle-dalian').addClass('dalianAnimation');
				$('.leftshan').addClass('leftshanAnimation');
				$('.rightshan').addClass('rightshanAnimation');
				$('.fubiaoti').addClass('fubiaotiAnimation');
			}else{
				$('.shahuan .img1').removeClass('commenAnimation');
				$('.shahuan .imgred').removeClass('commenAnimation');
				$('.xiangxia').removeClass('xiangxiaAnimation');
				$('.triangle-shenzhen').removeClass('shenzhenAnimation');
				$('.triangle-shanghai').removeClass('shanghaiAnimation');
				$('.triangle-zhuhai').removeClass('zhuhaiAnimation');
				$('.triangle-nanjing').removeClass('nanjingAnimation');
				$('.triangle-taiyuan').removeClass('taiyuanAnimation');
				$('.triangle-xian').removeClass('xianAnimation');
				$('.triangle-dalian').removeClass('dalianAnimation');
				$('.leftshan').removeClass('leftshanAnimation');
				$('.rightshan').removeClass('rightshanAnimation');
				$('.fubiaoti').removeClass('fubiaotiAnimation');
			}
			if(swiper.activeIndex==1){
				$("#outermain2 .left").addClass('leftAnimation');
				$("#outermain2 .right").addClass('rightAnimation');
			}else{

			}
			if(swiper.activeIndex==2){
				$(".font1").addClass('fontone');
				$(".font2").addClass('fonttwo');
				$(".font3").addClass('fontthree');
				$(".font4").addClass('fontfour');
				$(".font5").addClass('fontfive');
				$(".musik").addClass('musikAnimation');
				$(".more").addClass('moreAnimation');
				$(".boon").addClass('boonAnimation');
			}else{
				$(".font1").removeClass('fontone');
				$(".font2").removeClass('fonttwo');
				$(".font3").removeClass('fontthree');
				$(".font4").removeClass('fontfour');
				$(".font5").removeClass('fontfive');
				$(".musik").removeClass('musikAnimation');
				$(".more").removeClass('moreAnimation');
				$(".boon").removeClass('boonAnimation');
			}
		}
	});


})