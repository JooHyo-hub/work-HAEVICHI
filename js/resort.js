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

//--리조트 리스트 영역
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
        $(this).attr('src', 'img/resortPG/save_icon_hv.svg');
    });
    $saveIcon.mouseout(function() {
        $(this).attr('src', 'img/resortPG/save_icon.svg');
    });

    $shareIcon.mouseover(function() {
        $(this).attr('src', 'img/resortPG/share_icon_hv.svg');
    });
    $shareIcon.mouseout(function() {
        $(this).attr('src', 'img/resortPG/share_icon.svg');
    });

});

//--이벤트 영역
$(document).ready(function() {

    let currentIndex = 0;
    let eventItems = $('.event_order_wrap');
    let totalItems = eventItems.length;

    // 모든 이벤트를 숨깁니다.
    eventItems.hide();
    eventItems.eq(currentIndex).fadeIn(500);

    // 페이드 인/아웃 함수
    function fadeEvents() {

        eventItems.eq(currentIndex).fadeOut(500, function() {
            currentIndex = (currentIndex + 1) % totalItems; // 인덱스를 증가시키고, 마지막일 경우 처음으로 돌아갑니다.
            eventItems.eq(currentIndex).fadeIn(500);
        });

    }

    // 3초마다 이벤트 변경
    let interval = setInterval(fadeEvents, 3000);

    // 마우스를 올리면 애니메이션 멈춤
    $('.event_inner_box').hover(

        function() {
            clearInterval(interval); // 애니메이션 멈춤
        },

        function() {
            interval = setInterval(fadeEvents, 3000); // 애니메이션 재개
        }
    );
});

//--예약 영역 스크롤 제어 및 호버
document.addEventListener('DOMContentLoaded', function() {

    let calendarImg = document.querySelector('.container img');

    //달력 호버 이벤트
    calendarImg.addEventListener('mouseenter', () => {

        calendarImg.src = "img/calendar-quick-menu/calendar-icon-blue.svg";

    });
    calendarImg.addEventListener('mouseout', () => {

        calendarImg.src = "img/calendar-quick-menu/calendar-icon-white.svg";

    });
});

//--예약 영역 클릭 이벤트
$(document).ready(function() {

    let $calendar = $(".reservatn_Wrap");
    let $searchListMap = $(".search_list_map");
    let $close = $(".close_icon");
    let $title = $(".select_room_type .title");
    let $roomList = $(".room_list");

    // 예약 열기
    $calendar.click(function(open) { 

        $searchListMap.css('display', 'block');
        $close.css('display', 'block');

    });

    // 예약 닫기
    $close.click(function() {

        $searchListMap.css('display', 'none');
        $close.css('display', 'none');

    });

    // 룸 리스트 열기
    $title.click(function() { 

        $roomList.slideToggle().delay(500);

    });

    //룸 리스트 텍스트로 변경
    $roomList.find('> li').click(function() {

        let roomType = $(this).text();

        $title.text(roomType);

        $roomList.slideUp();

    });

    let elementText = $('.source-element').text(); // 텍스트를 가져옴
    $('.target-element').text(elementText); // 다른 요소에 대입

    // 인원 수량
    let adultCount = document.querySelector('.adult_left .personnel_count');
    let childrenCount = document.querySelector('.children_right .personnel_count');
    let adultAdd = document.querySelector('.adult_left .personnel_add_icon');
    let adultRemove = document.querySelector('.adult_left .personnel_remove_icon');
    let childrenAdd = document.querySelector('.children_right .personnel_add_icon');
    let childrenRemove = document.querySelector('.children_right .personnel_remove_icon');

    // 성인 수량 증가
    adultAdd.addEventListener('click', function() {

        let currentCount = parseInt(adultCount.textContent);

        if (currentCount < 10) {
            adultCount.textContent = currentCount + 1;
        }

    });

    // 성인 수량 감소
    adultRemove.addEventListener('click', function() {

        let currentCount = parseInt(adultCount.textContent);

        if (currentCount > 1) {
            adultCount.textContent = currentCount - 1;
        }

    });

    // 어린이 수량 증가
    childrenAdd.addEventListener('click', function() {

        let currentCount = parseInt(childrenCount.textContent);

        if (currentCount < 10) {
            childrenCount.textContent = currentCount + 1;
        }

    });

    // 어린이 수량 감소
    childrenRemove.addEventListener('click', function() {

        let currentCount = parseInt(childrenCount.textContent);

        if (currentCount > 0) {
            childrenCount.textContent = currentCount - 1;
        }

    });
    //체크인 날짜 달력 열기
    let $calendarOpen = $(".select_date_wrap");
    let $month = $(".month_wrap");
    let $calendarClose = $(".calendar_close");

    $calendarOpen.click(function() {

        $month.css('display', 'block');
        $calendarClose.css('display', 'block');

    });

    //체크인 날짜 달력 닫기
    $calendarClose.click(function() {

        $month.css('display', 'none');
        $calendarClose.css('display', 'none');

    });

    //체크인 날짜 클릭
    let $day = $(".dayBYday");
    
    $day.find('> ul > li').click(function(){

        if (!$(this).hasClass('today')) { // 현재 날짜를 제외하고 추가
            
            $day.find('> ul > li.today').removeClass('today');
            $(this).addClass('today');

        }

    });

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
        // 현재 클릭된 list 요소
        let $currentList = $(this).closest('.list');
        
        // roomType 텍스트 업데이트
        let roomTypeText = $currentList.find('.type_title_txt a span').text();
        $shareInnerBox.find('.roomType').text(roomTypeText);

        // details 텍스트 업데이트
        let detailsText = $currentList.find('.type_informat ul li:first').text();
        $shareInnerBox.find('.details').text(detailsText);

        // roomImg_L 이미지 업데이트
        let roomImgSrc = $currentList.find('.type_img img').attr('src');
        $shareInnerBox.find('.roomImg_L img').attr('src', roomImgSrc);

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
