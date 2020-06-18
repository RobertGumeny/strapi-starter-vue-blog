<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <a href="/" class="navbar-brand text-muted">Robert's Blog</a>

      <ul class="navbar-nav ml-auto mr-5">
        <li class="nav-item">
          <a href="/" class="nav-link text-muted">home</a>
        </li>
        <li class="nav-item" v-for="category in categories" v-bind:key="category.id">
          <router-link
            class="nav-link text-muted"
            :to="{ path: '/category/' + category.id }"
            :key="category.id"
          >{{ category.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: gql`
      query Categories {
        categories {
          id
          name
        }
      }
    `
  }
};
</script>
<style scoped>
nav {
  background-color: #e8e8e8;
}
</style>