<template>
  <header class="c-header">
    <div class="c-header__toolbar">
      <div class="c-header__nav">
        <button class="c-header__toggle" @click="changeSidebarStatus">
          <i class="c-nav__icon fas fa-bars"></i>
        </button>
        <h1 class="c-header__title">Home</h1>
      </div>
      <a href="#" class="c-header__logout"> Cerrar Sesión </a>
    </div>
  </header>
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
