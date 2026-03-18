// TODO: TIL 폼 등록 기능을 구현하세요
// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.

const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  // 입력된 값을 가져오기
  const date = document.getElementById('til-date').value;
  const title = document.getElementById('til-title').value;
  const content = document.getElementById('til-content').value;

  // 새로운 리스트 아이템 생성
  const listItem = document.createElement('li');
  listItem.className = 'til-item';

  // 내부에 들어갈 내용을 구성
  listItem.innerHTML = `
    <article class="item-header">
      <time>[${date}]</time>
      <h3>${title}</h3>
      <button type="button" class="delete-btn">삭제</button>
      <p>${content.replace(/\n/g, '<br>')}</p>
    </article>
    <hr>
  `;

  // 삭제 버튼을 찾아 이벤트를 붙인다.
  const deleteBtn = listItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
    if (confirm('정말 삭제하시겠습니까?')) {
      // 해당 리스트 아이템을 화면에서 제거
      listItem.remove();
    }
  });

  // 목록의 아래에 항목 추가
  tilList.append(listItem);

  // 추가 후 폼 초기화
  tilForm.reset();
});
