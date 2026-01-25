/**
 * Article Preview Component - 공유 버튼 기능
 * 
 * 이 파일은 공유 버튼을 클릭했을 때 소셜 미디어 공유 메뉴를 
 * 보여주거나 숨기는 기능을 담당합니다.
 */

// 페이지가 완전히 로드된 후에 실행 (마치 재료를 다 준비한 후 요리 시작)
document.addEventListener('DOMContentLoaded', function() {
  
  // 필요한 HTML 요소들을 찾아서 변수에 저장 (마치 요리 도구 준비)
  const shareButton = document.getElementById('shareButton');  // 공유 버튼
  const sharePopup = document.getElementById('sharePopup');    // 공유 팝업
  
  // 공유 버튼 클릭 이벤트 리스너 등록 (버튼을 누르면 실행됨)
  shareButton.addEventListener('click', function(event) {
    // 버튼 클릭이 다른 곳으로 전파되지 않도록 막기
    event.stopPropagation();
    
    // 공유 팝업을 보이거나 숨기기 (토글)
    // 'hidden' 클래스가 있으면 제거(보이기), 없으면 추가(숨기기)
    sharePopup.classList.toggle('hidden');
    
    // 버튼의 활성화 상태도 함께 토글
    // (활성화되면 배경색이 진한 파란색으로 변경)
    shareButton.classList.toggle('active');
  });
  
  // 페이지 다른 곳을 클릭하면 공유 팝업 닫기
  // (마치 메뉴 밖을 클릭하면 메뉴가 닫히는 것처럼)
  document.addEventListener('click', function(event) {
    // 클릭한 곳이 공유 버튼이나 팝업 안쪽이 아닌 경우
    if (!shareButton.contains(event.target) && !sharePopup.contains(event.target)) {
      // 팝업 숨기기
      sharePopup.classList.add('hidden');
      // 버튼 활성화 상태 제거
      shareButton.classList.remove('active');
    }
  });
  
  // ESC 키를 누르면 공유 팝업 닫기
  // (마치 대화 상자에서 ESC로 닫는 것처럼)
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      sharePopup.classList.add('hidden');
      shareButton.classList.remove('active');
    }
  });
  
});
