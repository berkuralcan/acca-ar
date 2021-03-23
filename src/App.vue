<template>
  <div class="global-container">
    <div class="main-container">
      <ACHeader></ACHeader>
        <router-view
          :models="models"
        ></router-view>
      <ACFooter></ACFooter>
    </div>
  </div>  
</template>

<script>
import ACHeader from './components/Header.vue'
import ACFooter from './components/Footer.vue'
import models from "./models"


export default {
  name: 'App',
  data(){
    return {
      models: models
    }
  },



  components: {
      ACHeader: ACHeader,
      ACFooter: ACFooter
  }
}
</script>

<style lang="scss">
  
  @import "styles/core/variables.scss";
  @import "styles/core/resets.scss";
  @import "styles/global/background.scss";
  @import "styles/global/helpers.scss";
  @import "styles/core/typography.scss";

</style>
