const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-custom" id="navbar">
  <a class="navbar-brand" href="/GrAL/index.html">Gradu Amaierako Lana</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link" href="/GrAL/index.html">Hasiera</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Arautegia</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="/GrAL/windows/araudia-infor.html">Ingenieritza Informatikoa</a>
          <a class="dropdown-item" href="/GrAL/windows/araudia-ia.html">Adimen Artifiziala</a>
        </div>
      </li>
      <li class="nav-item"><a class="nav-link" href="/GrAL/windows/egutegia.html">Egutegia</a></li>
      <li class="nav-item dropdown">
        <div class="btn-group">
          <a class="nav-link" href="/GrAL/windows/memoriak.html">GrAL Memoriak</a>
          <a class="nav-link dropdown-toggle dropdown-toggle-split" href="#" data-toggle="dropdown"><span class="sr-only">Toggle Dropdown</span></a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="/GrAL/windows/memoriak-informatika.html">Ingenieritza Informatikako Memoriak</a>
            <a class="dropdown-item" href="/GrAL/windows/memoriak-ia.html">Adimen Artifizialeko Memoriak</a>
          </div>
        </div>
      </li>
      <li class="nav-item"><a class="nav-link" href="/GrAL/windows/about-us.html">About us</a></li>
      <li class="nav-item"><a class="nav-link" href="/GrAL/windows/galdetegia.html">Autoebaluazio galdetegia</a></li>
    </ul>
  </div>
</nav>

<style>
  .navbar-custom { transition: all 0.3s ease; height: 250px; }
  .navbar-shrink { height: 50px; }
  .navbar-brand, .nav-link { line-height: 1; }
</style>
`;

document.getElementById("navbar-placeholder").innerHTML = navbarHTML;

function adjustBodyPadding() {
  const navbar = document.getElementById("navbar");
  if(navbar) document.body.style.paddingTop = navbar.offsetHeight + 10 + "px";
}
adjustBodyPadding();
window.addEventListener("resize", adjustBodyPadding);

window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if(navbar){
    if(window.pageYOffset > 50) navbar.classList.add("navbar-shrink");
    else navbar.classList.remove("navbar-shrink");
  }
});
