<template>
    <div class="component-container">
        <div class="aar-model-left">
            <model-viewer 
                auto-rotate camera-controls
                data-js-focus-visible
                shadow-intensity="1"
                stage-light-intensity="3" environment-intensity="2"
                camera-orbit="180deg 65deg 3m"
                ar
                :poster="require(`../assets/images/${chosenModel.imgURL}`)"
                :src="`${publicPath}/models/${chosenModel.modelSRC[displayedVariant]}`"
                :ios-src="`${publicPath}/models/${chosenModel.iosSRC[displayedVariant]}`"
                class="aar-model-viewer">
            </model-viewer>
            <div v-if="chosenModel.variants.length > 0" class="centered-flex model-variants not-positioned">
                    <img  
                        class="model-variants__variant on-hover-scale pointer" 
                        height="40" width="40" 
                        v-for="(variant, index) in chosenModel.variants" 
                        :key="variant" 
                        :src="require(`../assets/images/variants/${variant}`)" 
                        alt="Variant for model"
                        @click="displayVariant(index)"
                    >
            </div>
        </div>
        <div class="aar-model-right">
            <p class="aar-exp__text hidden-desktop">Modeli Arttırılmış Gerçeklikte görüntülemek için butonu tıklayın.</p>
            <transition-group type="animation" enter-active-class="animate__animated animate__fadeIn" class="aar-model-right__grid-container" tag="div">
                <div class="grid-item on-hover-scale mobile-scale" v-for="model in models" :key="model.id" @click="changeModel(model)">
                    <img key="model.id" :src="require(`../assets/images/${model.imgURL}`)" class="grid-item__img">
                </div>
            </transition-group>
            <div class="aar-exp">
                <transition type="animation" enter-active-class="animate__animated animate__fadeIn animate__delay-1-8s" appear>
                    <ar-qr :text="getCurrentUrl()" :size="qrCodeSize"></ar-qr>
                </transition>
                <transition type="animation" enter-active-class="animate__animated animate__fadeIn animate__delay-2s" appear>
                    <p class="aar-exp__text">{{arExplanation}}</p>
                </transition>
            </div>
            
        </div>
    </div>

</template>

<script>
import { ModelViewer } from "@google/model-viewer"
import VueQRCodeComponent from 'vue-qr-generator'

export default {


    name: "ModelView",
    data(){
        return{
            publicPath: process.env.BASE_URL,
            chosenModel: "",
            displayedVariant: 0,
            qrCodeSize: 90,
            arExplanation: "Modeli arttırılmış gerçeklikte (AR) görüntülemek için QR kodunu mobil cihazınıza okutabilirsiniz."
            
        }
    },

    props: {
      models: Array
    },

    components: {
        ModelViewer: ModelViewer,
        arQr: VueQRCodeComponent
    },

    methods: {
        changeModel: function(model) {
            this.chosenModel = model
            this.displayedVariant = 0
            this.$router.replace("models$" + model.id)
        },

        displayVariant(index){
            if(this.displayedVariant === index) {
                return
            } else {
                this.displayedVariant = index
            }
        },

        getCurrentUrl: function() {
            const currentURL = window.location.href
            return currentURL
        }
    },

    created(){
        const modelID = this.$route.params.id
        this.chosenModel = this.models[modelID - 1]

    }

}
</script>

<style scoped lang="scss">
  @import "../styles/core/variables.scss";
  @import "../styles/global/helpers.scss";
  @import "../styles/global/components.scss";
  @import "../styles/global/animations.scss";

    .component-container{
        min-height: 70vh;
    }

  .aar-model-left{
      grid-column: 2 / 7;
  }

  .aar-model-right {
      grid-column: 7 / 12;

      &__grid-container{
          width: 100%;
          overflow-x: hidden;
          overflow-y: hidden;
          display: grid;
          gap: 2%;
          grid-template-columns: repeat(3, minmax(10rem, 15rem));

      }
  }

      .grid-item{
        
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 15rem;
        max-width: 15rem;
        background-color: #f5f5ff;
        user-select: none;
        cursor: pointer;

        &__img{
            max-width: 20rem;
        }
    }

    .aar-model-viewer{
        width: 100%;
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

    .aar-exp{
        display: flex;
        align-items: center;
        margin-top: 7rem;

        &__text{
            font-family: "Inter";
            font-size: 1.4rem;
            line-height: 140%;
            letter-spacing: -0.01em;
            margin-left: 2rem;
            max-width: 60%;
        }
    }

    model-viewer {
        height: 65.7rem;
    }


    // Tablet 

    @media screen and (max-width: $tablet-landscape) {
            .aar-model-right{
                grid-column: 7 / -1;
            }

            .grid-item__img{
                max-width: 15rem;
            }
        }
  
  
    @media screen and (max-width: $tablet-portrait) {
        .aar-model-right{
                grid-column: 7 / -1;
                padding-right: 16px;
        }

        .grid-item{
            max-height: 13rem;
            max-width: 13rem;
        }

       .grid-item__img{
                max-width: 10rem;
        }

    }


    // Mobile Responsive for mobile small

    @media screen and (max-width: $mobile-small) {
        .component-container {
            display: flex;
            flex-direction: column;
        }

        .aar-model-right__grid-container {
            display: flex;
            padding-left: 1.6rem;
            padding-bottom: 2.4rem;
            max-width: 100vw;
            overflow-x: scroll;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }
        }

        .aar-model-left{
            width: 100%;
        }

        model-viewer{
            height: 50vh;
        }

        .grid-item{
            width: 15rem;
            height: 15rem;
        }

        grid-item:not(:last-child){
            margin-right: 1rem;
        }

        .aar-exp {
            display: none;
        } 

        p.aar-exp__text{
            text-align: center;
            font-size: 1.4rem;
            line-height: 170%;
            letter-spacing: -0.01em;
            font-weight: 300;
            margin: 5rem auto;
            opacity: 0.5;
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


</style>
