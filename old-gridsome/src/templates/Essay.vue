<template>
  <DefaultLayout>

    <article class="narrow">
      <!-- TODO show "About the Author" next to the post, Medium-style -->
      <Post :essay="$page.essay"/>

      <p class="text-gray-800 mb-4 mt-20">&mdash;</p>
      <EssayFooter />
    </article>

  </DefaultLayout>
</template>


<page-query>
query ThisEssay ($path: String!) {
  essay: essay(path: $path) {
    title
    date
    content
    draft
    hn
  }
}
</page-query>


<script>
import Post from '~/components/Post.vue'
import EssayFooter from '~/components/EssayFooter.vue'

export default {
  components: { Post, EssayFooter },
  metaInfo() {
    return {
      title: this.$page.essay.title
    };
  }
};
</script>

