<template>
  <nav :class="['bg-dark', 'sidebar', {'sidebar--show': mobileMenuState}]">
    <router-link class="sidebar__links" exact to="/" v-on:click.prevent="onClick">
      <span class="sidebar__links-text">ProfBlog</span>
    </router-link>
    <hr class="sidebar__break" />
    <router-link class="sidebar__links" to="/p/1" v-on:click.prevent="onClick">
      <span class="sidebar__links-text">Blog Posts</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    onClick: Function,
    mobileMenuState: Boolean
  }
};
</script>
