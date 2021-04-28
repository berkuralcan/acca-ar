<template>
     <transition-group tag="div" type="animation" enter-active-class="scale-up-center" appear class="component-container grid-auto-flow">
            <router-link 
                v-for="model in models" 
                :key="model.id" 
                class="grid-item on-hover-scale mobile-scale" 
                :to="{name: 'modelView', params: {id: model.id, model: model}}" 
                >
                <img :src="require(`../assets/images/${model.imgURL}`)" class="grid-item__img">
                <div v-if="model.variants.length > 0" class="centered-flex model-variants">
                    <img class="model-variants__variant" height="40" width="40" v-for="variant in model.variants" :key="variant" :src="require(`../assets/images/variants/${variant}`)" alt="Variant for model">
                </div>
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
          grid-template-columns: repeat(auto-fill, minmax(42rem, 1fr));
          grid-template-rows: 1fr;
          justify-self: center;
          padding: 2rem;
          cursor: pointer;
          overflow: visible;
          position: relative;

    }


    .grid-item{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        background-color: #f8f8f8;
        user-select: none;
        transition: all .2s;
        position: relative;


        /* The "before" pseudo-element trick keeps the grid items as perfect squares  */

        &::before {
            content: "";
            padding-bottom: 100%;
            display: block;
        }


        &__img{
            width: 100%;
            align-self: center;
            position: absolute;
            top: 0; left: 0;
            height: 100%;

        }
    }

    .model-variants{
    position: absolute;
    bottom: 2.3rem;
    left: 40%;
    justify-content: center;

    &__variant{
        &:not(:last-child) {
            margin-right: 1.5rem;
        }
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


/* TABLET RESPONSIVE */

@media screen and (max-width: $tablet-portrait) {
    .model-variants{
        left: 45%;
    }
}
    
/* MOBILE RESPONSIVE */

@media screen and (max-width: $mobile-small){
    .grid-auto-flow {
          grid-template-columns: unset;
    }


    .grid-item{
        height: auto;
        transition: all .2s;


        &__img{
            width: 100%;
            height: auto;
        }
    }

    .model-variants {
        left: 38%;

    }
    
    .grid-item:active{
        transform: scale(.96)
    }
}

</style>