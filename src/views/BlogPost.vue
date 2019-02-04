<template>
  <div v-if="post !== {}" id="blog-post">
    <h1>{{ post.title }}</h1>
    <p v-if="post.author">{{ post.author.first_name }} {{ post.author.last_name }}</p>
    <p>{{ getDateTime(post.created) }}</p>
    <div v-html="post.body"></div>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
import Butter from 'buttercms';
import Moment from 'moment-timezone';

const butter = Butter(process.env.VUE_APP_BUTTER);

export default {
  name: 'blog-post',
  data() {
    return {
      post: {}
    };
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug).then((res) => {
        this.post = res.data.data;
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
