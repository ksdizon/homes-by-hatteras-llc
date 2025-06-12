export function loadWhoWeAre() {
  document.querySelector("#who-we-are")!.innerHTML = `
  <section id="who-we-are-section" class="h-full bg-white py-20 px-6">
    <div class="max-w-7xl mx-auto p-8 bg-gray-50 rounded-xl shadow-lg transform translate-x-full opacity-0 transition-all duration-1000 ease-out" id="slide-container">      <div class="text-center">
        <h1 class="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 tracking-tighter">
          Who We Are
        </h1>
        <p class="text-gray-700 text-lg max-w-3xl mt-2 mx-auto leading-relaxed tracking-tight">
          At Homes By Tatteras LLC, we're more than just real estate professionals – we're your trusted partners in finding the perfect place to call home.
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
          <img src="/photos/team-photo.jpg" alt="Homes By Tatteras Team" class="w-full h-full object-cover rounded-xl">
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
   const slideContainer = document.getElementById('slide-container');
  
  if (slideContainer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger the slide-in animation when element comes into view
          entry.target.classList.remove('translate-x-full', 'opacity-0');
          entry.target.classList.add('translate-x-0', 'opacity-100');
          
          // Stop observing once animated (optional - remove if you want it to animate every time)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2, // Trigger when 20% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Start animation 50px before element fully enters viewport
    });
    
    observer.observe(slideContainer);
  }
}