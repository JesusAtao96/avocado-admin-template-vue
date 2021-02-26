<template>
  <div class="c-dashboard">
    <Header :isSidebarOpen="isSidebarOpen" @toggle="isSidebarOpen = $event" />
    <Sidebar :isSidebarOpen="isSidebarOpen" @toggle="isSidebarOpen = $event" />
    <main class="c-dashboard__main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Header,
    Sidebar
  },
  data() {
    return {
      isSidebarOpen: true
    };
  }
};
</script>

<style></style>
