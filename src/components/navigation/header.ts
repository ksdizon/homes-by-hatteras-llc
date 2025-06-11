export function loadHeader() {
  document.querySelector("#header")!.innerHTML = `
  <header class="h-16 w-full flex items-center justify-between px-8 bg-slate-900 fixed top-0 z-50">
    <div id="logo-header">
      <a href="/" class="font-inter text-white text-xl font-semibold tracking-wider">Homes By Tatteras LLC</a>
    </div>
    <nav id="nav-header" class="flex gap-8">
      <a href="/" class="font-inter text-white hover:text-gray-300 transition-colors font-medium text-sm tracking-wide">Home</a>
      <a href="/" class="font-inter text-white hover:text-gray-300 transition-colors font-medium text-sm tracking-wide">Portfolio</a>
      <a href="/" class="font-inter text-white hover:text-gray-300 transition-colors font-medium text-sm tracking-wide">Contact</a>
    </nav>
  </header>
  `
}