<template>
    <div class="component-container">
        <div class="aar-model-left">
            <img :src="require(`../assets/images/${chosenModel.imgURL}`)" class="grid-item__img">
            <model-viewer 
                ar
                :src="'../assets/models/' + chosenModel.modelSRC"
                class="aar-model-viewer">
            </model-viewer>
            <div v-if="chosenModel.variants.length > 0" class="centered-flex">
                I am display'ed.
            </div>
        </div>
        <div class="aar-model-right">
            <p class="aar-exp__text hidden-desktop">Modeli Arttırılmış Gerçeklikte görüntülemek için butonu tıklayın.</p>
            <div class="aar-model-right__grid-container">
                <div class="grid-item on-hover-scale" v-for="model in models" :key="model.id" @click="changeModel(model)">
                    <img :src="require(`../assets/images/${model.imgURL}`)" class="grid-item__img">
                </div>
            </div>
            <div class="aar-exp">
                <ar-qr :text="getCurrentUrl()" :size="qrCodeSize"></ar-qr>
                <p class="aar-exp__text">{{arExplanation}}</p>
            </div>
            
        </div>
    </div>

</template>

<script>
import ModelViewer from "@google/model-viewer"
import VueQRCodeComponent from 'vue-qr-generator'


export default {


    name: "ModelView",
    data(){
        return{
            
            chosenModel: "",
            qrCodeSize: 102,
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
            this.$router.replace("models$" + model.id)
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
      grid-column: 2 / 6;
  }

  .aar-model-right {
      grid-column: 7 / 12;

      &__grid-container{
          width: 100%;
          min-height: 55rem;
          overflow-x: hidden;
          overflow-y: hidden;
          display: grid;
          gap: 1.2%;
          grid-template-columns: repeat(3, minmax(10rem, 20rem));

      }
  }

      .grid-item{

        background-color: #f5f5ff;
        user-select: none;
        cursor: pointer;

        &__img{
            max-width: 20rem;
        }
    }

    .aar-model-viewer{
        border: 1px solid red;
        width: 100%;
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
        width: 86rem;
        height: 65.7rem;
    }


    // Mobile Responsive for mobile small

    @media screen and (max-width: $mobile-small) {
        .component-container {
            display: flex;
            flex-direction: column;
        }

        .aar-model-right__grid-container {
            display: flex;
            max-width: 100vw;
            overflow-x: scroll;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .grid-item{
            width: 15rem;
            height: 15rem;

        }

        .aar-exp {
            display: none;
        } 

        p.aar-exp__text{
            text-align: center;
            font-weight: 300;
            margin: 5rem auto;
        }
    }


</style>
