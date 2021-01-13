<template>
  <div class="quizContainer">
    <h2>{{ this.quizData.question }}</h2>
    <ul>
      <li>
        <input type="radio" id="a" name="answer" /><label for="a">{{
          this.quizData.a
        }}</label>
      </li>
      <li>
        <input type="radio" id="b" name="answer" /><label for="b">{{
          this.quizData.b
        }}</label>
      </li>
      <li>
        <input type="radio" id="c" name="answer" /><label for="c">{{
          this.quizData.c
        }}</label>
      </li>
      <li>
        <input type="radio" id="d" name="answer" /><label for="d">{{
          this.quizData.d
        }}</label>
      </li>
    </ul>
    <button>Submit</button>
  </div>
</template>

<script>
export default {
  name: "quiz-app",
  data() {
    return {
      quizData: [
        {
          question: "How old is Dasol?",
          a: "10",
          b: "20",
          c: "30",
          d: "40",
          corrent: "c",
        },
        {
          question: "Where Dasol's from?",
          a: "Busan",
          b: "Seoul",
          c: "Tokyo",
          d: "Beijing",
          corrent: "b",
        },
        {
          question: "Who is the president of US?",
          a: "Obama",
          b: "Donald Trump",
          c: "Dasol",
          d: "Florin Pop",
          corrent: "2",
        },
        {
          question: "Who is the president of Korea?",
          a: "Jongeun Kim",
          b: "Dasol Jong",
          c: "Jaein Moon",
          d: "Donal Trump",
          corrent: "3",
        },
        {
          question: "How old is Wooyou?",
          a: "2",
          b: "4",
          c: "7",
          d: "9",
          corrent: "d",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.quizContainer {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  width: 400px;
  h2 {
    padding: 50px;
  }
  button {
    background-color: mediumpurple;
    border: none;
    color: white;
    display: block;
    font-family: inherit;
    width: 100%;
    padding: 1rem;
  }
}
</style>
