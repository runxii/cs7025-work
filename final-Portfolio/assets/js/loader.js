// Code reuse loader. Repeated header can be load from this file.
window.onload = function() {
    loadNav();
    activeNavButton();

    function loadNav() {
        document.getElementById("header").innerHTML = "<nav id=\"navi-bar\">\n" +
            "    <ul>\n" +
            "      <li><a class=\"nav-link\" href=\"homepage.html\">Home</a></li>\n" +
            "      <li><a class=\"nav-link\" href=\"projects.html\">Projects</a></li>\n" +
            "      <li><a class=\"nav-link\" href=\"about-me.html\">About Me</a></li>\n" +
            "      <li><a class=\"nav-link\" href=\"404.html\">Notes</a></li>\n" +
            "      <li><a class=\"nav-link\" href=\"https://emptdrawr.github.io/\">Blog</a></li>\n" +
            "    </ul>\n" +
            "  </nav>";
    }

    function activeNavButton() {
        document.querySelectorAll(".nav-link").forEach((link) => {
            if (link.href === window.location.href) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
            }
        });
    }
}
