//--배너 영역
$(document).ready(function(){
    //언어 선택 슬라이드 다운
    let selectBtn = $(".lang_select_btn");
    let languageList = $(".language_list");

    selectBtn.click(function(){
        languageList.slideToggle(400);
    });
});

//-- 네비게이션 영역
$(document).ready(function(){
    let $navWrap = $(".nav_fixed");
    let $innerWrap = $(".inner_wrap");
    let $mainmenuList = $(".mainmenu > ul > li");

    let $submenu1 = $(".specialOffer_sub");
    let $submenu2 = $(".hotelResort_sub");
    let $submenu3 = $(".dining_sub");
    let $submenu4 = $(".membership_sub");

    //윈도우 로드시 스트롤 탑이 아니면 배경색 추가
    $(window).on('load', function() {
        if ($(window).scrollTop() !== 0) {
            $navWrap.addClass('bgColor');
        }
    });

    //윈도우 탑에서 스크롤시 배경색 변경
    $(window).scroll(function() {

        if ($(this).scrollTop() > 0) {
            $navWrap.addClass('bgColor');
        }

        else if(!$navWrap.hasClass('navheight') && window.scrollY === 0){
            $navWrap.addClass('bgColor');   //배경색 추가
        }

        else {
            $navWrap.removeClass('bgColor');
        }
    });
    //메인메뉴 호버시 서브메뉴 이벤트
    $mainmenuList.mouseover(function(){

        $navWrap.addClass('bgColor');   //배경색 추가

        $navWrap.removeClass('navheight');  //height 제거

        $('.sub').addClass('hideMenu'); //전체 서브메뉴 오퍼시티 0 추가
        $('.sub').removeClass('showMenu');  //전체 서브메뉴 오퍼시티 1 제거

        if ($(this).hasClass('menu5')) {
            
            $navWrap.addClass('navheight'); //height 제거
            $('.sub').addClass('hideMenu'); //오퍼시티 0 추가

        }

        // 현재 메뉴에 따라 서브 메뉴 보이기
        if ($(this).hasClass('menu1')) {
            $submenu1.removeClass('hideMenu').addClass('showMenu');
            $submenu1.css('z-index', '30');
            $innerWrap.css({'height': '338px'});
        }
        else if($(this).hasClass('menu2')) {
            $submenu2.removeClass('hideMenu').addClass('showMenu');
            $submenu2.css('z-index', '30');
            $innerWrap.css('height', '514px');
        }
        else if($(this).hasClass('menu3')) {
            $submenu3.removeClass('hideMenu').addClass('showMenu');
            $submenu3.css('z-index', '30'); 
            $innerWrap.css('height', '315px');
        }
        else if($(this).hasClass('menu4')) {
            $submenu4.removeClass('hideMenu').addClass('showMenu');
            $submenu4.css('z-index', '30');
            $innerWrap.css('height', '315px');
        }
    });

    //네비게이션 아웃 이벤트
    $navWrap.mouseleave(function(){
        
        $(this).addClass('navheight');

        if(window.scrollY === 0) {
            $navWrap.removeClass('bgColor');
        }

    });

});

//--리조트 리스트 선택 박스
$(document).ready(function(){

    let $selectList = $(".select_list_element");

    $selectList.click(function() {
        
        $(this).toggleClass('expanded');

        if ($(this).hasClass('expanded')) {

            $(this).css('height', '560px');

        }
        else {

            $(this).css('height', '94px');

        }
    
    //룸 리스트 텍스트로 변경
    let $title = $(".current_type");
    let $roomList = $(".list_container");

    $roomList.find('> li').click(function() {

        let $roomType = $(this).text();

        $title.text($roomType);

        $selectList.css('height', '94px');

    });
});

});

//--공유 아이콘 영역
$(document).ready(function() {

    let $roomList = $('.list');

    $roomList.mouseover(function(){
        $(this).find('> .type_img > .icon_wrap').css('opacity', '1');
    });
    $roomList.mouseleave(function(){
        $(this).find('> .type_img > .icon_wrap').css('opacity', '0');
    });

    let $saveIcon = $('.save_icon img');
    let $shareIcon = $('.share_icon img');

    $saveIcon.mouseover(function() {
        $(this).attr('src', 'img/JuniorSuitePG/save_icon_hv.svg');
    });
    $saveIcon.mouseout(function() {
        $(this).attr('src', 'img/JuniorSuitePG/save_icon.svg');
    });

    $shareIcon.mouseover(function() {
        $(this).attr('src', 'img/JuniorSuitePG/share_icon_hv.svg');
    });
    $shareIcon.mouseout(function() {
        $(this).attr('src', 'img/JuniorSuitePG/share_icon.svg');
    });

});

//--주니어 수트 영역
$(document).ready(function() {
    // 메인 이미지와 썸네일, 페이지네이션 요소 선택
    let $mainImg = $('.main_img img');
    let $thumbnails = $('.add_Img img');
    let $pagination = $('.pagenation_container .page');

    // 썸네일 클릭 이벤트
    $thumbnails.on('click', function() {
        // 클릭된 이미지의 src를 메인 이미지에 설정
        $mainImg.attr('src', $(this).attr('src'));

        //페이지네이션 변경
        $pagination.removeClass('nowList');

        let imgIndex = $thumbnails.index(this); // 클릭된 이미지의 인덱스
        $pagination.eq(imgIndex).addClass('nowList');

    });

    //페이지네이션 클릭 스타일 변경
    $pagination.click(function() {

        // 클릭된 페이지네이션의 인덱스
        currentIndex = $(this).index();

        // 썸네일의 src를 메인 이미지에 설정
        $mainImg.attr('src', $thumbnails.eq(currentIndex).attr('src'));

        //함수 호출
        updatePagination();

    });

    //페이지네이션 변경 함수
    function updatePagination() {

        $pagination.removeClass('nowList'); 
        $pagination.eq(currentIndex).addClass('nowList'); 

    }
});

//--로그인 팝업창
$(document).ready(function() {
    let $saveIcon = $('.save_icon img');
    let $loginPop = $('.login_inner_wrap');
    let $popClose = $('.login_popup .closeBtn');

    $saveIcon.click(function() {
        $loginPop.css('display', 'block');
    });

    $popClose.click(function() {
        $loginPop.css('display', 'none');
    })
;});

//--공유 팝업창
$(document).ready(function() {
    let $shareIcon = $('.share_icon');
    let $sharePopup = $('.share_popup');
    let $shareInnerBox = $('.share_inner_box');
    let $closeBtn = $('.share_popup > .closeBtn');

    // 공유 아이콘 클릭 시 팝업 내용 업데이트
    $shareIcon.click(function() {
        // 팝업 표시
        $shareInnerBox.show();
        $sharePopup.css('border','1px solid #686868');
    });

    // 닫기 버튼 클릭 시 팝업 숨김
    $closeBtn.click(function() {
        $shareInnerBox.hide();
        $sharePopup.css('border','none');
    });

    // 버튼 hover 기능
    function handleHover(button, imgNormal, imgHover) {
        $(button).hover(function() {
            $(this).find(' > span > img').attr('src', imgHover);
        }, function() {
            $(this).find(' > span > img').attr('src', imgNormal);
        });
    }

    handleHover(".copylinkBtn", 'img/share-Popup/copy-bold.svg', 'img/share-Popup/copy-bold_hv.svg');
    handleHover(".emailBtn", 'img/share-Popup/entypo_email.svg', 'img/share-Popup/entypo_email_hv.svg');
    handleHover(".massegeBtn", 'img/share-Popup/simple-icons_imessage.svg', 'img/share-Popup/simple-icons_imessage_hv.svg');
    handleHover(".kakaoBtn", 'img/share-Popup/simple-icons_kakaotalk.svg', 'img/share-Popup/simple-icons_kakaotalk_hv.svg');
    handleHover(".facebBtn", 'img/share-Popup/fe_facebook.svg', 'img/share-Popup/fe_facebook_hv.svg');
    handleHover(".instaBtn", 'img/share-Popup/teenyicons_instagram-solid.svg', 'img/share-Popup/teenyicons_instagram-solid_hv.svg');
});

//--객실 도면
$(document).ready(function() {
    $room_model_Btn = $('.room_model_btn');
    $model_pop_closeBtn = $('.room_model_popup .closeBtn');
    $room_model_Pop = $('.room_model_popup');
    $room_model_innerBox = $('.room_model_inner_wrap');

    $room_model_Btn.click(function() {
        $room_model_Pop.css('visibility', 'visible');
        $room_model_innerBox.css('top', '0%');
    });

    $model_pop_closeBtn.click(function() {
        $room_model_Pop.css('visibility', 'hidden');
        $room_model_innerBox.css('top', '-100%');
    });
});

//--어메니티
$(document).ready(function() {
    $amenityBtn = $('.amenity_btn');
    $amenities_closeBtn = $('.amenities_element_wrap .closeBtn');
    $roomAmenities = $('.room_amenities');
    $roomAmenities_element_box = $('.amenities_element_wrap');

    $amenityBtn.click(function() {
        $roomAmenities.css('visibility', 'visible');
        $roomAmenities_element_box.css('top', '0%');
    });

    $amenities_closeBtn.click(function() {
        $roomAmenities.css('visibility', 'hidden');
        $roomAmenities_element_box.css('top', '-100%');
    });
});

//--TOP 버튼
document.addEventListener('DOMContentLoaded', function() {

    let topBtn = document.querySelector('.window_top_wrap');

    // 스크롤 이벤트
    window.addEventListener('scroll', function() {

        if (window.scrollY > 1000) {

            topBtn.classList.add('showTop'); // 오퍼시티1

        }

        else {

            topBtn.classList.remove('showTop'); // 오퍼시티1

        }
    });

    //TOP 호버 이벤트
    let upIcon = document.querySelector('.window_top_wrap > img');

    //탑 버튼 마우스 올렸을 때
    topBtn.addEventListener('mouseenter', () => {
        
        upIcon.src = "img/windowTop/chevron-up-hv.svg";

    });

    //탑 버튼 마우스 뗐을 때
    topBtn.addEventListener('mouseout', () => {

        upIcon.src = "img/windowTop/chevron-up.svg";

    });
    
    //TOP 클릭 이벤트

    topBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
});
