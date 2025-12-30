let questions = [];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function start() {
  const key = document.getElementById("chapter").value;

  // copy dữ liệu gốc
  questions = DATA[key].map(q => ({
    q: q.q,
    options: [...q.options],
    a: q.a
  }));

  // random câu
  shuffle(questions);

  // random đáp án
  questions.forEach(q => {
    const correct = q.options[q.a];
    shuffle(q.options);
    q.a = q.options.indexOf(correct);
  });

  render();
}

function render() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  questions.forEach((q, i) => {
    let html = `
      <div class="question-card">
        <p>Câu ${i + 1}: ${q.q}</p>
    `;

    q.options.forEach((opt, j) => {
      html += `
        <label class="option">
          <input type="radio" name="q${i}" value="${j}">
          ${opt}
        </label>
      `;
    });

    html += `</div>`;
    quiz.innerHTML += html;
  });
}
function toggleDark() {
  document.body.classList.toggle("dark");
}


function submitQuiz() {
  let score = 0;
  wrongQuestions = [];

  const wrongList = document.getElementById("wrong-list");
  wrongList.innerHTML = "";

  questions.forEach((q, i) => {
    const options = document.querySelectorAll(`input[name="q${i}"]`);
    let chosen = -1;

    options.forEach((opt, j) => {
      if (opt.checked) chosen = j;
    });

    options.forEach((opt, j) => {
      const label = opt.parentElement;

      // đáp án đúng
      if (j === q.a) {
        label.classList.add("correct");
      }

      // đáp án chọn sai
      if (j === chosen && chosen !== q.a) {
        label.classList.add("wrong");
      }
    });

    if (chosen === q.a) {
      score++;
    } else {
      wrongQuestions.push(q);

      const div = document.createElement("div");
      div.className = "wrong-item";
      div.innerHTML = `
        <p><b>❌ Câu ${i + 1}:</b> ${q.q}</p>
        <p class="correct-answer">
          👉 Đáp án đúng: ${q.options[q.a]}
        </p>
      `;
      wrongList.appendChild(div);
    }
  });

  document.getElementById("result").innerText =
    `Bạn đúng ${score}/${questions.length} câu`;

  if (wrongQuestions.length > 0) {
    const box = document.createElement("div");
    box.className = "wrong-box";
    box.innerHTML = "<h3>📌 Các câu bạn làm sai</h3>";
    box.appendChild(wrongList);
    document.getElementById("result").after(box);

    showRetryButton();
  }
}

