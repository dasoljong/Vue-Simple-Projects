<template>
  <div class="quizAppContainer">
    <div class="quizContentContainer">
      <h2>{{ this.quizData[currentQuiz].question }}</h2>
      <ul>
        <li>
          <input type="radio" id="a" class="answer" name="answer" /><label
            for="a"
            >{{ this.quizData[currentQuiz].a }}</label
          >
        </li>
        <li>
          <input type="radio" id="b" class="answer" name="answer" /><label
            for="b"
            >{{ this.quizData[currentQuiz].b }}</label
          >
        </li>
        <li>
          <input type="radio" id="c" class="answer" name="answer" /><label
            for="c"
            >{{ this.quizData[currentQuiz].c }}</label
          >
        </li>
        <li>
          <input type="radio" id="d" class="answer" name="answer" /><label
            for="d"
            >{{ this.quizData[currentQuiz].d }}</label
          >
        </li>
      </ul>
      <button @click="loadQuiz">Submit</button>
    </div>
    <div class="finalScore">
      <p>{{ this.finalScore }}</p>
      <button @click="startReset">다시풀기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "quiz-app",
  data() {
    return {
      currentQuiz: 0,
      score: 0,
      selectedAnswer: undefined,
      finalScore: "",
      quizData: [
        {
          question: "다솔이의 생일은?",
          a: "7월 6일",
          b: "7월 8일",
          c: "7월 10일",
          d: "7월 12일",
          correct: "b",
        },
        {
          question: "다솔이 전화번호 뒷자리는?",
          a: "8738",
          b: "8737",
          c: "9896",
          d: "9897",
          correct: "d",
        },
        {
          question: "다솔이 차 번호는?",
          a: "19수 3861",
          b: "19수 3681",
          c: "17수 3861",
          d: "17수 3681",
          correct: "d",
        },
        {
          question: "우유 나이는?",
          a: "7",
          b: "8",
          c: "9",
          d: "10",
          correct: "c",
        },
        {
          question: "우리 사귄 날짜는?",
          a: "9월 18일",
          b: "9월 19일",
          c: "9월 20일",
          d: "9월 21일",
          correct: "b",
        },
      ],
    };
  },
  methods: {
    loadQuiz: function () {
      const answers = document.querySelectorAll(".answer");

      // 선택된 값 확인하기
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
          this.selectedAnswer = answers[i].id;
          answers[i].checked = false;
        }
      }
      // 선택된 값 확인하기 끝

      // 정답일경우? 1점씩 더해라
      if (this.selectedAnswer == this.quizData[this.currentQuiz].correct) {
        this.score++;
      }
      // 정답일경우? 1점씩 더해라 끝
      if (this.selectedAnswer == undefined) {
        alert("정답을 선택해주세요.");
      } else if (this.currentQuiz + 1 == this.quizData.length) {
        const quizContent = document.querySelector(".quizContentContainer");
        const finalScore = document.querySelector(".finalScore");

        quizContent.classList.add("active");
        finalScore.classList.add("active");

        if (this.score === this.quizData.length) {
          this.finalScore = `아주 잘했어요! 퍼펙트!`;
        } else {
          this.finalScore = `최종 점수는 ${this.score}/${this.quizData.length}...고작?`;
        }
      } else {
        this.currentQuiz = this.currentQuiz + 1; // 다음 문제
        this.selectedAnswer = undefined;
      }
    },
    startReset: function () {
      const quizContent = document.querySelector(".quizContentContainer");
      const finalScore = document.querySelector(".finalScore");

      quizContent.classList.remove("active");
      finalScore.classList.remove("active");
      this.currentQuiz = 0;
      this.score = 0;
      this.selectedAnswer = undefined;
    },
  },
};
</script>

<style lang="scss">
.quizAppContainer {
  .quizContentContainer {
    width: 400px;
    background-color: #fff;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    margin: 200px auto;
    vertical-align: middle;

    h2 {
      padding: 30px 30px;
    }

    ul {
      list-style-type: none;

      li {
        input {
          margin-right: 5px;
        }
      }
    }

    button {
      background-color: mediumpurple;
      border: none;
      color: white;
      display: block;
      font-family: inherit;
      width: 100%;
      padding: 1rem;
      cursor: pointer;
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: rebeccapurple;
    }
  }
  .quizContentContainer.active {
    display: none;
  }
  .finalScore {
    display: none;
    width: fit-content;
    background-color: #fff;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 300px auto;
    vertical-align: middle;
    padding: 10px 20px;
  }
  .finalScore.active {
    display: block;
    button {
      background-color: mediumpurple;
      border: none;
      color: white;
      display: block;
      font-family: inherit;
      width: 100%;
      padding: 5px;
      cursor: pointer;
      transition-duration: 0.5s;
      border-radius: 10px;
    }
    button:hover {
      background-color: rebeccapurple;
    }
  }
}
</style>
