<template>
    <div class="ac-accordion-container">
            <details v-for="text in texts" :key="text.id"> 
                <summary> {{text.question}} </summary>
                <div class="content">
                        {{text.answer}}
                </div>
            </details>
    </div>
</template>

<script>
export default {
    name: "acAcordion",
    props: {
        texts: {
            type: Array
        }
    },

    methods: {
        animateAcAcordions() {
            class Acordion {
                constructor(element) {
                    this.element = element
                    this.summary = element.querySelector('summary')
                    this.content = element.querySelector('.content')

                    this.animation = null
                    this.isClosing = false
                    this.isExpanding = false
                    this.summary.addEventListener('click', (e) => this.onClick(e))
                    }

                onClick(e) {
                    e.preventDefault()
                    this.element.style.overflow = 'hidden'
                    if(this.isClosing || !this.element.open) {
                        this.open()
                    } else if (this.isExpanding || this.element.open) {
                        this.close()
                    }
                }

                close() {
                    this.isClosing = true

                    const startHeight = `${this.element.offsetHeight}px`
                    const endHeight = `${this.summary.offsetHeight}px`

                    if (this.animation) {
                        this.animation.cancel()
                    }

                    this.animation = this.element.animate({
                        height: [startHeight, endHeight]
                    }, {
                        duration: 400,
                        easing: 'ease-out'
                    })

                    this.animation.onfinish = () => this.endAnimation(false);
                    this.animation.oncancel = () => this.isClosing = false
                }

                open() {
                    this.element.style.height = `${this.element.offsetHeight}px`;
                    this.element.open = true;
                    window.requestAnimationFrame(() => this.expand());
                }

                expand() {
                    this.isExpanding = true;
                    const startHeight = `${this.element.offsetHeight}px`
                    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`

                    if (this.animation) {
                        this.animation.cancel();
                    }

                    this.animation = this.element.animate({
                        height: [startHeight, endHeight]
                    }, {
                        duration: 400,
                        easing: 'ease-out'
                    })

                    this.animation.onfinish = () => this.endAnimation(true)
                    this.animation.oncancel = () => this.isExpanding = false
                }

                endAnimation(open) {
                    this.element.open = open;
                    this.animation = null;
                    this.isClosing = false;
                    this.isExpanding = false;
                    this.element.style.height = this.element.style.overflow = '';  
                }
            }

            document.querySelectorAll('details').forEach((element) => {
                new Acordion(element);
            });

        },

        createAcordionElements(){

        }
    },

    mounted(){
        this.animateAcAcordions()
    }
}
</script>

<style lang="scss" scoped>

      @import "../../styles/core/variables.scss";


    details > summary{
        list-style: none  !important;
        list-style-type: none;
        }

    details summary::-webkit-details-marker{
        displaY: none;
        }

    summary::marker{
        display: none !important;
    }
    details > summary::marker{
        font-size: 0px;
        display: none !important;
    }

    .ac-accordion-container{
        font-family: inherit;;

        & summary {
            padding: 3.6rem 0;
            font-size: 2.4rem;
            font-weight: 500;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: space-between;            
            letter-spacing: -0.02em;
            cursor: pointer;
            flex-basis: 80%;

            &::-webkit-details-marker{
                display: none;
            }

            &::marker{
                display: none !important
            }

            &::after{
                content: "+";
                color: #c4c4c4;
                float: none;
                font-size: 2.4rem;
                justify-content: flex-end;
                align-self: center;
                align-items: center;
                display: flex;
                flex-basis: 15%;
                position: relative;
                bottom: 50%;

            }

            &:focus{
                outline: none;
            }
        }

        & details{
            color: #282828;
            font-size: 1.8rem;
            line-height: 160%;
            list-style: none;

            & > summary::-webkit-details-marker{
                display: none;
            }


            &:not(:first-child){
                border-top: 2px solid #c4c4c4;
            }

            &[open] {
                margin-bottom: 3.6rem;
            }

            &[open] summary::after{
                content: "-";
            }
        }
    }

    @media screen and (max-width: $mobile-small){
        & summary::after{
                display: none;
            }

    } 

</style>