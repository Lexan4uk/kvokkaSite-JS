window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();      
    }
  
    resizableSwiper(
      '(max-width: 10000px)',
      '.slider-gal',
      {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.next-btn-gal',
          prevEl: '.prev-btn-gal',
        },
        grid: {
          fill: 'row',
          rows: 2,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
            grid: {
              fill: 'row',
              rows: 1,
            },
            
          },
          769: {
            slidesPerView: 3,
            grid: {
              fill: 'row',
              rows: 2,
            },

          },
          1600: {
            slidesPerView: 4,
          }
        }
      }
    );

    resizableSwiper(
      '(max-width: 10000px)',
      '.slider-1',
      {
        slidesPerView: 4,
        navigation: {
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        },
        breakpoints: {
            0: {
              spaceBetween: 20,
              direction: 'vertical',
            },
            768: {
              direction: 'horizontal',
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 29,
            }
        }
        
        
      }
    );
    
});