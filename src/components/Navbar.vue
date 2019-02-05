<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" exact to="/">
        <span>ProfBlog</span>
      </router-link>
      <button class="navbar-toggler" @click.prevent="onClick"
        type="button" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav mr-auto">
          <router-link class="nav-link" to="/p/1">
            <span>Blog Posts</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    onClick: Function
  }
};
</script>
