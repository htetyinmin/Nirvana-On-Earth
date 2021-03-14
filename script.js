$(document).ready(function () {
    
    // Plugin start
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    // Plugin end \
    
    // popup Gallery 
    $('.gallerys').magnificPopup({
        type:'image',
        delegate: 'a',
        gallery:{
              enabled:true
        }
    })

    //playhightlight
    $('.video_link').magnificPopup({
        type:'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
          
            patterns: {
              youtube: {
                index: 'youtube.com/',
          
                id: 'v=', 
          
                src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }
          
              
          
            },
          
            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
          }
    })
    //end playhighlight
    // popup Gallery End

    var toTop = document.querySelector(".to-top")

    window.addEventListener("scroll",()=>{
      if(window.pageYOffset>100){
            toTop.classList.add("active")
      }else{
            toTop.classList.remove("active")
      }
})

});