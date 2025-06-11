export function loadTestimonials() {
  document.querySelector("#testimonials")!.innerHTML = `
  <section id="testimonials-section" class="h-full bg-white py-20 px-6">
    <div class="max-w-7xl mx-auto p-8 pb-10 bg-gray-50 rounded-xl shadow-lg">
      <h1 class="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        What Our Clients Say
      </h1>
      <p class="text-center tracking-tighter text-gray-600 max-w-2xl mt-2 mx-auto">
        Don't just take our word for it - hear from the families who have found their dream homes with us.
      </p>
      
      <!-- Swiper Container -->
      <div class="swiper testimonial-swiper max-w-4xl mt-5 mx-auto">
        <div class="swiper-wrapper">
          <!-- Testimonial 1 -->
          <div class="swiper-slide">
            <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center mx-4">
              <div class="flex justify-center mb-4">
                <div class="flex text-amber-400">
                  <span class="text-2xl">★★★★★</span>
                </div>
              </div>
              <p class="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "Working with Homes By Tatteras was an absolute dream. They understood exactly what we were looking for and helped us find the perfect home for our growing family. The entire process was smooth and professional."
              </p>
              <div class="flex items-center justify-center">
                <div class="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <h4 class="font-semibold text-slate-800">Sarah & Michael Johnson</h4>
                  <p class="text-gray-500 text-sm">First-time Homebuyers</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="swiper-slide">
            <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center mx-4">
              <div class="flex justify-center mb-4">
                <div class="flex text-amber-400">
                  <span class="text-2xl">★★★★★</span>
                </div>
              </div>
              <p class="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "I've bought and sold several properties over the years, but never had such a seamless experience. The team's attention to detail and market knowledge is unmatched. Highly recommended!"
              </p>
              <div class="flex items-center justify-center">
                <div class="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <h4 class="font-semibold text-slate-800">Robert Chen</h4>
                  <p class="text-gray-500 text-sm">Real Estate Investor</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 3 -->
          <div class="swiper-slide">
            <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center mx-4">
              <div class="flex justify-center mb-4">
                <div class="flex text-amber-400">
                  <span class="text-2xl">★★★★★</span>
                </div>
              </div>
              <p class="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "From our first meeting to closing day, Homes By Tatteras exceeded every expectation. They made what could have been a stressful process feel effortless. We couldn't be happier with our new home!"
              </p>
              <div class="flex items-center justify-center">
                <div class="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <h4 class="font-semibold text-slate-800">Emily Rodriguez</h4>
                  <p class="text-gray-500 text-sm">Young Professional</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 4 -->
          <div class="swiper-slide">
            <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center mx-4">
              <div class="flex justify-center mb-4">
                <div class="flex text-amber-400">
                  <span class="text-2xl">★★★★★</span>
                </div>
              </div>
              <p class="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "As retirees looking to downsize, we had very specific needs. The team listened carefully and found us the perfect condo with all the amenities we wanted. Their patience and expertise made all the difference."
              </p>
              <div class="flex items-center justify-center">
                <div class="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <h4 class="font-semibold text-slate-800">David & Linda Williams</h4>
                  <p class="text-gray-500 text-sm">Retirees</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 5 -->
          <div class="swiper-slide">
            <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center mx-4">
              <div class="flex justify-center mb-4">
                <div class="flex text-amber-400">
                  <span class="text-2xl">★★★★★</span>
                </div>
              </div>
              <p class="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "Moving to a new city was daunting, but Homes By Tatteras made it feel like home from day one. They went above and beyond to help us understand the neighborhoods and find the perfect fit for our lifestyle."
              </p>
              <div class="flex items-center justify-center">
                <div class="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <h4 class="font-semibold text-slate-800">Jessica Martinez</h4>
                  <p class="text-gray-500 text-sm">Corporate Relocator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation Buttons -->
        <div class="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-md transition-all duration-200 hover:shadow-lg z-10 w-12 h-12 flex items-center justify-center cursor-pointer"></div>
        <div class="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-md transition-all duration-200 hover:shadow-lg z-10 w-12 h-12 flex items-center justify-center cursor-pointer"></div>
        
        <!-- Pagination -->
        <div class="swiper-pagination mt-8 text-center"></div>
      </div>
    </div>
  </section>
  `
}