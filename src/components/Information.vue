<template>
    <div class="component-container">
        <div class="aar-infopage-left">
            <h2 class="aar-info-heading">Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p class="aar-info-text has-med-long-margin-bottom">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores consectetur nobis molestias repellendus, aspernatur praesentium. Molestiae accusantium repudiandae officia fugit magni eum sit ipsum, perspiciatis inventore ipsa porro dicta fugiat?</p>
        </div>
        <div class="aar-infopage-right">
            <h2 class="aar-info-heading">Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p class="aar-info-text has-med-long-margin-bottom">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores consectetur nobis molestias repellendus, aspernatur praesentium. Molestiae accusantium repudiandae officia fugit magni eum sit ipsum, perspiciatis inventore ipsa porro dicta fugiat?</p>        
            </div>
      
      <div class="infopage-final">
        <img loading="lazy" src="../assets/images/sofa.png" alt="A 3D Model of a sofa" class="aar-info__img">
        <router-link id="models" to="/models" class="is-button button-primary">Modelleri Görüntüle</router-link>
      </div>

    </div>
</template>


<script>
export default {
  name: 'InfoPage',
  methods: {
  },
}
</script>


<style scoped lang="scss">
  @import "../styles/core/variables.scss";
  @import "../styles/global/helpers.scss";
  @import "../styles/global/components.scss";

    .component-container{
        min-height: 70vh;

    }

  .aar-infopage-left{
      grid-column: 2 / 6;
  }

  .aar-infopage-right {
      grid-column: 7 / 11;
  }

  .infopage-final {
    display: none;
  }


    @media screen and (max-width: $mobile-small){
    .component-container{
        display: flex;
        flex-direction: column;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        padding-top: 4.2rem;
        padding-bottom: 4.2rem;
    }

    .infopage-final {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .aar-info__img{
        max-width: 50rem;
        margin-top: -10rem;
        margin-bottom: -10rem;
    }
    }


</style>
