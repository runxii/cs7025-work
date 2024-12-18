<template>
    <nav id="navi-bar">
      <ul>
        <li><a class="nav-link" href="../../public/index.html">Home</a></li>
        <li><a class="nav-link" href="../../public/projects.html">Projects</a></li>
        <li><a class="nav-link" href="../../public/aboutme.html">About Me</a></li>
        <li><a class="nav-link" href="../../public/404.html">Notes</a></li>
        <li><a class="nav-link" href="https://emptdrawr.github.io/">Blog</a></li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'NaviBar',
  mounted() {
    this.activeNavButton();
  },
  methods: {
    activeNavButton() {
      document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.href === window.location.href) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      });
    },
  },
};
</script>

