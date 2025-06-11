import { Swiper } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export class TestimonialCarousel {
  private swiper: Swiper | null = null;

  constructor() {
    this.init();
  }
  
  private init(): void {
    // Initialize Swiper
    this.swiper = new Swiper('.testimonial-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      },
    });
  }

  // Method to destroy the swiper instance if needed
  public destroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
      this.swiper = null;
    }
  }

  // Method to go to a specific slide
  public goToSlide(index: number): void {
    if (this.swiper) {
      this.swiper.slideTo(index);
    }
  }

  // Method to go to next slide
  public nextSlide(): void {
    if (this.swiper) {
      this.swiper.slideNext();
    }
  }

  // Method to go to previous slide
  public prevSlide(): void {
    if (this.swiper) {
      this.swiper.slidePrev();
    }
  }
}