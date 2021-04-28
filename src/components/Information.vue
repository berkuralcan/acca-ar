<template>
    <div class="component-container">

        <!-- FIRST SECTION -->

        <div class="aar-infopage-left">
            <transition type="animation" enter-active-class="animate__animated animate__fadeInUp" appear>
              <h2 class="aar-info-heading">Arttırılmış Gerçeklik (AR) ve 3D modeller ile, ürünlerinizi müşterilerinize kusursuz şekilde aktarın.</h2>
            </transition>
            <transition-group type="animation" enter-active-class="animate__animated animate__fadeInUp animate__delay-04s" appear>
              <p key="1" class="aar-info-text has-small-margin-bottom">Web siteleri ve uygulamalar, ürünlerinizi müşterilerinize sunmak için kullanabileceğiniz en etkili yollar arasında yer alıyor. Ama; yazı, görsel ve videolardan oluşan 'geleneksel' web siteleri, ürün ve hizmetlerinizin yalnızca belli boyutlarını gösterebiliyor.</p>
              <p key="2" class="aar-info-text has-med-long-margin-bottom">ACCA AR olarak sunduğumuz çözümler, dijital mecralardaki varlığınızı bu yöntemlerin ötesine götürmeyi mümkün kılıyor. Bu platformlarda ürünlerinize ekstra bir boyut katmak, ürünlerinizi site ve uygulamalarınız üzerinde üç boyutlu ve arttırılmış gerçeklik formatlarında göstermek için size yardımcı olabiliriz.</p>
            </transition-group>
        </div>

        <div class="aar-infopage-right">
            <model-viewer
                id="model-viewer-hidden-mobile"
                auto-rotate camera-controls
                data-js-focus-visible
                shadow-intensity="1"
                stage-light-intensity="3" environment-intensity="2"
                camera-orbit="180deg 65deg 3m"
                ar
                src="https://ar.accadijital.com/models/sofa/leather/Sofa.gltf"
                class="aar-infopage-right__mv">
                <div class="lazy-load-poster" id="poster-1" slot="poster"></div>
            </model-viewer>
        </div>

         <!-- END FIRST SECTION -->
         
         <!-- SECOND SECTION -->
        

        <div class="aar-info-page-bg has-med-long-margin-bottom">
          <div class="aar-info-page-bg__left">
            <model-viewer
                auto-rotate camera-controls
                data-js-focus-visible
                shadow-intensity="1"
                stage-light-intensity="3" environment-intensity="2"
                camera-orbit="180deg 65deg 3m"
                ar
                loading="lazy"
                src="https://ar.accadijital.com/models/soda-can/Soda-can.gltf"
                class="aar-infopage-right__mv">
                <div class="lazy-load-poster" id="poster-2" slot="poster"></div>
            </model-viewer>
          </div>
            <div class="aar-info-page-bg__right">
              <h2 class="aar-info-heading is-white">Arttırılmış Gerçeklik (AR) nedir? Nasıl çalışıyor?</h2>
              <p key="1" class="aar-info-text is-white has-small-margin-bottom">Arttırılmış Gerçeklik (Augmented Reality - AR), kullanıcıların üç boyutlu modelleri gerçek bir ortamda deneyimlemesini sağlayan heyecan verici bir teknoloji. Mobil cihazların kameraları aracılığıyla çalışan AR teknolojisi, ürünlerinizi bu kameranın görüntülediği alanda sergilemenizi mümkün kılıyor.</p>
              <p key="2" class="aar-info-text is-white has-small-margin-bottom">Mobilya satan bir işletmeniz olduğunu varsayalım. Web sitenize sattığınız bir kanepenin üç boyutlu modelini yüklediğinizde, kullanıcılar telefon ve tabletleriyle bu kanepeyi kendi salonlarında, oturma odalarında veya tercih ettikleri herhangi bir yaşan alanında görüntüleyebiliyor.</p>
              <p key="3" class="aar-info-text is-white">AR teknolojisinin çalışma prensiplerini, örnek modellerimiz sayfasındaki tüm modellerinizden kendi mobil cihazlarınızla test edebilirsiniz.</p>
            </div>
        </div>

         <!-- END SECOND SECTION -->

         <!-- THIRD SECTION -->

        <div class="aar-infopage-left">
              <h2 class="aar-info-heading mobile-margin-section-heading">Gerçekçi. Etkileyici. Esnek.</h2>
              <p key="1" class="aar-info-text has-small-margin-bottom">Ürünlerinizi yalnızca video ve görseller olarak değil, arttırılmış gerçeklikte de görüntülenebilecek modeller olarak sunmak, işletmeniz için pek çok fayda sağlıyor. Müşterileriniz, web üzerinden ürünlerinizi çok daha detaylı olarak inceleyebiliyor, AR teknolojisi sayesinde satın almayı düşündüğü bir ürünün kendi evinde nasıl duracağını önceden hayal edebiliyor.</p>
              <p key="2" class="aar-info-text has-small-margin-bottom">Tüm bunların ötesinde, AR teknolojisi araştırma ve alışveriş sürecini bir deneyime dönüştürüyor. Yalnızca bu teknolojinin sunulması bile, markanızı rakiplerden ayıracak, müşterilerinizin sizi hatırlamasını sağlayacak önemli bir kriter haline geliyor. </p>
              <p key="3" class="aar-info-text has-med-long-margin-bottom">Üstelik, AR'ın kullanım alanları yalnızca tüketicilere sunulan ürünlerle sınırlı değil. Arttırılmış Gerçeklik dünya genelinde şirket içinde ürün gamı tanıtmaktan teknik eğitimlere kadar pek çok kurumsal alanda kullanılıyor. </p>
        </div>

        <div class="aar-infopage-right">
            <model-viewer
                auto-rotate camera-controls
                data-js-focus-visible
                shadow-intensity="1"
                stage-light-intensity="3" environment-intensity="2"
                camera-orbit="180deg 65deg 3m"
                ar
                src="https://ar.accadijital.com/models/sofa/leather/Sofa.gltf"
                class="aar-infopage-right__mv">
                <div class="lazy-load-poster" id="poster-1" slot="poster"></div>
            </model-viewer>
        </div>

         <!-- END THIRD SECTION -->

        <!-- MODEL PERFORMANCE SECTION -->

        <div class="aar-info-page-bg has-med-long-margin-bottom">

          <div class="aar-info-page__comparison_text">
             <h2 class="aar-info-heading is-white">Üç Odak Noktamız: Kalite - Performans - Hız.</h2>
              <p key="1" class="aar-info-text is-white has-small-margin-bottom">
                Nasıl bir deneyim oluşturursanız oluşturun, kullanıcılar web sitenizin açılmasını yaklaşık beş saniye bekliyor. Bu, oluştuduğunuz etkileyici sayfaların, daha kullanıcı tarafından görülmeden kapatılması riski demek. 
              </p>
              <p key="2" class="aar-info-text is-white has-small-margin-bottom">
                3D Modeller ve bunların web üzerinde görüntülenemsi yeni bir konu değil. Ancak bu deneyimler, genellikle yüksek boyutlu, tarayıcıları zorlayan, yavaş yüklenen dosyalara dayanıyor.
              </p>
              <p key="3" class="aar-info-text is-white has-small-margin-bottom">
                Acca AR olarak kullandığımız sıkıştırma ve optimizasyon teknolojileri, modellerinizin kaliteden ödün verilmeden, yüksek performans ve hız ile yüklenmesini, müşteri ve çalışanlarınıza kusursuz bir deneyim yaratmanızı sağlıyor. Bu da, kullanıcılarınız için keyifli bir deneyim; sizin için ise düşen depolama ve server masrafları anlamına geliyor.
              </p>
              <p id="mobile-final" key="4" class="aar-info-text is-white has-med-long-margin-bottom ">
                Aşağıda, özel olarak web için optimize edilmemiş bir model ile, Acca AR tarafından optimize edilmiş bir modelin yüklenme - kullanım sürelerini karşılaştırabilirsiniz.
              </p>
          </div>

          <div class="aar-info-page-bg__left">
            <model-viewer
                auto-rotate camera-controls
                data-js-focus-visible
                shadow-intensity="1"
                stage-light-intensity="3" environment-intensity="2"
                camera-orbit="180deg 65deg 3m"
                ar
                loading="lazy"
                reveal="interaction"
                src="https://ar.accadijital.com/models/soda-can/Soda-can.gltf"
                style="outline: 2px solid #cc4040"
                class="aar-infopage-right__mv">
                 <div id="button-load" slot="poster">Modeli Yükle</div>
                <div class="lazy-load-poster" id="poster-2" slot="poster"></div>
            </model-viewer>
            <p style="text-align: center; font-size: 16px; margin-top: 1rem; margin-bottom: 2rem;" class="aar-info-text is-white">Web ve AR için optimize edilmemiş model</p>
          </div>
            <div class="aar-info-page-bg__right">
            <model-viewer
                auto-rotate camera-controls
                data-js-focus-visible
                shadow-intensity="1"
                stage-light-intensity="3" environment-intensity="2"
                camera-orbit="180deg 65deg 3m"
                ar
                style="outline: 2px solid #40cccc"
                loading="lazy"
                reveal="interaction"
                src="https://ar.accadijital.com/models/soda-can/Soda-can.gltf"
                class="aar-infopage-right__mv">
                <div id="button-load" slot="poster">Modeli Yükle</div>
                <div class="lazy-load-poster" id="poster-2" slot="poster"></div>
            </model-viewer>
              <p style="text-align: center; font-size: 16px; margin-top: 1rem;" class="aar-info-text is-white">Acca AR tarafından Web ve AR için optimize edilmiş model</p>
        </div>
        </div>

        <!-- END MODEL PERFORMANCE SECTION -->

      <h2 class="aar-info-heading acordion-heading">Sık Sorulan Sorular</h2>
      <ac-acordion class="ac-acordion" :texts=texts></ac-acordion>
    </div>
</template>


<script>
    import { ModelViewer } from "@google/model-viewer";
    import acAcordion from "./reusable/acAcordion.vue"


export default {
  name: 'InfoPage',
  data(){
    return {
      texts: [{
              id:0,
              question: "AR Teknolojisinin ne gibi kullanım alanları olabilir?",
              answer: "Arttırılmış Gerçeklik, kullanım alanı açısından neredeyse sınırsız potansiyel taşıyor. Müşterilerin satın alıp evlerine, ofislerine veya zaman geçirdikleri başka bir alana yerleştireceği ürünler konusunda, arttırılmış gerçeklik başka hiçbir mecranın sunamayacağı bir imkan yaratıyor. Kullanıcılar, AR teknolojisi sayesinde ürünü bu yaşam alanlarında doğrudan görüntüleyip, kendilerine uygun tercihleri yapabiliyor. Özellikle renk - boyut - malzeme gibi alternatifler sunduğunuz durumlarda, müşterilerinizin tercih edeceği ürünü seçmesi ve kafasında canlandırması çok daha kolay hale geliyor."
            },
            {
              id: 1,
              question: "AR teknolojisinin hayatı kolaylaştıracağı ve alışverişi daha keyifli bir deneyim haline getireceği noktalar ile neyi kastediyorsunuz?", 
              answer:`Özellikle internet üzerinden, ürünleri fiziksel olarak görmeden alışveriş yaptığınızda, AR teknolojisinin sağlayacağı avantajların sayısı oldukça fazla. Evinize istediğiniz ürünün, hayal ettiğiniz bölgeye sığıp sıpmayacağını görmekten, bu tarz ürünlerin evinizin içinde nasıl gözükeceğine kadar pek çok soru, AR sayesinde saniyeler içinde cevaplanabiliyor. Bu sayede, "Bu bulaşık makinesi / buzdolabı benim mutfağımdaki boşluğa sığar mı?", "Bu gardrop yatak otamı çok küçültür mü? Ferah bir oda için hangi boyutu tercih etmeliyim?", "Bu kütüphane, salonumdaki diğer mobilyalarla uyumlu durur mu? Uyumlu durması için, farklı renk alternatiflerinden hangisini seçmeliyim?, "Bu tablo, evimdeki diğer tabloların yanında nasıl gözükür? Bunu diğerleri ile nasıl bir araya getirebilirim?" gibi sorular, AR sayesinde gerçeğe yakın cevaplar buluyor.`
            },
            {
              id: 2,
              question: "AR sadece son tüketiciyi mi hedefliyor? Kurumsal kullanım alanları var mı?", 
              answer:"AR'ın son kullanıcı için kullanımları çok bariz olsa da, bu teknoloji dünya genelinde pek çok kurumsal şirket tarafından da benimseniyor. Arttırılmış Gerçeklik, özellikle ürün odaklı eğitimlerde ve teknik malzeme, cihaz ve bileşenlerin tanıtımında kullanılabiliyor. "
            },
            {
              id: 3,
              question: "Arttırılmış Gerçeklik (AR) teknolojisini kullanmak için herhangi bir cihaz gerekiyor mu? AR teknolojisi bilgisayarlarda nasıl çalışıyor?", 
              answer:"Arttırılmış Gerçeklik teknolojisi, tüm modern cep telefonlarında ve tabletlerde çalışıyor. AR teknolojisinin çalışma prensibi, gösterilen ürünü kamerayla çekilen bir ortama dijital olarak yerleştirmeye dayanıyor. Bu nedenle, ürünlerinizin üç boyutlu modelleri bilgisayarlardan görüntülenebilse de, AR deneyimi bu cihazlarda yaratılamıyor."
            },
            {
              id: 4,
              question: "Model ve AR ürünlerini müşterilerimize nasıl ulaştıracağız?", 
              answer:"Model ve AR ürünlerinin kullanıcılara sunulması konusundaki tüm süreçler sizin tercihinize kalıyor. Acca AR olarak, ürünlerinizi mevcut siteniz / uygulamanız vasıtasıyla kullanıcılarınıza ulaştırabildiğimiz gibi, sizin için sıfırdan web siteleri ve uygulamalar da hazırlayabiliyoruz. Tercih etmeniz durumunda, AR deneyimini ayrı bir site veya alt alan adı üzerinden de sunabiliyoruz (showroom.siteniz.com veya ar.siteniz.com gibi)."
            },
            
            {
              id: 5,
              question: "Ürünlerimizi bu şekilde sunmaya karar verirsek, süreç nasıl ilerliyor?", 
              answer:"Sizin tek yapmanız gereken, hangi ürün ve servislerinizi üç boyutlu model / arttırılmış gerçeklik olarak sunmak istediğinize karar vermek. Geri kalan tüm adımlar bizim sorumluluğumuzda. Ürün ve hizmet listeniz bize ulaştıktan sonra, seçtiğiniz ürünler üç boyutlu olarak modelleniyor, web sitenize / uygulamalarınıza ekleniyor ve arttırılmış gerçeklik üzerinden kullanıcılara sunuluyor. "
            },
            {
              id:6,
              question: "Ürünlerimizin daha önceden hazırlanmış üç boyutlu modellerinin olması, süreci hızlandırır mı?",
              answer: "Bu sorunun cevabı, mevcut modellerinizin yapısına göre değişiklik gösteriyor. Daha önceden hazırlanmış üç boyutlu modellerin olması modelleme aşamasını hızlandırabilecek olsa da, bunların web üzerinden sunulması için farklı şekillerde yeniden yaratılması gerekiyor. Elinizde web için optimize edilmiş üç boyutlu modeller varsa, bu durum süreci hızlandırıyor. Bunun dışındaki modeller için, proje aşamasında modellerin incelenmesi gerekiyor."
            },
      ]
    }
  },
  methods: {
  },
  components: {
    ModelViewer: ModelViewer,
    acAcordion: acAcordion
  }
}
</script>


<style scoped lang="scss">
  @import "../styles/core/variables.scss";
  @import "../styles/global/helpers.scss";
  @import "../styles/global/components.scss";
  @import "../styles/global/animations.scss";

  *{
    row-gap: 0 !important
  }

  .component-container{
    align-items: flex-start;
    padding-top: 2%;

}

  .aar-infopage-left{
    grid-column: 2 / 7;
  }
  
  .aar-infopage-right{
    grid-column: 7 / 12;
  }

  .aar-infopage-right{
  }

  .aar-info-page-bg{
    grid-column: 1 / -1;
    background-color: #111111;
    display: grid;
    grid-template-columns: inherit;
    padding: 8.4rem 0;
    column-gap: inherit;


    &__left{
      grid-column: 2 / 7;
    }

    &__right{
      grid-column: 7 / 12;
    }
  }

  .aar-info-page__comparison_text{
    grid-column: 3 / 11;
  }

    // Model Viewer

  .aar-infopage-right__mv{
    max-height: 50vh;
  }

  .acordion-heading{
    grid-column: 3 / span 3;
  }

  .ac-acordion{
    grid-column: 3 / 11;
  }

  // MODEL VIEWER ADDITIONAL PROPERTIES

  .lazy-load-poster{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    --poster-color: transparent;
  }

  #poster-1{
    background-image: url('https://ar.accadijital.com/img/sofa.12d7e06c.png');
  }

  #poster-2{
    background-image: url('https://ar.accadijital.com/img/soda-can.e85772b0.png');
  }


  #button-load {
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-color: #fff;
    color: black;
    cursor: pointer;
    border-radius: 6px;
    display: inline-block;
    box-shadow: 0 0 8px rgba(0,0,0,.2), 0 0 4px rgba(0,0,0,.25);
    padding: 1rem 2rem;
    font-weight: 500;
    font-size: 1.6rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 100;
  }

  .infopage-final {
    display: none;
  }

  // Helpers

  .is-white{
    color: white;
  }

  model-viewer {
        height: 65.7rem;
        width: 100%;
    }

  @media screen and (max-width: $mobile-small){
    .component-container{
        display: flex;
        flex-direction: column;

        padding-top: 4.2rem;
        padding-bottom: 4.2rem;
    }

    #model-viewer-hidden-mobile{
      display: none;
    }

    .aar-infopage-left .aar-info-text:last-child{
      margin-bottom: 4.2rem;
    }

    .aar-infopage-right .aar-info-text:last-child{
      margin-bottom: 4.2rem;
    }

    .mobile-margin-section-heading{
      margin: 4.2rem 0;
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
  
    .mobile-margin-bottom {
        margin-bottom: 3rem;

    }
      
      .aar-infopage-left, .aar-infopage-right, .aar-info-page-bg, .ac-acordion, .acordion-heading{
        padding-left: 1.6rem;
        padding-right: 1.6rem;      
      }

      .acordion-heading{
        margin-top: 2rem;
      }


      .aar-info-page-bg{
        display: flex;
        flex-direction: column;
      
      }

      .aar-infopage-right{
        width: 100%;
      }

      #mobile-final {
        margin-bottom: 2rem;
      }
            }




</style>
