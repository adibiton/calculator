<template>
  <form v-on:submit.prevent="onSubmit">
    <fieldset>
      <div class="input-group">
        <input v-model="firstNumber" type="number">
      </div>
      <div class="input-group">
        <div><select v-model="operation">
          <option>*</option>
          <option>/</option>
          <option>+</option>
          <option>-</option>
        </select>
        </div>
      </div>
      <div class="input-group">
        <input v-model="secondNumber" type="number">
      </div>
      <button v-on:click="updateProduct">calculate</button>
      <h5>Result</h5>
      <div class="input-group product">
        <input type="string" readonly v-model="product">
      </div>
    </fieldset>
    <div class="remarks">
      <h6>Remarks</h6>
      <ul>
        <li>works with whole numbers</li>
        <li>works on strings - meaning can work on very large numbers without approx.</li>
        <li>based on <a href="https://www.npmjs.com/package/string-calc">string-calc</a></li>
      </ul>
    </div>

  </form>
</template>

<script>
  const calculator = require('string-calc')

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        firstNumber: '',
        secondNumber: '',
        operation: '*',
        product: '',
        onSubmit: () => true
      }
    },
    methods: {
      updateProduct () {
//        const product = this.firstNumber + this.secondNumber
        switch (this.operation) {
          case '*':
            this.product = calculator.mul(this.firstNumber, this.secondNumber)
            break
          case '+':
            this.product = calculator.sum(this.firstNumber, this.secondNumber)
            break
          case '-':
            this.product = calculator.sub(this.firstNumber, this.secondNumber)
            break
          case '/':
            this.product = calculator.div(this.firstNumber, this.secondNumber)
            break
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .remarks {
    text-align: left;
  }

  .input-group.product {
    width: 75%;

    > input {
      width: 100%;
    }
  }

  form {
    width: 50%;
    margin: auto;
  }
</style>
