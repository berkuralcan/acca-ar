<template>
    <footer class="aar-footer">
        <div class="aar-footer__content">
            <img loading="lazy" width="86" heigth="52" src="../assets/images/logo.png" alt="" class="aar-footer__logo">
            <hr>
            <div class="aar-footer__contact">
                <a href="mailto:info@accadijital.com" class="aar-footer__contact-container">
                    <img loading="lazy" width="32" height="32" src="../assets/images/mail.png" alt="" class="aar-footer__contact-img">
                    <span class="aar-footer__contact-text">info@accadijital.com</span>
                </a>
                <a href="tel:00905393808050" class="aar-footer__contact-container">
                    <img loading="lazy" width="32" height="32" src="../assets/images/phone.png" alt="" class="aar-footer__contact-img">
                    <span class="aar-footer__contact-text">+90 539 380 80 50</span>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'ACFooter',
  data(){
      return {

      }
  }
}

</script>

<style scoped lang="scss">

  @import "../styles/core/variables.scss";

    footer.aar-footer{
        display: grid;
        grid-column: 1 / -1;
        height: $footer-height;
        grid-template-columns: inherit;
        background-color: black;
        color: white;


    }

    .aar-footer {
    
        &__content { 
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        grid-column: 2 / 12;
        }

        &__logo {

        }

        &__contact {
            display: flex;
            align-self: flex-end;

        }
        
        &__contact-container {
            display: flex;
            align-items: center;
            font-family: $main-font;
            color: white;
            text-decoration: none;
            font-size: 1.4rem;

            &:not(last-child) {
                margin-right: 3.5rem;
            }
        }
    }

    hr {
        width: 100%;
    }

    img.aar-footer__contact-img {
        margin-right: 1rem;
    }


    // Footer - Mobile Responsive

    @media screen and (max-width: $mobile-small){

    .footer.aar-footer{
        height: 13.8rem;
    }


    .aar-footer__contact {
        align-self: center;
    }
    
    .aar-footer__contact-container{
        display: flex;
        flex-direction: column;
    }

    span.aar-footer__contact-text {
        font-family: "Inter";
        font-size: 1.4rem;
        letter-spacing: -0.03em;
        margin-top: 2rem;
    }

    .aar-footer__logo{
        display: none;
    }

    hr{
        display: none;
    }
    
}

</style>
