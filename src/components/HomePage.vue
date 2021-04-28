<template>
    <div height="80vh" class="component-container">
        <div class="aar-homepage-left">
            <transition type="animation" enter-active-class="animate__animated animate__fadeInLeft" appear>   
                <h2 class="aar-heading has-margin-bottom">Dijital Pazarlama Stratejinize Yeni Bir Boyut Ekleyin.</h2>
            </transition>
            <transition type="animation" enter-active-class="animate__animated animate__fadeInLeft animate__delay-02s " appear>   
                <p class="aar-text has-med-long-margin-bottom">Arttırılmış Gerçeklik (AR) deneyimleri, ürünlerinizi müşterilerinize çok daha farklı, çok daha modern ve çok daha keyifli bir şekilde tanıtmanızı sağlıyor. Sunduğunuz ürün veya hizmet ne olursa olsun, yeni nesil web ve uygulama deneyimleri yaratmanıza yardımcı olabiliriz. </p>
            </transition>
            <div class="button-row">
                <transition type="animation" enter-active-class="animate__animated animate__slideInUp animate__delay-06s" appear>
                    <router-link id="models" to="/models" class="is-button button-primary mobile-scale">Modelleri Görüntüle</router-link>
                </transition>
                <transition type="animation" enter-active-class="animate__animated animate__slideInUp animate__delay-08s" appear>
                    <router-link id="info" to="/info" class="is-button button-secondary mobile-scale">Detaylı Bilgi</router-link>
                </transition>
            </div>
        </div>
        <div class="aar-homepage-right">
            <model-viewer 
                auto-rotate camera-controls
                data-js-focus-visible
                shadow-intensity="1"
                stage-light-intensity="3" environment-intensity="2"
                camera-orbit="180deg 65deg 3m"
                ar
                :poster="require(`../assets/images/sofa.png`)"
                src="https://ar.accadijital.com/models/sofa/leather/Sofa.gltf"
                class="aar-homepage-right__mv">
            </model-viewer>
        </div>
    </div>
</template>


<script>
  import { ModelViewer } from "@google/model-viewer";

export default {
  name: 'HomePage',
  data(){
      return {
      publicPath: process.env.BASE_URL,
    }
  },   
  methods: {
  },
  components: {
      ModelViewer: ModelViewer,
  }
}
</script>


<style scoped lang="scss">
  @import "../styles/core/variables.scss";
  @import "../styles/global/helpers.scss";
  @import "../styles/global/components.scss";


    .component-container{
        overflow: hidden;
    }
  .aar-homepage-left{
      grid-column: 2 / 7;
  }

  .aar-homepage-right {
      grid-column: 7 / 12;

  }

model-viewer {
    height: 65.7rem;
    width: 100%;
    }


  // Mobile responsive

  @media screen and (max-width: $mobile-small){
    .component-container{
        display: flex;
        flex-direction: column-reverse;
        overflow-y: none;
    }

    .aar-homepage-right__img, .ar-homepage-right__mv{
        max-width: 50rem;
        margin-bottom: -10rem;
    }

    model-viewer{
        max-height: 35rem;
    }

    .aar-homepage-right{
        width: 100%;
    }

}


</style>
