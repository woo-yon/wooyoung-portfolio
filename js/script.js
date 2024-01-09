$(document).ready(function(){
    let st=$(this).scrollTop();
    let sh=$(".page").height();

    //메뉴 구간-서브메뉴 업다운
    $('.menu').mouseover(function(){
        $('.sub_menu_wrap').stop().slideDown(500);
    }).mouseout(function(){
        $('.sub_menu_wrap').stop().slideUp(500);
    });

    $('.menu').mouseover(function(){
        $('.sub_span').stop().slideDown(500);
    }).mouseout(function(){
        $('.sub_span').stop().slideUp(500);
    });


    //엔딩 영역:기획서,이력서 활성화
    $('.project_document').mouseover(function(){
        $('.project_document').animate({
            width:160,
            height:160
        },300)
        $('.resume').css({
            opacity:0.5
        })
    }).mouseout(function(){
        $('.project_document').animate({
            width:150,
            height:150
        },300)
        $('.resume').css({
            opacity:1
        })
    });

    $('.resume').mouseover(function(){
        $('.resume').animate({
            width:160,
            height:160
        },300)
        $('.project_document').css({
            opacity:0.5
        })
    }).mouseout(function(){
        $('.resume').animate({
            width:150,
            height:150
        },300)
        $('.project_document').css({
            opacity:1
        })
    });

    //포트폴리오 사선 이동 구간
    $(window).scroll(function(){
        st=$(this).scrollTop();
        sh=$(".page").height();
        //페이지 높이값 변수 선언 해주기

        if(st>sh*2){
            $('.moveTop_1').animate({
                top:-690
            },2000,function(){
                $('.moveTop_1 .blushaak').first().appendTo('.moveTop_1>a');
                $('.moveTop_1').css({
                    top:0
                })
            })
            $('.moveTop_2').animate({
                top:-690
            },2000,function(){
                $('.moveTop_2 .lush').first().appendTo('.moveTop_2>a');
                $('.moveTop_2').css({
                    top:0
                })
            })
            $('.moveBottom_1').animate({
                bottom:-690
            },2000,function(){
                $('.moveBottom_1 .heaps').last().prependTo('.moveBottom_1>a');
                $('.moveBottom_1').css({
                    bottom:0
                })
            })
            $('.moveBottom_2').animate({
                bottom:-690
            },2000,function(){
                $('.moveBottom_2 .blushaak').last().prependTo('.moveBottom_2>a');
                $('.moveBottom_2').css({
                    bottom:0
                })
            });
        };

        //엔딩-슬라이드업
        if(st>sh*2.5){
            $('.slide_up').animate({
                top:'-60%'
            },3000,function(){
                $('.secret_box').fadeIn();
            })
        };
    });
    
    //메인-클릭 시 프로필 나오기,화면 전환 구간
    $(".ticket_button").click(function(){
        ww=$('.wrap').width();
        wh=$('.wrap').height();
        if(ww>=769){
            $("html,body").css({'overflow':'visible', 'height': wh});
            $("html,body").delay(200).animate({
                scrollTop:sh
            },2000)
            $('.profile').delay(200).animate({
                height:1050
            },2000,function(){
                $('.cut_profile').addClass('tr');
            })
            
        }
    });
   

    //메뉴 누르면 페이지 이동
    $('.m_profile').click(function(){
        ww=$('.wrap').width();
        if(ww>=769){
            $("html,body").animate({
                scrollTop:0
            })
        }
    })
    $('.m_portfolio').click(function(){
        ww=$('.wrap').width();
        if(ww>=769){
            $("html,body").animate({
                scrollTop:sh*2
            })
        }
    })
    $('.m_contact').click(function(){
        ww=$('.wrap').width();
        if(ww>=769){
            $("html,body").animate({
                scrollTop:sh*3
            })
        }
    });



    //프로필 구간-스크롤 이벤트
    // let bg=['lightgray','gray','black','yellow'];
    // let page_h=$('.page').height();
    // let box_index=0;
    // $('.page').css({
    //     background:function(index){
    //         return bg[index]
    //     }
    // })

    // $(window).mousewheel(function(event,delta){
    //     $(".wrap").clearQueue();
    //     box_index+=5;
    //     console.log(box_index);

    //     if(delta<0){
    //         $('.profile').animate({
    //             height:1300
    //         },1000,function(){
    //             $('.wrap').animate({
    //                 top:-page_h
    //             });
    //         })
    //     }else if(delta>0){
    //         $('.wrap').animate({
    //             top:0
    //         },1000,function(){
    //             $('.profile').animate({
    //                 height:0
    //             });
    //         })
    //     }
    // })




    //모바일.ver
    // -메뉴 누를 시 페이지 이동 기능
    $('#mob_but_contact').click(function(){
        m_sh=$('.mob_page').height();
        $("html,body").animate({
            scrollTop: m_sh*2
        },1500)
    })
    $('#mob_but_profile').click(function(){
        m_sh=$('.mob_page').height();
        $("html,body").animate({
            scrollTop: m_sh
        },1500)
    })
    $('.menu_home').click(function(){
        m_sh=$('.mob_page').height();
        $("html,body").animate({
            scrollTop: 0
        })
    })
    $('.menu_profile').click(function(){
        m_sh=$('.mob_page').height();
        $("html,body").animate({
            scrollTop: m_sh
        })
    })
    $('.menu_ticket').click(function(){
        m_sh=$('.mob_page').height();
        $("html,body").animate({
            scrollTop: m_sh*2
        })
    })

    // -작품영역 스와이프 기능
    var swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


});