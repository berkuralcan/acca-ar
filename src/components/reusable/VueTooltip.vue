<template>
  <span @mouseover="isShowingExplanation = true" @mouseleave="isShowingExplanation = false" class="b-v-tooltip">
      <slot></slot>
      <span class="b-v-tooltip__explanation" v-if="isShowingExplanation">{{explanation}}</span>
  </span>
</template>

<script>
export default {
  data(){
    return{
      isShowingExplanation: false,
    }
  },
  props: {
      explanation: String
  }
}
</script>

<style lang="scss">
  @import "../../styles/core/variables.scss";

  .b-v-tooltip{
      position: absolute;
      left: 11%;
      background-color: $color-font-gray;
      width: 1.3rem;
      height: 1.3rem;
      font-size: 1rem;
      border-radius: 50%;
      color: white;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      cursor: pointer;

      &__explanation {
        position: absolute;
        display: block;
        color: black;
        font-size: 1.4rem;
        font-weight: 500;;
        width: 100rem;
        left: 120%;
        bottom: 20%;
        background-color: white;
        border: 1px solid #838383;
        padding: 1rem;
      }
  }
</style>
