<template>
  <DefaultLayout>

    <article class="content narrow">
      <h1>
        {{ $page.section.title }}
      </h1>

      <div v-html="$page.section.content"/>
    </article>

  </DefaultLayout>
</template>


<page-query>
query ThisSection ($path: String!) {
  section: section(path: $path) {
    title
    content
  }
}
</page-query>


<script>
export default {
  metaInfo() {
    return {
      title: this.$page.section.title
    };
  }
};
</script>

