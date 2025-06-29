export function loadWhoWeAre() {
  document.querySelector("#who-we-are")!.innerHTML = `
  <section id="who-we-are-section" class="h-full bg-white py-20 px-6">
    <div class="max-w-7xl mx-auto p-8 bg-gray-50 rounded-xl shadow-lg">
      <div class="text-center">
        <h1 class="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 tracking-tighter">
          Who We Are
        </h1>
        <p class="text-gray-700 text-lg max-w-3xl mt-2 mx-auto leading-relaxed tracking-tight">
          At Homes By Hatteras LLC, we're more than just real estate professionals – we're your trusted partners in finding the perfect place to call home.
        </p>
      </div>
      <div class="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h2 class="font-playfair text-xl md:text-2xl font-semibold text-slate-800">
            Our Story
          </h2>
          <p class="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore repellat id quo explicabo, qui voluptates totam, adipisci ducimus alias cumque quia at possimus laboriosam aliquam, autem debitis facilis aspernatur nesciunt! Officiis dolor, rerum voluptatem commodi totam officia sunt assumenda corrupti, quas neque voluptatibus voluptates sint, porro adipisci! Vel, totam?
          </p>
          <p class="text-gray-700 leading-relaxed">
            With years of combined experience in the real estate industry, our team understands that buying or selling a home is one of life's most significant decisions. That's why we're committed to providing personalized service, expert guidance, and unwavering support throughout your entire real estate journey.
          </p>
        </div>
        <div class="bg-gray-300 rounded-xl shadow-md h-80 w-full">
          <img src="/photos/team-photo.jpg" alt="Homes By Hatteras Team" class="w-full h-full object-cover rounded-xl">
        </div>
      </div>
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-6 text-lg">
          Ready to start your real estate journey with us?
        </p>
        <button class="bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold text-base tracking-wide shadow-xl hover:bg-amber-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          Get in Touch
        </button>
      </div>
    </div>
  </section>
`
}