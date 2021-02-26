<template>
  <nav class="c-nav" :class="{ 'c-nav--toggled': !isSidebarOpen }">
    <div class="c-nav__header">
      <h1 id="logo" class="c-nav__logo">
        {{ isSidebarOpen ? "Avocado" : "A" }}
      </h1>
      <button class="c-nav__toggle" @click="changeSidebarStatus()">
        <i class="c-nav__icon fas fa-bars"></i>
      </button>
    </div>
    <ul class="c-nav__menu">
      <li class="c-nav__item">
        <router-link class="c-nav__link" title="Home" to="/" exact>
          <span class="c-nav__text">Home</span>
          <i class="c-nav__icon fas fa-home"></i>
        </router-link>
      </li>
      <li class="c-nav__item">
        <router-link
          class="c-nav__link"
          title="Dashboard"
          to="/dashboard"
          exact
        >
          <span class="c-nav__text">Dashboard</span>
          <i class="c-nav__icon fas fa-clock"></i>
        </router-link>
      </li>
      <li class="c-nav__item">
        <router-link class="c-nav__link" title="Table" to="/table" exact>
          <span class="c-nav__text">Table</span>
          <i class="c-nav__icon fas fa-users"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    isSidebarOpen: Boolean
  },
  methods: {
    changeSidebarStatus() {
      this.$emit("toggle", !this.isSidebarOpen);
    }
  }
};
</script>

<style></style>
