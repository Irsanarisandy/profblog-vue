<template>
  <div id="home" class="jumbotron">
    <h1 class="display-5">Hello, everyone!</h1>
    <p class="lead">
      Welcome to ProfBlog, a website for personal blogs.
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  head: {
    link() {
      return [
        { rel: 'canonical', href: document.location.href, id: 'canonical' }
      ];
    },
    meta() {
      return [
        { property: 'og:url', content: document.location.href, id: 'og-url' },
        { name: 'twitter:url', content: document.location.href, id: 'twitter-url' }
      ];
    }
  }
};
</script>
