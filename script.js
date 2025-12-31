const chapterSelect = document.getElementById("chapterSelect");
const quizDiv = document.getElementById("quiz");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

for (const key in CHAPTERS) {
  if (DATA[key]) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = `${CHAPTERS[key]} (${DATA[key].length} câu)`;
    chapterSelect.appendChild(opt);
  }
}

let questions = [];

function getQuestionsByChapter() {
  const chap = chapterSelect.value;
  if (chap === "all") {
    return Object.keys(CHAPTERS)
      .filter(k => DATA[k])
      .flatMap(k => DATA[k]);
  }
  return DATA[chap] || [];
}

startBtn.onclick = () => {
  questions = getQuestionsByChapter()
    .sort(() => Math.random() - 0.5)
    .slice(0, 20); // đổi số câu nếu muốn

  renderQuiz();
  submitBtn.style.display = "block";
  resultDiv.innerHTML = "";
};

function renderQuiz() {
  quizDiv.innerHTML = "";

  questions.forEach((q, i) => {
    quizDiv.innerHTML += `
      <div class="question-card">
        <p><b>Câu ${i + 1}:</b> ${q.q}</p>
        ${q.options.map((opt, j) =>
          `<label>
            <input type="radio" name="q${i}" value="${j}">
            ${opt}
          </label><br>`
        ).join("")}
      </div>
    `;
  });
}

submitBtn.onclick = () => {
  let correct = 0;
  let wrongList = [];

  questions.forEach((q, i) => {
    const card = document.querySelectorAll(".question-card")[i];
    const chosen = document.querySelector(`input[name="q${i}"]:checked`);

    if (chosen && +chosen.value === q.a) {
      correct++;
      card.classList.add("correct");
    } else {
      card.classList.add("wrong");
      wrongList.push({
        question: q.q,
        right: q.options[q.a]
      });
    }
  });

  let html = `<h2>🎯 Kết quả: ${correct}/${questions.length}</h2>`;

  if (wrongList.length > 0) {
    html += `<div id="wrongBox"><h3>❌ Các câu làm sai</h3>`;
    wrongList.forEach((w, i) => {
      html += `
        <p>
          <b>Câu ${i + 1}:</b> ${w.question}<br>
          ✅ <span class="correct">${w.right}</span>
        </p>
      `;
    });
    html += `</div>`;
  } else {
    html += `<p class="correct">🎉 Tuyệt đối chính xác!</p>`;
  }

  resultDiv.innerHTML = html;
};

function toggleDark() {
  document.body.classList.toggle("dark");

  // lưu trạng thái
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
  );
}
