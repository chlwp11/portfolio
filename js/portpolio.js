;(function($){
    
    var portpolio = {
        btn:0,
         
        init: function(){
            this.scrollEventFn();
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.modalFn();
            this.footerFn();
        },
        scrollEventFn:function(){
            var scrollA = 0;
            var scrollB = 0;
            var $win    = $(window);
            var result  = null;
            var $header = $('#header');
            var that = this;
            
                function scrollEventFn(){

                    scrollB = $win.scrollTop();

                var src = function(){

                    result = scrollA - scrollB > 0 ? 'UP' : 'DOWN'
                }
                src();

                if($win.scrollTop() == 0){
                    $header.removeClass('addHide');
                    $header.removeClass('addBlack');
                    $header.removeClass('addWhite')
                }
                else{
                    
                    //모바일
                    if(result == 'UP'){

                        if(that.btn == 1 ){

                            $header.removeClass('addHide');
                            $header.addClass('addWhite')
                            $header.addClass('addBlack');
                        }
                        else {

                            $header.removeClass('addHide');
                            $header.removeClass('addWhite')
                            $header.addClass('addBlack');

                        }
                    }
                
                    if(result == 'DOWN'){

                        if(that.btn == 1 ){

                            $header.removeClass('addBlack');
                            $header.removeClass('addHide');    
                            $header.addClass('addWhite');    

                        }
                        else{

                            $header.removeClass('addBlack');
                            $header.removeClass('addWhite');
                            $header.addClass('addHide');   
                        }
    
                    }
                
                }
                    scrollA = scrollB;
                }

        $win.scroll(function(){
            scrollEventFn();
        });

        },
        
        headerFn:function(){    
            
        //버튼이벤트
        
        //네비게이션
        var $window     = $(window);
        var $mainBtn    = $('#header .main-btn');
        var $sub        = $('#header .sub');
        var $navUlLi    = $('#header #nav>ul>li');
        var $mobileBtn  = $('.mobile-btn');
        var $bar        = $('.bar');
        var $nav        = $('#nav');
        var pc          = 0;
        var mobile      = 0;
        var that        = this;

        //1024px 초과 클릭 이벤트
        function pcEventFn(){

            $nav.stop().show();
            $sub.stop().hide();
            

            $mainBtn.on({
                mouseenter:function(event){
                    event.preventDefault();
                    $(this).next().stop().show();    
                }
            });

            $navUlLi.on({
                mouseleave:function(event){
                    event.preventDefault();
                    $sub.stop().hide();
                }
            });

        }//pc event

        //1024px 이하 클릭 이벤트
        // 모바일 

        function mobileEventFn(){
            $sub.stop().hide();
            $bar.removeClass('addMobile');
            $nav.stop().slideUp(0);

            // 이벤트 삭제
            $mainBtn.off('mouseenter');        
            $navUlLi.off('mouseleave');

        }//mobile event

        function pcMobileFn(){
            if($window.innerWidth() > 1024){
                pc=1;
                mobile=0;
                pcEventFn();
                that.btn = 0;
            }
            else{
                pc=0;
                mobile=1;
                mobileEventFn();
            }
        }
        setTimeout(pcMobileFn,100);

        $window.resize(function(){
            pcMobileFn();
        });

        mobileEventFn();

        //메인메뉴 버튼
        $mainBtn.on({
            click:function(e){
                e.preventDefault();
                if(mobile==1){
                    $sub.stop().slideUp(300);
                    $(this).next().stop().slideToggle(300);
                }
            }
        });

        $mobileBtn.on({
            click: function(event){
                event.preventDefault();
                $bar.toggleClass('addMobile');
                $nav.stop().slideToggle(300);

                that.btn == 0 ? that.btn = 1 : that.btn = 0;
            }
        });

        },

        section1Fn:function(){

            var $slide  = $('#section1 .bg-img');
            var $window = $(window);
            var $winW   = $(window).width();
            var $winH   = $(window).height();
            

                function resizeFn(){
                    $winW = $(window).width();
                    $winH = $(window).height();
                    $slide.css({width:$winW, height:$winH});
                }
                resizeFn();

                $window.resize(function(){
                    resizeFn();
                });
                
           



        },
        section2Fn:function(){
            var t = 0;
            var $textBox = $('#section2 .text-box');
             //페럴럭스
             $(window).scroll(function(){

                if($(window).scrollTop() >= $('#section2').offset().top-500){
                    if(t == 0){
                        t=1;
                        $('#section2 .wrap .gap .container > .text-box').addClass('addtext');
                        setTimeout(formatFn,100);
                    }

                }

                 if($(window).scrollTop() === 0){
                        t=0;
                        $('#section2 .wrap .gap .container > .text-box').removeClass('addtext');
                } 

            });

            //초기화 함수
            function formatFn(){
                $textBox.css({top:0});
            }
            setTimeout(formatFn,200);

        },
        section3Fn:function(){

            var $slide     = $('#section3 .slide');
            var $window    = $(window);
            var $winW      = $(window).width();

            var $slideWrap = $('#section3 .slide-wrap');
            var $slideView = $('#section3 .slide-view');
            var $nextBtn   = $('#section3 .next-btn');
            var $prevBtn   = $('#section3 .prev-btn');
            var cnt        = 0;
            var $slideW    = 1903;
            var n          = $('#section3 .slide').length-2-1;
            var $pageBtn   = $('#section3 .page-btn');
            var setId     = null;
            var setId2    = null;

            function resize2Fn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $slideW = $winW
                $slideWrap.css({width:$slideW*7,marginLeft:-$slideW});
                $slide.css({width:$winW});
                mainSlideFn();
            }
            
             setTimeout(resize2Fn,100);    

            $window.resize(function(){
                
             setTimeout(resize2Fn,100)
            });
           

            //1.메인슬라이드
            function mainSlideFn(){
                $slideWrap.stop().animate({left: -$slideW*cnt},600,function(){
                    if(cnt>n){ 
                        cnt=0
                    }
                    if(cnt<0) {
                        cnt=n
                    }
                $slideWrap.stop().animate({left:-$slideW*cnt},0);
                });
                pageBtnColorEventFn();
            }

            //2.다음카운터슬라이드
            function nextSlideCountFn(){
                cnt ++ ;
                mainSlideFn();
            }

            //2.1 이전 카운터 슬라이드
            function prevSlideCountFn(){
                cnt --;
                mainSlideFn();
            }

            //3.1 다음버튼이벤트
            $nextBtn.on({
                click:function(){
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        nextSlideCountFn();
                    }
                }
            });

            //3.2 이전 버튼 이벤트
            $prevBtn.on({
                click:function(){
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });

            //페이지 버튼 이벤트 

            function pageBtnColorEventFn(){
                $pageBtn.removeClass('addPage');
                $pageBtn.eq( cnt > n ? 0 : cnt ).addClass('addPage');
            }
            pageBtnColorEventFn();

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        pauseFn();
                        cnt = idx;
                        mainSlideFn();
                    }
                });
            });

            // 스와이프 작업
            $slideView.swipe({
                
                swipeLeft:function(e){
                    e.preventDefault();
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        nextSlideCountFn();
                    }
                },
                swipeRight:function(e){
                    e.preventDefault();
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideCountFn();
                    }
                }

            });
            
            // 자동플레이
             function autoPlayFn(){
                setId = setInterval(nextSlideCountFn,4000);
            }
            autoPlayFn(); 

            
            function pauseFn(){
                var t = 0 ;
                clearInterval(setId);
                clearInterval(setId2);

                setId2 = setInterval(function(){
                    t++;
                    
                    if(t >=4 ){
                        t=0;
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCountFn();
                        autoPlayFn();
                    }
                },1000);
                
            } 

        },
        section4Fn:function(){
            var t = 0;
            var $textBox = $('#section4 .text-box');
            //페럴럭스
            $(window).scroll(function(){

               if($(window).scrollTop() >= $('#section4').offset().top-650){
                   if(t == 0){
                       t=1;
                       $('#section4 .wrap .gap .container > .text-box').addClass('addtext');
                       setTimeout(formatFn,100);
                   }

               }

                if($(window).scrollTop() === 0){
                       t=0;
                       $('#section4 .wrap .gap .container > .text-box').removeClass('addtext');
               } 

           });

           //초기화 함수
           function formatFn(){
            $textBox.css({top:0});
        }
        setTimeout(formatFn,200);
        },
        section5Fn:function(){
            var $slide     = $('#section5 .slide');
            var $window    = $(window);
            var $winW      = $(window).width();

            var $slideWrap = $('#section5 .slide-wrap');
            var $slideView = $('#section5 .slide-view');
            var $nextBtn   = $('#section5 .next-btn');
            var $prevBtn   = $('#section5 .prev-btn');
            var $slideW    = 1903;
            var cnt        = 0;
            var n          = $('#section5 .slide').length-2-1;
            var setId      = null;
            var setId2     = null;

            
            function resize3Fn(){
                $slideWrap= $('#section5 .slide-wrap');
                $winW     = $(window).width();
                $slideW   = $winW;
                $slideWrap.css({width:$slideW*7,marginLeft:-$slideW});
                $slide.css({width:$slideW});
                mainSlideFn();
            }
            resize3Fn();

            $window.resize(function(){
                resize3Fn();
            }); 

            //1.메인슬라이드
            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt},600,function(){
                    if(cnt>n){ 
                        cnt=0
                    }
                    if(cnt<0) {
                        cnt=n
                    }
                $slideWrap.stop().animate({left:-$slideW*cnt},0);
                });
              
            }

            //2.다음카운터슬라이드
            function nextSlideCountFn(){
                cnt ++ ;
                mainSlideFn();
            }

            //2.1 이전 카운터 슬라이드
            function prevSlideCountFn(){
                cnt --;
                mainSlideFn();
            }

            //3.1 다음버튼이벤트
            $nextBtn.on({
                click:function(){
                    pause1Fn();
                    if(!$slideWrap.is(':animated')){

                        nextSlideCountFn();
                    }
                }
            });

            //3.2 이전 버튼 이벤트
            $prevBtn.on({
                click:function(){
                    pause1Fn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });

           

            // 스와이프 작업
            $slideView.swipe({
                swipeLeft:function(){
                    if(!$slideWrap.is(':animated')){
                        pause1Fn();
                        nextSlideCountFn();
                    }
                },
                swipeRight:function(){
                    if(!$slideWrap.is(':animated')){
                        pause1Fn();
                        prevSlideCountFn();
                    }
                }

            });
            
            // 자동플레이
            function autoPlay1Fn(){
               setId = setInterval(nextSlideCountFn,4000);
            }
            autoPlay1Fn();

            // 스탑
            function pause1Fn(){
                var t = 0;
                clearInterval(setId)
                clearInterval(setId2)
                
                setId2 = setInterval(function(){
                    t++;
                    if( t >= 4){
                        clearInterval(setId)
                        clearInterval(setId2)
                        nextSlideCountFn();
                        autoPlay1Fn();
                    }
                },1000);
            }



        },
        section6Fn:function(){
            var t = 0;
            var $titleBox = $('#section6 .title-box');

            //페럴럭스
            $(window).scroll(function(){

               if($(window).scrollTop() >= $('#section6').offset().top-500){
                   if(t == 0){
                       t=1;
                       $('#section6 .wrap .gap .container > .title-box').addClass('addtext');
                       setTimeout(formatFn,100);
                   }

               }

                if($(window).scrollTop() === 0){
                       t=0;
                       $('#section6 .wrap .gap .container > .title-box').removeClass('addtext');
               } 

           });

           //초기화 함수
           function formatFn(){
            $titleBox.css({top:0});
        }
        setTimeout(formatFn,200);


        },
        section7Fn:function(){

          var $ul = $('#section7 .container > ul > li ul');  
          var column0 = $('#section7 .container > ul > li').eq(0);  // this year
          var column1 = $('#section7 .container > ul > li').eq(1);  // total rooms
          var column2 = $('#section7 .container > ul > li').eq(2);  // total rooms
          var column3 = $('#section7 .container > ul > li').eq(3);  // click rate

          var cnt1 = [0,0,0,0]; 
          var cnt2 = [0,0,0,0]; 
          var cnt3 = [0,0,0,0]; 
          var cnt4 = [0,0,0,0]; 

          var setId1 = [null,null,null,null];
          var setId2 = [null,null,null,null];
          var setId3 = [null,null,null,null];
          var setId4 = [null,null,null,null];
          var timer  = 2;
          var num1   = [];
          var num2   = [];
          var num3   = [];
          var num4   = [];
          var t = 0;


                //페럴럭스
                $(window).scroll(function(){

                    if($(window).scrollTop() >= $('#section7').offset().top-700){
                        if(t == 0){
                            t = 1;
                            $('#section7 .wrap .gap .container > ul').addClass('addCounter');
                            
                            setTimeout(function(){
                                formatFn();
                                setTimeout(countFn,500);
                                
                            },200);

                            }

                    }

                     if($(window).scrollTop() === 0){
                        t = 0;
                        cnt1 = [0,0,0,0];
                        cnt2 = [0,0,0,0];
                        cnt3 = [0,0,0,0];
                        cnt4 = [0,0,0,0];
                        $('#section7 .wrap .gap .container > ul').removeClass('addCounter');
                    } 

                });

                //초기화 함수
                function formatFn(){
                    $ul.css({top:0});

                    column0.find('.col').each(function(idx){
                        num1[idx] = $(this).data('number');
                    });                    
        
                    column1.find('.col').each(function(idx){
                        num2[idx] = $(this).data('number');
                    });
                    
                    column2.find('.col').each(function(idx){
                        num3[idx] = $(this).data('number');
                    });
                    
                    column3.find('.col').each(function(idx){
                        num4[idx] = $(this).data('number');
                    });

                }

                function countFn(){

                    setId1.forEach(function(el,idx){
                        setId1[idx] = setInterval(function(){
                        cnt1[idx]++;
                        if(cnt1[idx] > 65*num1[idx]){
                            clearInterval(setId1[idx]);
                        }    
                        else{
                            column0.find('ul').eq(idx).css({ top: -cnt1[idx] });
                        }
                        },timer);
                    });

                    setId2.forEach(function(el,idx){
                        setId2[idx] = setInterval(function(){
                        cnt2[idx]++;
                        if(cnt2[idx] > 65*num2[idx]){
                            clearInterval(setId2[idx]);
                        }    
                        else{
                            column1.find('ul').eq(idx).css({ top: -cnt2[idx] });
                        }
                        },timer);
                    });

                    setId3.forEach(function(el,idx){
                        setId3[idx] = setInterval(function(){
                        cnt3[idx]++;
                        if(cnt3[idx] > 65*num3[idx]){
                            clearInterval(setId3[idx]);
                        }    
                        else{
                            column2.find('ul').eq(idx).css({ top: -cnt3[idx] });
                        }
                        },timer);
                    });

                    setId4.forEach(function(el,idx){
                        setId4[idx] = setInterval(function(){
                        cnt4[idx]++;
                        if(cnt4[idx] > 65*num4[idx]){
                            clearInterval(setId4[idx]);
                        }    
                        else{
                            column3.find('ul').eq(idx).css({ top: -cnt4[idx] });
                        }
                        },timer);
                    });
                }


        },
        section8Fn:function(){

        },
        modalFn:function(){

            var $modal      = $('#modal')
            var $modalBtn   = $('#modal .box-btn1')
            var $modalBtn2  = $('#modal .box-btn2')
            

            $modalBtn.on({
                click:function(){
                    $modal.stop().fadeOut(300);
                }
            });
            $modalBtn2.on({
                click:function(){
                    $modal.stop().fadeOut(300);
                }
            });

        },
        footerFn:function(){

        }
    }
    portpolio.init();

})(jQuery);