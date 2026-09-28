(() => {
  const axes = NVQ.axes;
  const sourceQuestions = NVQ_QUESTIONS;

  const shuffle = (items) => {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const questions = shuffle(sourceQuestions);
  const answers = new Array(questions.length).fill(null);
  let qn = 0;

  const questionText = document.getElementById("question-text");
  const questionNumber = document.getElementById("question-number");
  const answerButtons = document.getElementById("answer-buttons");
  const backButton = document.getElementById("back-button");
  const progress = document.getElementById("progress");

  const answerClasses = [
    "stronglyAgree",
    "agree",
    "somewhatAgree",
    "neutral",
    "somewhatDisagree",
    "disagree",
    "stronglyDisagree"
  ];

  function renderQuestion() {
    const q = questions[qn];
    questionText.textContent = q.text;
    questionNumber.textContent = `Question ${qn + 1} of ${questions.length}`;
    progress.style.width = `${((qn + 1) / questions.length) * 100}%`;
    backButton.disabled = qn === 0;

    answerButtons.innerHTML = "";
    NVQ.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.className = `answer-button ${answerClasses[index]}`;
      button.textContent = answer.label;
      button.addEventListener("click", () => answerQuestion(answer.mult));
      answerButtons.appendChild(button);
    });
  }

  function answerQuestion(mult) {
    answers[qn] = mult;
    if (qn < questions.length - 1) {
      qn += 1;
      renderQuestion();
    } else {
      finish();
    }
  }

  function finish() {
    const raw = Object.fromEntries(axes.map((axis) => [axis.id, 0]));
    const max = Object.fromEntries(axes.map((axis) => [axis.id, 0]));

    questions.forEach((question, index) => {
      const mult = answers[index] ?? 0;
      axes.forEach((axis) => {
        const weight = question.effects?.[axis.id] ?? 0;
        raw[axis.id] += mult * weight;
        max[axis.id] += Math.abs(weight);
      });
    });

    const scores = {};
    axes.forEach((axis) => {
      scores[axis.id] = max[axis.id] === 0
        ? 50
        : Math.round(100 * (max[axis.id] + raw[axis.id]) / (2 * max[axis.id]));
    });

    const responseRecord = {
      version: NVQ.version,
      completedAt: new Date().toISOString(),
      scores,
      answers: questions.map((question, index) => ({
        id: question.id,
        response: answers[index]
      }))
    };

    sessionStorage.setItem("nvq_result", JSON.stringify(responseRecord));

    const params = new URLSearchParams();
    axes.forEach((axis) => params.set(axis.id, scores[axis.id]));
    window.location.href = `results.html?${params.toString()}`;
  }

  backButton.addEventListener("click", () => {
    if (qn > 0) {
      qn -= 1;
      renderQuestion();
    }
  });

  renderQuestion();
})();
