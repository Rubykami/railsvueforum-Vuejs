<template>
  <section class="main__welcomesection">
    <h1 class="main__welcomesection__welcome">Welcome to the AnimeWorld!</h1>
    <h2 class="main__welcomesection__comesignup">
      Feel free to sign up and join the discussion. It's free and takes 10
      seconds!
    </h2>
  </section>

  <form class="main__registerform" @submit.prevent="SubmitForm">
    <div class="main__registerform__div">
      <dt class="main__registerform__div__column">
        <label for="username" class="main__registerform__div__column__label">
          Username:
          <dfn class="main__registerform__div__column__dfn">Required</dfn>
        </label>
      </dt>
      <dd class="main__registerform__div__row">
        <input
          class="main__registerform__div__row__input"
          type="text"
          name="username"
          required
          v-model="FormValues.username"
        />
        <dfn class="main__registerform__div__row__dfn"
          >This is the name that will be shown with your messages. You may use
          any name you wish.</dfn
        >
      </dd>
    </div>
    <div class="main__registerform__div">
      <dt class="main__registerform__div__column">
        <label for="email" class="main__registerform__div__column__label">
          Email:
        </label>
        <dfn class="main__registerform__div__column__dfn">Required</dfn>
      </dt>
      <dd class="main__registerform__div__row">
        <input
          class="main__registerform__div__row__input"
          type="text"
          name="email"
          required
          v-model="FormValues.email"
        />
      </dd>
    </div>
    <div class="main__registerform__div">
      <dt class="main__registerform__div__column">
        <label for="password" class="main__registerform__div__column__label">
          Password:
          <dfn class="main__registerform__div__column__dfn">Required</dfn>
        </label>
      </dt>
      <dd class="main__registerform__div__row">
        <input
          class="main__registerform__div__row__input"
          type="password"
          name="password"
          required
          v-model="FormValues.password"
        />
        <meter
          class="main__registerform__div__row__meterpwd"
          :value="PwdMeterValue"
          min="0"
          verylow="5"
          max="50"
          low="10"
          high="25"
          optimum="50"
        />
        <div class="main__registerform__div__row__pwddiv">
          <span class="main__registerform__div__row__pwddiv__strength">{{
            PwdStrength
          }}</span>
        </div>
      </dd>
    </div>
    <div class="main__registerform__div">
      <dt class="main__registerform__div__column">
        <label for="dateofbirth" class="main__registerform__div__column__label">
          Date of Birth:
        </label>
        <dfn class="main__registerform__div__column__dfn">Required</dfn>
      </dt>
      <dd class="main__registerform__div__row__date">
        <select
          v-model="FormValues.month"
          name="selectinput"
          class="main__registerform__div__row__date__select"
        >
          <option
            class="main__registerform__div__row__date__select__option"
            value="0"
            selected
          ></option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="1"
          >
            Janeiro
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="2"
          >
            Fevereiro
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="3"
          >
            Março
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="4"
          >
            Abril
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="5"
          >
            Maio
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="6"
          >
            Junho
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="7"
          >
            Julho
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="8"
          >
            Agosto
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="9"
          >
            Setembro
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="10"
          >
            Outubro
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="11"
          >
            Novembro
          </option>
          <option
            class="main__registerform__div__row__date__select__option"
            value="12"
          >
            Dezembro
          </option>
        </select>
        <input
          v-model="FormValues.day"
          type="text"
          class="main__registerform__div__row__date__input__day"
          placeholder="Day"
          maxlength="2"
          minlength="1"
        />
        <input
          type="text"
          class="main__registerform__div__row__date__input__year"
          placeholder="Year"
          maxlength="4"
          minlength="4"
          v-model="FormValues.year"
        />
      </dd>
    </div>
    <div class="main__registerform__div">
      <dt class="main__registerform__div__column">
        <label
          for="verification"
          class="main__registerform__div__column__label"
        >
          Verification:
          <dfn class="main__registerform__div__column__dfn">Required</dfn>
        </label>
      </dt>
      <dd class="main__registerform__div__row">
        <span class="main__registerform__div__row__question">{{ ValidationQuestion.question }}</span>
        <input
          class="main__registerform__div__row__input"
          type="text"
          name="verification"
          required
          placeholder="Please answer the question above here"
          v-model="FormValues.questionanswer"
        />
      </dd>
    </div>
    <footer class="main__registerform__footer">
      <button class="main__registerform__footer__button">Register</button>
    </footer>
  </form>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";

let PwdStrength = "Entering a password is required.";

const PwdStrengthValues = {
  initialvalue: "Entering a password is required.",
  weak: "The chosen password could be stronger.",
  medium: "The chosen password could be stronger.",
  strong: "This is a reasonably strong password.",
  verystrong: "This is a very strong password.",
};

let PwdMeterValue = 0;

const FormValues = reactive({
  username: "",
  email: "",
  password: "",
  day: "",
  month: "",
  year: "",
  questionanswer: "",
});

const RandomNumber = Math.floor(Math.random() * 6);

const ValidationArray = [
  { question: "Which color is the sun?", answer: "Orange", id: 1 },
  { question: "What number comes next? 1,2,3,4...", answer: "5", id: 2 },
  { question: "What is 1 plus 1?", answer: "2", id: 3 },
  {
    question: "What are the last 3 letters in the word: keyboard?",
    answer: "ard",
    id: 4,
  },
  { question: "What color is the sky?", answer: "blue", id: 5 },
];

const ValidationQuestion = ValidationArray[RandomNumber];

watch(
  () => FormValues.password.length,
  () => {
    if (FormValues.password.length === 0) {
      PwdMeterValue = 0;
      PwdStrength = PwdStrengthValues.initialvalue;
    } else if (
      FormValues.password.length < 11 &&
      FormValues.password.length !== 0
    ) {
      PwdMeterValue = 5;
      PwdStrength = PwdStrengthValues.weak;
    } else if (
      FormValues.password.length > 11 &&
      FormValues.password.length < 20
    ) {
      PwdMeterValue = 10;
      PwdStrength = PwdStrengthValues.medium;
    } else if (
      FormValues.password.length > 20 &&
      FormValues.password.length < 30
    ) {
      PwdMeterValue = 20;
      PwdStrength = PwdStrengthValues.strong;
    } else if (
      FormValues.password.length > 30 &&
      FormValues.password.length < 40
    ) {
      PwdMeterValue = 50;
      PwdStrength = PwdStrengthValues.verystrong;
    }
  }
);

const SubmitForm = (event: any) => {
  switch (ValidationQuestion.question) {
    case ValidationArray[0].question:
      if (FormValues.questionanswer !== ValidationArray[0].answer) {
        alert("Incorrect Answer, please try again!");
        window.location.reload();
      }
    case ValidationArray[1].question:
      if (FormValues.questionanswer !== ValidationArray[1].answer) {
        alert("Incorrect Answer, please try again!");
        window.location.reload();
      }
      break;
    case ValidationArray[2].question:
      if (FormValues.questionanswer !== ValidationArray[2].answer) {
        alert("Incorrect Answer, please try again!");
        window.location.reload();
      }
      break;
    case ValidationArray[3].question:
      if (FormValues.questionanswer !== ValidationArray[3].answer) {
        alert("Incorrect Answer, please try again!");
        window.location.reload();
      }
      break;
    case ValidationArray[4].question:
      if (FormValues.questionanswer !== ValidationArray[4].answer) {
        alert("Incorrect Answer, please try again!");
        window.location.reload();
      }
      break;
  }
};
</script>

<style lang="scss">
.main {
  &__welcomesection {
    font-family: Raleway;
    text-align: center;
    margin: auto;
    width: 90vw;
    margin-top: 1rem;
    background-image: url(../assets/img/background.jpg);
    border-radius: 5px 5px 5px 5px;
    padding: 1rem;
    &__welcome {
      color: white;
      padding: 0.5rem;
      padding-bottom: 0rem;
    }
    &__comesignup {
      padding: 0.5rem;
      padding-top: 0rem;
      color: white;
    }
  }
  &__registerform {
    margin-bottom: 4rem;
    margin-top: 2rem;
    margin-right: 4rem;
    background-color: #42464d;
    margin-left: 4rem;
    &__footer {
      padding-top: 1rem;
      display: flex;
      justify-content: space-around;
      background: rgba(72, 77, 86, 0.9);
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      vertical-align: middle;
      padding-bottom: 10px;
      &__button {
        margin: auto;
        border-radius: 5px 5px 5px 5px;
        border: none;
        color: #fff;
        background: #0c7cd5;
        vertical-align: middle;
        height: 2rem;
        width: 10rem;
        &:hover {
          cursor: pointer;
        }
      }
    }
    &__div {
      display: flex;
      padding-right: 0.5rem;
      background-color: #383c42;
      &__column {
        border-radius: 5px 0px 0px 5px;
        padding-left: 30rem;
        background-color: #42464d;
        font-family: Roboto;
        justify-content: space-between;
        border-right: 1px solid rgba(255, 255, 255, 0.12);
        padding-right: 1rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        color: white;
        display: flex;
        flex-direction: column;
        width: 7vw;
        text-align: right;
        &__label {
        }
        &__dfn {
          text-align: right;
          color: #bcc0c7;
          font-style: normal;
          font-size: 0.8rem;
        }
      }
      &__row {
        align-self: center;
          padding-bottom: 2rem;
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          &__question {
            padding-top: 0.5rem;
            padding-bottom: 1rem;
          }
        &__input {
          &::placeholder {
            font-size: 1rem;
            font-family: Roboto;
          }
        }
        &__pwddiv {
          &__strength {
            margin-top: 5px;
            display: block;
            font-family: Raleway;
            font-size: 0.9rem;
          }
        }
        &__meterpwd {
          padding-top: 0.5rem;
          width: 100%;
          height: 1rem;
        }
        &__dfn {
          padding-top: 0.5rem;
          font-style: normal;
          color: #bcc0c7;
          font-family: Roboto;
          font-size: 0.8rem;
        }
        &:nth-child(2) {
          display: flex;
          flex-direction: column;
          color: white;
        }
        &__date {
          padding-top: 1.5rem;
          display: flex;
          gap: 2rem;
          &__input {
            &__day {
              width: 3rem;
              padding-left: 0.5rem;
              color: white;
              border: 1px solid rgba(255, 255, 255, 0.12);
              border-radius: 5px 5px 5px 5px;
              background: #42464d;
              outline: none;
              height: 2rem;
            }
            &__year {
              width: 5rem;
              padding-left: 0.5rem;
              color: white;
              border: 1px solid rgba(255, 255, 255, 0.12);
              background: #42464d;
              border-radius: 5px 5px 5px 5px;
              height: 2rem;
              outline: none;
            }
          }
          &__select {
            text-align: left;
            padding-left: 0.5rem;
            outline: none;
            background: #42464d;
            height: 2.3rem;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 5px 5px 5px 5px;
            background-image: url(../assets/img/select.svg);
            background-repeat: no-repeat;
            appearance: none;
            background-position: 100%;
            background-size: 0.9rem;
            width: 6rem;
          }
        }
        &__input {
          outline: none;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background-color: #42464d;
          height: 1.8rem;
          width: 49rem;
          border-radius: 5px 5px 5px 5px;
          color: white;
          font-size: 1.1rem;
          padding-left: 0.5rem;
        }
      }
    }
  }
}

.header__secondnavforum {
  display: none;
}
.header__firstnav__item {
  &:nth-child(1) {
    background-color: #2d3238;
    padding-bottom: 1rem;
  }
}
</style>
