<template>
  <div class="quizContainer">
    <h2>{{ this.quizData[currentQuiz].question }}</h2>
    <ul>
      <li>
        <input type="radio" id="a" name="answer" /><label for="a">{{
          this.quizData[currentQuiz].a
        }}</label>
      </li>
      <li>
        <input type="radio" id="b" name="answer" /><label for="b">{{
          this.quizData[currentQuiz].b
        }}</label>
      </li>
      <li>
        <input type="radio" id="c" name="answer" /><label for="c">{{
          this.quizData[currentQuiz].c
        }}</label>
      </li>
      <li>
        <input type="radio" id="d" name="answer" /><label for="d">{{
          this.quizData[currentQuiz].d
        }}</label>
      </li>
    </ul>
    <button @click="loadQuiz">Submit</button>
  </div>
</template>

<script>
export default {
  name: "quiz-app",
  data() {
    return {
      currentQuiz: 0,
      score: 0,
      quizData: [
        {
          question: "How old is Dasol?",
          a: "10",
          b: "20",
          c: "30",
          d: "40",
          correct: "c",
        },
        {
          question: "Where Dasol's from?",
          a: "Busan",
          b: "Seoul",
          c: "Tokyo",
          d: "Beijing",
          correct: "b",
        },
        {
          question: "Who is the president of US?",
          a: "Obama",
          b: "Donald Trump",
          c: "Dasol",
          d: "Florin Pop",
          correct: "2",
        },
        {
          question: "Who is the president of Korea?",
          a: "Jongeun Kim",
          b: "Dasol Jong",
          c: "Jaein Moon",
          d: "Donal Trump",
          correct: "3",
        },
        {
          question: "How old is Wooyou?",
          a: "2",
          b: "4",
          c: "7",
          d: "9",
          correct: "d",
        },
      ],
    };
  },
  methods: {
    loadQuiz: function () {
      // if () {
      //
      // }

      console.log(this.currentQuiz);
      this.currentQuiz = this.currentQuiz + 1;
      console.log(this.currentQuiz);
    },
  },
};
</script>

<style lang="scss">
.quizContainer {
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
</style>
