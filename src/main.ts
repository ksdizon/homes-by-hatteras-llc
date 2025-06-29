import { loadHeader } from "./components/navigation/header";
import { loadHero } from "./components/index/hero";
import { loadTestimonials } from "./components/index/testimonials";
import { loadProjects } from "./components/index/projects";
import { TestimonialCarousel } from "./components/index/testimonial_carousel";
import { loadWhoWeAre } from "./components/index/wwa";

function main() {
  loadHeader();
  loadHero();
  loadWhoWeAre();
  loadProjects();
  loadTestimonials();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new TestimonialCarousel();
    });
  } else {
    // DOM is already loaded
    new TestimonialCarousel();
  }
}

main();