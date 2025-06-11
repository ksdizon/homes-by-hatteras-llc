export function loadProjects() {
  document.querySelector("#projects")!.innerHTML = `
  <section id="projects-sections" class="h-full bg-gray-100 py-20 px-6">
    <div class="max-w-7xl mx-auto p-5 pb-10 bg-gray-50 rounded-xl shadow-lg">
      <h1 class="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tighter">
        Our Projects
      </h1>
      <p class="pt-1 text-sm lg:text-lg tracking-tighter">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint ipsam, nam fugiat ad consequuntur natus culpa. Neque, aperiam sint consequuntur ipsam, recusandae ratione cupiditate ea iure est placeat eum dolor nobis magnam dignissimos aliquid tenetur illo quo non tempora ab temporibus! Dolores cupiditate dolore, omnis commodi quia reiciendis, quod, sequi ea laboriosam iste ab alias sunt sapiente eaque. Eius!
      </p>
      <div class="pt-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 place-items-center">
        <div class="h-96 w-full max-w-96 bg-gray-300 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img src="public/photos/addison-1.jpg" class="w-full h-full object-cover rounded-xl">
        </div>
        <div class="h-96 w-full max-w-96 bg-gray-300 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img src="public/photos/addison-2.jpg" class="w-full h-full object-cover rounded-xl">
        </div>
        <div class="h-96 w-full max-w-96 bg-gray-300 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img src="public/photos/example-.jpg" class="w-full h-full object-cover rounded-xl">
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