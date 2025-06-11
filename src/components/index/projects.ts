export function loadProjects() {
  document.querySelector("#projects")!.innerHTML = `
  <section id="Projects" class="h-full bg-gray-100 py-20 px-6">
    <div class="max-w-7xl mx-auto p-5 pb-10 bg-gray-50 rounded-xl shadow-lg">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">
        Our Projects
      </h1>
      <p class="pt-1 text-sm lg:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam, sapiente tempore laborum ipsa alias nostrum doloribus eveniet ratione quas fugiat exercitationem, quia, nam facilis?
      </p>
      <div class="pt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 place-items-center">
        <div class="h-[500px] w-full max-w-80 bg-gray-300 rounded-xl shadow-lg">
        </div>
        <div class="h-[500px] w-full max-w-80 bg-gray-300 rounded-xl shadow-lg">
        </div>
        <div class="h-[500px] w-full max-w-80 bg-gray-300 rounded-xl shadow-lg">
        </div>
      </div>
      <div class="pt-10 text-center">
        <button class="bg-white text-slate-900 px-10 py-4 rounded-lg font-semibold text-base tracking-wide shadow-xl hover:bg-amber-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          View Our Portfolio
        </button>
      </div>
    </div>
  </section>
  `
}