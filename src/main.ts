import { loadHeader } from "./components/navigation/header";
import { loadHero } from "./components/index/hero";
import { loadTestimonials } from "./components/index/testimonials";
import { loadProjects } from "./components/index/projects";

function main() {
  loadHeader();
  loadHero();
  loadProjects();
  loadTestimonials();
}

main();