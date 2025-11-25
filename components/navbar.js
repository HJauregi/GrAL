// Detecta si estamos en /windows/ o en la raíz
const basePath = window.location.pathname.includes("/windows/") ? "../" : "";

// Inserta el navbar en el placeholder
document.getElementById("navbar-placeholder").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-custom" id="navbar">
  <a class="navbar-brand" href="${basePath}index.html">Gradu Amaierako Lana</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link" href="${basePath}index.html">Hasiera</a></li>

      <!-- Arautegia Dropdown -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Arautegia
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="${basePath}windows/araudia-infor.html">Ingenieritza Informatikoa</a>
          <a class="dropdown-item" href="${basePath}windows/araudia-ia.html">Adimen Artifiziala</a>
        </div>
      </li>

      <li class="nav-item"><a class="nav-link" href="${basePath}windows/egutegia.html">Egutegia</a></li>

      <!-- Memoriak Dropdown -->
      <li class="nav-item dropdown">
        <div class="btn-group">
          <a class="nav-link" href="${basePath}windows/memoriak.html">GrAL Memoriak</a>
          <a class="nav-link dropdown-toggle dropdown-toggle-split" href="#" id="memoriakDropdown"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="memoriakDropdown">
            <a class="dropdown-item" href="${basePath}windows/memoriak-informatika.html">Ingenieritza Informatikako Memoriak</a>
            <a class="dropdown-item" href="${basePath}windows/memoriak-ia.html">Adimen Artifizialeko Memoriak</a>
          </div>
        </div>
      </li>

      <li class="nav-item"><a class="nav-link" href="${basePath}windows/about-us.html">About us</a></li>
      <li class="nav-item"><a class="nav-link" href="${basePath}windows/galdetegia.html">Autoebaluazio galdetegia</a></li>
    </ul>
  </div>
</nav>

<style>
  .navbar-custom { transition: all 0.3s ease; height: 250px; }
  .navbar-shrink { height: 50px; }
  .navbar-brand, .nav-link { line-height: 1; }
</style>
`;

// Ajusta el padding del body según la altura del navbar
function adjustBodyPadding() {
  const navbar = document.getElementById("navbar");
  if (navbar) document.body.style.paddingTop = navbar.offsetHeight + 10 + "px";
}
adjustBodyPadding();
window.addEventListener("resize", adjustBodyPadding);

// Efecto shrink al hacer scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  if (window.pageYOffset > 50) navbar.classList.add("navbar-shrink");
  else navbar.classList.remove("navbar-shrink");
});
