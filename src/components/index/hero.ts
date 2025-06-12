export function loadHero() {
  document.querySelector("#hero")!.innerHTML = `
  <section id="hero-section" class="h-screen w-full flex items-center justify-center">
    <div class="text-center text-white max-w-4xl px-8">
      <h1 class="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-shadow-strong tracking-tighter leading-none mb-6">
        Lorem ipsum dolor sit
      </h1>
      
      <p class="font-light text-lg md:text-xl lg:text-2xl text-shadow-soft mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, deleniti?
      </p>
      
      <a href="#who-we-are" class="bg-white text-slate-900 px-5 py-2 rounded-xl font-semibold text-base tracking-wide shadow-xl hover:bg-amber-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        Explore
      </a>
    </div>
  </section>
  `
}