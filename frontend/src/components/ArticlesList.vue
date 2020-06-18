<template>
  <div class="row">
    <!-- Tall articles -->
    <div v-for="article in tallArticles" :key="article.id">
      <router-link class="article" :to="{ path: '/article/' + article.id }">
        <img :src="article.image.url" v-if="state === 'production'" alt :height="imgHeightMethod()" />
        <img :src="api_url + article.image.url" v-else alt :height="imgHeightMethod()" />
        <p v-if="article.category" class="top-left">{{ article.category.name }}</p>
        <p class="bottom-left">{{ article.title }}</p>
      </router-link>
    </div>
    <!-- End tall articles -->
    <!-- Short articles -->
    <div v-for="article in shortArticles" :key="article.id">
      <router-link :to="{ path: '/article/' + article.id }">
        <img
          :src="article.image.url"
          v-if="state === 'production'"
          alt
          class="img-fluid"
          :height="imgHeightMethod()"
        />
        <img :src="api_url + article.image.url" v-else alt :height="imgHeightMethod()" />

        <p v-if="article.category" class="card-text">{{ article.category.name }}</p>
        <p class="card-title">{{ article.title }}</p>
      </router-link>
    </div>
    <!-- End short articles -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
      state: process.env.NODE_ENV
    };
  },
  props: {
    articles: Array
  },
  methods: {
    imgHeightMethod() {
      let imgHeight = 0;
      let imgHeightIndex = Math.floor(Math.random() * 3);
      switch (imgHeightIndex) {
        case 0:
          imgHeight = 250;
          break;
        case 1:
          imgHeight = 325;
          break;
        case 2:
          imgHeight = 400;
          break;
      }
      return imgHeight;
    }
  },
  computed: {
    tallArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },
    tallArticles() {
      return this.articles.slice(0, this.tallArticlesCount);
    },
    shortArticles() {
      return this.articles.slice(this.tallArticlesCount, this.articles.length);
    }
  }
};
</script>
<style scoped>
.row {
  margin: 25px 50px;
}
</style>
