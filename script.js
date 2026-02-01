/**
 * Article Preview Component - 공유 버튼 기능
 * 
 * 이 파일은 공유 버튼을 클릭했을 때 소셜 미디어 공유 메뉴를 
 * 보여주거나 숨기는 기능을 담당합니다.
 * 모바일에서는 카드 하단 전체를 덮는 공유 바로 표시되고,
 * 데스크톱에서는 버튼 위에 팝업으로 표시됩니다.
 */

// 페이지가 완전히 로드된 후에 실행 (마치 재료를 다 준비한 후 요리 시작)
document.addEventListener('DOMContentLoaded', function() {
  
  // 필요한 HTML 요소들을 찾아서 변수에 저장 (마치 요리 도구 준비)
  const shareButton = document.getElementById('shareButton');              // 공유 버튼
  const mobileShareBar = document.getElementById('mobileShareBar');        // 모바일용 공유 바
  const mobileShareButtonClose = document.getElementById('mobileShareButtonClose'); // 모바일 닫기 버튼
  const sharePopup = document.getElementById('sharePopup');                // 데스크톱용 공유 팝업
  
  // 화면 크기 확인 함수 (모바일인지 데스크톱인지 판단)
  // 768px 미만이면 모바일, 이상이면 데스크톱
  function isMobile() {
    return window.innerWidth < 768; // md 브레이크포인트 기준
  }
  
  // 공유 버튼 클릭 이벤트 리스너 등록 (버튼을 누르면 실행됨)
  shareButton.addEventListener('click', function(event) {
    // 버튼 클릭이 다른 곳으로 전파되지 않도록 막기
    event.stopPropagation();
    
    if (isMobile()) {
      // 모바일: 카드 하단 전체를 덮는 공유 바 토글
      // 공유 바가 현재 숨겨져 있는지 확인
      const isHidden = mobileShareBar.classList.contains('hidden');
      
      if (isHidden) {
        // 공유 바 열기: 카드 하단에 공유 바 보이기 (마치 서랍 열기)
        mobileShareBar.classList.remove('hidden');
        shareButton.classList.add('active');
      } else {
        // 공유 바 닫기: 공유 바 숨기기 (마치 서랍 닫기)
        mobileShareBar.classList.add('hidden');
        shareButton.classList.remove('active');
      }
    } else {
      // 데스크톱: 버튼 위에 팝업 토글
      sharePopup.classList.toggle('hidden');
      // 버튼의 활성화 상태도 함께 토글 (배경색 변경)
      shareButton.classList.toggle('active');
    }
  });
  
  // 모바일 공유 바의 닫기 버튼 클릭 이벤트
  if (mobileShareButtonClose) {
    mobileShareButtonClose.addEventListener('click', function(event) {
      event.stopPropagation();
      // 모바일 공유 바 닫기: 공유 바 숨기기
      mobileShareBar.classList.add('hidden');
      shareButton.classList.remove('active');
    });
  }
  
  // 페이지 다른 곳을 클릭하면 공유 팝업/바 닫기
  // (마치 메뉴 밖을 클릭하면 메뉴가 닫히는 것처럼)
  document.addEventListener('click', function(event) {
    // 클릭한 곳이 공유 버튼이나 팝업/바 안쪽이 아닌 경우
    if (!shareButton.contains(event.target) && 
        !sharePopup.contains(event.target) && 
        !mobileShareBar.contains(event.target)) {
      
      // 모바일 공유 바 숨기기
      mobileShareBar.classList.add('hidden');
      
      // 데스크톱 팝업 숨기기
      sharePopup.classList.add('hidden');
      
      // 버튼 활성화 상태 제거
      shareButton.classList.remove('active');
    }
  });
  
  // ESC 키를 누르면 공유 팝업/바 닫기
  // (마치 대화 상자에서 ESC로 닫는 것처럼)
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      mobileShareBar.classList.add('hidden');
      sharePopup.classList.add('hidden');
      shareButton.classList.remove('active');
    }
  });
  
  // 화면 크기가 변경될 때 (창 크기 조절 시)
  // 모바일 ↔ 데스크톱 전환 시 열려있는 메뉴 닫기
  window.addEventListener('resize', function() {
    mobileShareBar.classList.add('hidden');
    sharePopup.classList.add('hidden');
    shareButton.classList.remove('active');
  });
  
});
