window.onload = function () {
  //기획
  //모든 textarea에는 id가 부여되어있고
  //textarea를 keydown하면 입력후 3초를 세고 더이상 입력이 안들어오면 저장
  //textarea를 처음 입력할때 새로운 textarea를 생성하고
  //textarea에 입력값이 둘다 아무것도 없는 상태에서 focus가 out되면 두 textarea를 삭제

  //  localStorage.setItem(engInput.value, korInput.value);
  //   localStorage.removeItem(engWord.innerHTML);

  const korInputLength = document.querySelectorAll(
    ".input-box .korean-sentence"
  ).length;
  const korInput = document.querySelectorAll(".input-box .korean-sentence")[0];

  const engInput = document.querySelectorAll(".input-box .english-sentence")[0];
  const initialHeight = korInput.scrollHeight;

  console.log(korInput);
  korInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      korInput.style.height = `${korInput.scrollHeight + 10}px`;
    }
    if (event.keyCode === 8) {
      korInput.style.height = `${initialHeight}px`;
      korInput.style.height = `${korInput.scrollHeight}px`;
    }
  });
};
