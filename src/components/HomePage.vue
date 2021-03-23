<template>
    <div class="component-container">
        <div class="aar-homepage-left">
            <h2 class="aar-heading has-margin-bottom">Lorem Ipsum</h2>
            <p class="aar-text has-med-long-margin-bottom">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores consectetur nobis molestias repellendus, aspernatur praesentium. Molestiae accusantium repudiandae officia fugit magni eum sit ipsum, perspiciatis inventore ipsa porro dicta fugiat?</p>
            <div class="button-row">
                <router-link id="models" to="/models" class="is-button button-primary">Modelleri Görüntüle</router-link>
                <router-link id="info" to="/info" class="is-button button-secondary">Detaylı Bilgi</router-link>
            </div>
        </div>
        <div class="aar-homepage-right">
            <img loading="lazy" src="../assets/images/sofa.png" alt="A 3D Model of a sofa" class="aar-homepage-right__img">
        </div>
    </div>
</template>


<script>
export default {
  name: 'HomePage',
  methods: {
  },
}
</script>


<style scoped lang="scss">
  @import "../styles/core/variables.scss";
  @import "../styles/global/helpers.scss";
  @import "../styles/global/components.scss";

  .aar-homepage-left{
      grid-column: 2 / 7;
  }

  .aar-homepage-right {
      grid-column: 7 / 11;

    &__img{
        transition: all .5s;
    }

    &__img:hover {
    transform:
      translate3d(0px, -16px, 0px)
      rotateX(44deg)
      rotateZ(67deg);
  }
  }

  // Mobile responsive

  @media screen and (max-width: $mobile-small){
    .component-container{
        display: flex;
        flex-direction: column-reverse;
    }

    .aar-homepage-right__img{
        max-width: 50rem;
        margin-bottom: -10rem;
    }
}



</style>
