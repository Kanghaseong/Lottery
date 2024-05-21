document
  .getElementById("generate-btn")
  .addEventListener("click", generateLottoNumbers);
document.getElementById("reset-btn").addEventListener("click", resetResults);

function generateLottoNumbers() {
  const countInput = document.getElementById("lotto-count");
  const count = parseInt(countInput.value, 10);
  const results = [];

  if (isNaN(count) || count < 1 || count > 100) {
    alert("1에서 100 사이의 숫자를 입력하세요.");
    return;
  }

  for (let i = 0; i < count; i++) {
    let numbers = [];
    while (numbers.length < 6) {
      let num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    numbers.sort((a, b) => a - b); // 오름차순으로 정렬
    results.push(numbers.join(", "));
  }

  const resultDiv = document.getElementById("result");
  results.forEach((result) => {
    const p = document.createElement("p");
    p.classList.add("result-item"); // 각 결과에 클래스 추가
    p.textContent = result;
    resultDiv.appendChild(p);
  });
}

function resetResults() {
  document.getElementById("result").innerHTML = "";
}
