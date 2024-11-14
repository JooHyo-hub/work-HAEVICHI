//--페이지 로드시 로고 및 메뉴 영역
window.onload = function() {
    let logo = document.querySelector('.main_logo');
    let nav = document.querySelector('nav');

    logo.classList.add('visible'); // 로고 보이기
    nav.classList.add('visible'); // 메뉴 보이기
};

//--랜딩 메인 영역
$(document).ready(function(){
    //언어 선택 슬라이드 다운
    let selectBtn = $(".lang_select_btn");
    let languageList = $(".language_list");

    selectBtn.click(function(){
        languageList.slideToggle(400);
    });

    //메뉴 호버시 메인 비주얼 이미지 변경
    let navList = $(".nav_list");
    let ImgeArea = $(".bgImges_element_wrap");

    navList.hover(function(){

        let index = $(this).index();

        if(index === 0){

            ImgeArea.css({
                "background" : "url('img/indexPG/main/visual_hotel.jpg')",
                "transition" : "background-image 0.5s ease",
                "background-repeat" : "no-repeat",
                "background-size" : "cover"
            });
        
        }
        else if(index === 1){

            ImgeArea.css({
                "background" : "url('img/indexPG/main/visual_jeju_cc.jpg')",
                "transition" : "background-image 0.5s ease",
                "background-repeat" : "no-repeat",
                "background-size" : "cover"
            });
        
        }
        else if(index === 2){

            ImgeArea.css({
                "background" : "url('img/indexPG/main/visual_sushimer.jpg')",
                "transition" : "background-image 0.5s ease",
                "background-repeat" : "no-repeat",
                "background-size" : "cover"
            });

        }
    },function(){   //기존 이미지 복원

        ImgeArea.css({
            "background" : "url('img/indexPG/main/visual_hub_haevichi.jpg')",
            "background-repeat" : "no-repeat",
            "background-size" : "cover",
            "transition" : "background-image 0.5s ease"
        });

    });
});

//--오퍼 영역
$(document).ready(function() {

    let currentIndex = 0; 
    let itemWidth = $('.offers_list').outerWidth(true);

    function updatePagination() {

        $('.pagenation_Wrap span').removeClass('nowList'); 
        $('.pagenation_Wrap span').eq(currentIndex).addClass('nowList'); 

    }

    updatePagination();

    // 좌측 버튼 클릭 시
    $('.offers_leftBtn').click(function() {
        if (currentIndex > 0) {

            currentIndex--;

            $('.list_inner_box').animate({
                marginLeft: -currentIndex * itemWidth
            }, 300);

            updatePagination(); 

        }
    });

    // 우측 버튼 클릭 시
    $('.offers_rightBtn').click(function() {
        if (currentIndex < 3) {

            currentIndex++;

            $('.list_inner_box').animate({
                marginLeft: -currentIndex * itemWidth
            }, 300);

            updatePagination(); 

        }
    });

    // 페이지네이션 클릭 시
    $('.pagenation_Wrap span').click(function() {

        currentIndex = $(this).index(); 

        $('.list_inner_box').animate({
            marginLeft: -currentIndex * itemWidth
        }, 300);

        updatePagination(); 

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
            currentIndex = (currentIndex + 1) % totalItems; // 인덱스를 증가시키고, 마지막일 경우 처음으로 돌아감
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

    let reservatnCalendar = document.querySelector('.reservatn_calendar');
    let searchListMap = document.querySelector('.search_list_map');
    let calendarImg = document.querySelector('.container img');

    // 스크롤 이벤트
    window.addEventListener('scroll', function() {

        if (window.scrollY > 300) {
            reservatnCalendar.classList.add('show'); // 오퍼시티1
        }

        else {
            reservatnCalendar.classList.remove('show'); // 오퍼시티1
            searchListMap.style.display = 'none'; // 스크롤 시 검색창 숨김
        }
    });


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

    //인원 수량
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

    //어린이 수량 증가
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

    //체크인 날짜
    let $calendarOpen = $(".select_date_wrap");
    let $month = $(".month_wrap");
    let $calendarClose = $(".calendar_close");
    let $day = $(".dayBYday");

    //달력 열기
    $calendarOpen.click(function() {

        $month.css('display', 'block');
        $calendarClose.css('display', 'block');

    });

    //달력 닫기
    $calendarClose.click(function() {

        $month.css('display', 'none');
        $calendarClose.css('display', 'none');

    });

    //날짜 클릭
    $day.find('> ul > li').click(function(){

        if (!$(this).hasClass('today')) { // 현재 날짜를 제외하고 추가
            
            $day.find('> ul > li.today').removeClass('today');
            $(this).addClass('today');

        }

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
