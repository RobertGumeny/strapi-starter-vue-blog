<template>
  <div>
    <div class="conatiner-fluid">
      <div class="hero row flex-column">
        <div class="col-12 ml-3">
          <h1>Robert's Blog</h1>
          <h2 class="ml-3">Random musings about my journey as a software developer.</h2>
          <p class="photo-credit">
            Photo by
            <a
              href="https://unsplash.com/@stevn_estes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >Steven Estes</a> on
            <a
              href="https://unsplash.com/s/photos/outdoors?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >Unsplash</a>
          </p>
        </div>
      </div>

      <ArticlesList :articles="articles"></ArticlesList>
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList.vue";
import gql from "graphql-tag";

export default {
  components: {
    ArticlesList
  },
  data() {
    return {
      articles: []
    };
  },
  apollo: {
    articles: gql`
      query Articles {
        articles {
          id
          title
          content
          image {
            url
          }
          category {
            name
          }
        }
      }
    `
  }
};
</script>
<style scoped>
.hero {
  color: #f1f1f1;
  height: 65vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://res.cloudinary.com/robertgumeny-blog/image/upload/v1592448862/steven-estes-lk-fJLVqEa8-unsplash_nd9xxj.jpg");
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.photo-credit {
  position: absolute;
  left: 80%;
  top: 95%;
  color: #e8e8e8;
}
.photo-credit a:link {
  text-decoration: none;
  color: #e2e2e2;
}
</style>
