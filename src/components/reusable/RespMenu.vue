<template>
    <div>
        <input type="checkbox" class="responsive-menu__checkbox mobile-scale" id="navigation-toggle">
            <label for="navigation-toggle" id="navigation-button" class="navigation-button">
                <span id="navigation-icon" class="navigation__icon"> </span>
             </label>
                
        <nav id="re" class="responsive-menu__navigation">
            <ul class="responsive-menu__navigation__list">
                <li v-scrollanimation @click="closeNav" class="responsive-menu__navigation__item"><router-link to="/info/">AR Çözümleri</router-link></li>
                <li v-scrollanimation @click="closeNav" class="responsive-menu__navigation__item "><router-link to="/models">Örnek Modeller</router-link></li>
            </ul>
        </nav>
    </div>


</template>

<script>
export default {
    methods: {
        closeNav: function() {
            document.getElementById("navigation-toggle").checked = false
        },
    }
}

</script>

<style scoped lang="scss">

@import "../../styles/core/variables.scss";
@import "../../styles/global/animations.scss";

.responsive-menu__checkbox{
    display: none;
}

.navigation-button{
    display: none;
    height: 7rem;
    width: 7rem;
    z-index: 2000;
    cursor: pointer;
}

.responsive-menu__checkbox:checked + .navigation-button {
    right: 3rem;
}

.navigation__icon {
    display: none;
    width: 3rem;
    height: 4px;
    background-color: white;
    border-radius: 3px;
    transition: all .2s;
}

.responsive-menu__navigation{
    position: absolute;
    right: 0;
    top: -3.3rem;
    background-color: white;
    height: 100vh;
    padding: 0 2rem;
    overflow: hidden;
    visibility: hidden;
    width: 0vw;
    transition: width .3s, visibility .001s;

  
}

.responsive-menu__checkbox:checked ~ .responsive-menu__navigation {
    display: flex;
    width: 40vw;
    flex-direction: column;
    visibility: visible;
    transition: all .2s;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 1999;
}



.responsive-menu__navigation__list{
    list-style: none;
    margin-top: 20rem;
    color: #393939;

}

.responsive-menu__navigation__item a{
    color: #393939;
    text-decoration: none;
}

.responsive-menu__navigation__item{
    font-family: "Inter";
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: -0.05em;
    margin-bottom: 5rem;
    text-decoration: none;
}

.navigation__icon::before {
    top: -.8rem;
    content: attr(data-before);
    position: absolute;
    left: 0;
    width: 3rem;
    height: 4px;
    background-color: white;
    display: inline-block;
    border-radius: 3px;
    transition: all .2s;

}

.navigation__icon::after {
    content: attr(data-after);
    position: absolute;
    top: .8rem;
    left: 0;
    width: 3rem;
    height: 4px;
    background-color: white;
    display: inline-block;
    transition: all .2s;
    border-radius: 3px;
}

.responsive-menu__checkbox:checked + .navigation-button .navigation__icon{
    background-color: black;
}

.responsive-menu__checkbox:checked + .navigation-button .navigation__icon::before{
    top: 0;
    z-index: 2000;
    transform: rotate(135deg);
    background-color: black;
}

.responsive-menu__checkbox:checked + .navigation-button .navigation__icon::after{
    top: 0;
    z-index: 2000;
    transform: rotate(-135deg);
    background-color: black;
}

.animation-enter{
    -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}


@media only screen and (max-width: 1000px) {

    .header-navigation {
        display: none;
    }
    .navigation-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .navigation__icon{
        display: inline-block;
        position: relative;
    }
}
</style>