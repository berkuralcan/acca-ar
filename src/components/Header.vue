<template>
    <header class="aar-header">
        <div class="aar-header__content centered-flex">
            <router-link to="/">
                <img src="../assets/images/logo.png" loading="lazy" width="86" heigth="52" alt="Website Logo" class="aar-header__logo">
            </router-link>
            <nav class="aar-header__navigation">
                <router-link to="/info" class="aar-header__navigation-link">AR Çözümleri</router-link>
                <router-link to="/models" class="aar-header__navigation-link">Örnek Modeller</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'ACHeader',
  data(){
      return {

      }
  },
  methods: {
  },
}
</script>

<style scoped lang="scss">
  @import "../styles/core/variables.scss";
  @import "../styles/global/helpers.scss";
  
  .aar-header{
      height: $header-height;
      grid-column: 1 / -1;
      background-color: black;
      display: grid;
      grid-template-columns: inherit;
      align-items: center;

      &__content{
          font-family: $main-font;
          grid-column: 2 / 12;
          width: 100%;
        justify-content: space-between;
        
      }

      &__navigation {


          &-link {
              font-size: 1.4rem;
              color: white;
              cursor: pointer;
              user-select: none;
              text-decoration: none;

            &:not(:last-child) {
                margin-right: 3.8rem;
            }

            &:hover{
                transform: scale(1.1);
            }

            &:active{
                transform: scale(.96);
            }
          }
      }
  }

  a.aar-header__navigation-link:hover{
     transform: scale(1.1);
  }

  a.aar-header__navigation-link:active{
      transform: scale(.96);
      outline: none;
  }


  @media screen and (max-width: $mobile-small){
      .aar-header__navigation {
          display: none;
      }
  }
</style>
