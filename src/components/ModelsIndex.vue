<template>
     <transition-group tag="div" type="animation" enter-active-class="scale-up-center" appear class="component-container grid-auto-flow">
            <router-link 
                v-for="model in models" 
                :key="model.id" 
                class="grid-item" 
                :to="{name: 'modelView', params: {id: model.id, model: model}}" 
                >
                <img :src="require(`../assets/images/${model.imgURL}`)" class="grid-item__img">
            </router-link>
        </transition-group>
</template>


<script>



export default {
  name: 'ModelsIndex',
  data(){
      return {
          chosenModel: {},
          modelList: this.models
      }
  },
  methods: {
      chooseModel: function(model) {
          this.chosenModel = model
          this.$emit("modelSelected", this.chosenModel)
      }
  },

  props: {
      models: Array
  },

}
</script>


<style scoped lang="scss">
  @import "../styles/core/variables.scss";
  @import "../styles/global/helpers.scss";
  @import "../styles/global/components.scss";
  @import "../styles/global/animations.scss";



    .grid-auto-flow {
          width: 100%;
          grid-template-columns: repeat(3, minmax(20rem, 45rem));
          justify-self: center;
          padding: 2rem;
          cursor: pointer;
          overflow: visible;
          margin-bottom: 2rem;
          justify-content: center;
    }
    .grid-item{
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: #f8f8f8;
        user-select: none;

        &__img{
            width: 35rem;
            height: 35rem;
        }
    }


    .grid-item:nth-child(2){
        animation-delay: .4s;
    }
    .grid-item:nth-child(3) {
        animation-delay: .6s;
    }
    .grid-item:nth-child(4) {
        animation-delay: .8s;
    }
    .grid-item:nth-child(5) {
        animation-delay: 1s;
    }
    .grid-item:nth-child(6) {
        animation-delay: 1.2s;
    }
    .grid-item:nth-child(7) {
        animation-delay: 1.4s;
    }
    .grid-item:nth-child(8) {
        animation-delay: 1.6s;
    }
    .grid-item:nth-child(9) {
        animation-delay: 1.8s;
    }


    @media screen and (max-width: $mobile-small){

        .grid-item{
            transition: all .2s;
        }
        .grid-item:active{
            transform: scale(.96)
        }
    }

</style>