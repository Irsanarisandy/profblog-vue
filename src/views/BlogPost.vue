<template>
  <p v-if="post.isEmpty">Loading...</p>
  <div v-else id="blog-post">
    <h1>{{ post.title }}</h1>
    <p v-if="post.author">{{ post.author.first_name }} {{ post.author.last_name }}</p>
    <p>{{ getDateTime(post.created) }}</p>
    <div v-html="post.body"></div>
  </div>
</template>

<script>
import Butter from 'buttercms';
import Moment from 'moment-timezone';

const butter = Butter(process.env.VUE_APP_BUTTER);

export default {
  name: 'blog-post',
  head: {
    title() {
      return {
        inner: 'ProfBlog (Vue)',
        separator: '-',
        complement: this.post.seo_title
      };
    },
    link() {
      return [
        { rel: 'canonical', href: this.post.url, id: 'canonical' }
      ];
    },
    meta() {
      return [
        { name: 'author', content: this.post.author.first_name + ' ' + this.post.author.last_name, id: 'author' },
        { name: 'description', content: this.post.meta_description, id: 'description' },
        { name: 'keywords', content: this.post.tags.map(item => item.name).join(', '), id: 'tags' },
        { property: 'og:description', content: this.post.meta_description, id: 'og-description' },
        { property: 'og:image', content: this.post.featured_image, id: 'og-image' },
        { property: 'og:title', content: this.post.seo_title, id: 'og-title' },
        { property: 'og:url', content: this.post.url, id: 'og-url' },
        { name: 'twitter:card', content: this.post.summary, id: 'twitter-card' },
        { name: 'twitter:description', content: this.post.meta_description, id: 'twitter-description' },
        { name: 'twitter:image', content: this.post.featured_image, id: 'twitter-image' },
        { name: 'twitter:title', content: this.post.seo_title, id: 'twitter-title' },
        { name: 'twitter:url', content: this.post.url, id: 'twitter-url' }
      ];
    }
  },
  data() {
    return {
      post: {
        isEmpty: true,
        seo_title: '',
        url: '',
        author: {
          first_name: '',
          last_name: ''
        },
        meta_description: '',
        tags: [],
        featured_image: '',
        summary: ''
      }
    };
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug).then((res) => {
        this.post = { isEmpty: false, ...res.data.data };
        this.$emit('updateHead');
      }).catch((err) => console.error(err));
    },
    getDateTime(currentPost) {
      return Moment(currentPost).tz('Pacific/Auckland').format('Do MMM YYYY LT z');
    }
  },
  mounted() {
    this.getPost();
  }
};
</script>
