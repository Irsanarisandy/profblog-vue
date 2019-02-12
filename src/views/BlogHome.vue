<template>
  <p v-if="resp.isEmpty">Loading...</p>
  <div v-else id="blog-home">
    <div v-if="checkPageNavigation()" class="d-flex justify-content-between posts__navigation">
      <router-link v-if="resp.meta.previous_page" :to="'/p/' + resp.meta.previous_page">
        <span class="posts__navigation-text">Previous Page</span>
      </router-link>
      <router-link v-if="resp.meta.next_page" :to="'/p/' + resp.meta.next_page">
        <span class="posts__navigation-text">Next Page</span>
      </router-link>
    </div>
    <div :class="['posts__pages', {
      'posts__pages--with-image': post.featured_image
    }]" v-for="(post, index) in resp.data" :key="post.slug + '_' + index">
      <div v-if="post.featured_image" class="posts__image-block">
        <img :src="post.featured_image" :alt="post.slug" />
      </div>
      <div :class="['posts__content', {
        'posts__content--with-image': post.featured_image
      }]">
        <router-link :to="'/post/' + post.slug">
          <h1>{{ post.title }}</h1>
        </router-link>
        <p v-if="post.author" class="posts__info">
          {{ post.author.first_name }} {{ post.author.last_name }}
        </p>
        <p class="posts__info">{{ getDateTime(post.published) }}</p>
        <p class="posts__info">{{ post.summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Butter from 'buttercms';
import Moment from 'moment-timezone';

const butter = Butter(process.env.VUE_APP_BUTTER);

export default {
  name: 'blog-home',
  data() {
    return {
      resp: {
        isEmpty: true
      }
    };
  },
  head: {
    title: {
      inner: 'ProfBlog (Vue)',
      separator: '-',
      complement: 'Blog Posts'
    },
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
  },
  methods: {
    getPosts() {
      butter.post.list({
        page: 1,
        page_size: 10
      }).then((res) => {
        this.resp = { isEmpty: false, ...res.data };
      }).catch((err) => console.error(err));
    },
    checkPageNavigation() {
      return this.resp.meta && (this.resp.meta.previous_page || this.resp.meta.next_page);
    },
    getDateTime(currentPost) {
      return Moment(currentPost).tz('Pacific/Auckland').format('Do MMM YYYY z');
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>
