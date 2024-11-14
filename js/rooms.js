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

//--예약 영역
$(document).ready(function() {
    //호텔 / 리조트 선택 높이 제어
    let $select_RoomType = $(".select_room_type_wrap");
    let $roomList = $(".room_list");
    let $title = $(".room_type .title");

    $select_RoomType.click(function() {
        
            $(this).toggleClass('expanded');

            if ($(this).hasClass('expanded')) {

                $(this).css('height', '297px');

            }
            else {

                $(this).css('height', '74px');

            }
        
    });

    //룸 리스트 텍스트로 변경
    $roomList.find('> li').click(function() {

        let $roomType = $(this).text();

        $title.text($roomType);

        $select_RoomType.css('height', '74px');

    });

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
    
});

//-- 체크인 날짜 달력 영역
$(document).ready(function() {

    //열기
    let $calendarOpen = $(".select_date_wrap");
    let $calendar =$(".checkinDay");

    $calendarOpen.click(function() {

        $calendar.css('display', 'block');

    });

    //닫기
    let $calendarClose = $(".calendar_close");

    $calendarClose.click(function() {

        $calendar.css('display', 'none');

    });

    //클릭
    let $day = $(".dayBYday");
    
    $day.find('> ul > li').click(function(){

        if (!$(this).hasClass('today')) { // 현재 날짜를 제외하고 추가
            
            $day.find('> ul > li.today').removeClass('today');
            $(this).addClass('today');

        }

    });

});

//--룸's 영역
$(document).ready(function() {

    let $resortBtn = $('.resort_btn');
    let $hotelBtn = $('.hotel_btn');
    let $resortBox = $('.resort_wrap');
    let $hotelBox = $('.hotel_wrap');
    
    //리조트 버튼
    $resortBtn.click(function() {
        
        //스타일 변경
        $(this).removeClass('outFocusBtn');
        $hotelBtn.removeClass('inFocusBtn');
        $(this).addClass('inFocusBtn');
        $hotelBtn.addClass('outFocusBtn');

        //article box 제어
        $resortBox.addClass('showBox');
        $hotelBox.removeClass('showBox'); 
        $hotelBox.addClass('hideBox'); 
    });

    //호텔 버튼
    $hotelBtn.click(function() {
        
        //스타일 변경
        $(this).removeClass('outFocusBtn');
        $resortBtn.removeClass('inFocusBtn');
        $(this).addClass('inFocusBtn');
        $resortBtn.addClass('outFocusBtn');
        
        //article box 제어
        $hotelBox.addClass('showBox');
        $resortBox.removeClass('showBox'); 
        $resortBox.addClass('hideBox'); 

    });

    //아이콘 호버시 attr 변경
    // let $nextIcon = $('.offers_entire_wrap span.next_icon');
    let $nextImg = $('.next_icon_container > a > img');

    $nextImg.hover(function() {
        $(this).attr('src', 'img/hotel-resortPG/proicons_chevron-righ-hv.svg');

    }, function(){
        $(this).attr('src', 'img/hotel-resortPG/proicons_chevron-right.svg');
    });

    console.log($nextImg);
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
