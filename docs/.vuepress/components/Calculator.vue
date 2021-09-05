<template>
  <form id="calculator">
    <h3>Điểm trung bình trong lớp</h3>
    <h4>Lớp 10</h4>
    <input type="number" placeholder="Môn 1" v-model="tenthGrade.firstScore" />
    <input type="number" placeholder="Môn 2" v-model="tenthGrade.secondScore" />
    <input type="number" placeholder="Môn 3" v-model="tenthGrade.thirdScore" />
    <h4>Lớp 11</h4>
    <input
      type="number"
      placeholder="Môn 1"
      v-model="eleventhGrade.firstScore"
    />
    <input
      type="number"
      placeholder="Môn 2"
      v-model="eleventhGrade.secondScore"
    />
    <input
      type="number"
      placeholder="Môn 3"
      v-model="eleventhGrade.thirdScore"
    />
    <h4>Lớp 12</h4>
    <input type="number" placeholder="Môn 1" v-model="twelveGrade.firstScore" />
    <input
      type="number"
      placeholder="Môn 2"
      v-model="twelveGrade.secondScore"
    />
    <input type="number" placeholder="Môn 3" v-model="twelveGrade.thirdScore" />
    <h3>Điểm ưu tiên</h3>
    <input type="checkbox" name="gifted" />
    <label for="gifted">Trường chuyên</label>
    <input type="checkbox" name="avg" v-model="average" />
    <label for="avg">{{
      average ? "Tính điểm trung bình" : "Không tính điểm trung bình"
    }}</label>
    <br />
  </form>
  <button @click="calculate">Calculate</button>

  {{ result }}
</template>


<script>
export default {
  data() {
    return {
      tenthGrade: {
        firstScore: 0,
        secondScore: 0,
        thirdScore: 0,
      },
      eleventhGrade: {
        firstScore: 0,
        secondScore: 0,
        thirdScore: 0,
      },
      twelveGrade: {
        firstScore: 0,
        secondScore: 0,
        thirdScore: 0,
      },
      result: 0,
      average: true,
    };
  },
  methods: {
    calculate: function () {
      // calculate sum of obj
      function sum(obj) {
        var sum = 0;
        for (var el in obj) {
          if (obj.hasOwnProperty(el)) {
            sum += parseFloat(obj[el]);
          }
        }
        return sum;
      }

      let calculatedTotal = 0;

      if (this.average) {
        calculatedTotal =
          (sum(this.tenthGrade) +
            sum(this.eleventhGrade) +
            sum(this.twelveGrade)) /
          9;
      } else {
        calculatedTotal =
          sum(this.tenthGrade) +
          sum(this.eleventhGrade) +
          sum(this.twelveGrade);
      }

      this.result = calculatedTotal;
      return calculatedTotal;
    },
  },
};
</script>

<style lang="scss">
</style>