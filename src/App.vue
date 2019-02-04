<template>
  <div id="app">
    <sidebar :onClick="closeMobileMenu" :mobileMenuState="mobileMenuState" />
    <navbar :onClick="openMobileMenu" />
    <div :class="[mobileMenuState ? 'overlay--show': 'overlay']" v-on:click.prevent="closeMobileMenu" />
    <main class="container">
      <router-view/>
    </main>
    <custom-footer />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import CustomFooter from './components/CustomFooter.vue';

export default {
  name: 'App',
  components: {
    Sidebar, Navbar, CustomFooter
  },
  data() {
    return {
      mobileMenuState: false
    };
  },
  methods: {
    openMobileMenu() {
      this.mobileMenuState = true;
      document.body.style.overflow = 'hidden';
    },

    closeMobileMenu() {
      this.mobileMenuState = false;
      document.body.style.overflow = 'visible';
    }
  }
};
</script>
