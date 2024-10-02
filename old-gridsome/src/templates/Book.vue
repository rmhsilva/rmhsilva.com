<template>
  <DefaultLayout>

    <article class="narrow pt-8">

      <div class="mb-20">
        <figure>
          <a :href="$page.book.path">
            <img :src="'/uploads/books/' + $page.book.img"
              class="w-32 mr-8 float-left" />
          </a>
        </figure>

        <a :href="$page.book.path">
          <h2 class="text-2xl">{{ $page.book.title }}</h2>
        </a>

        <small class="block text-gray-800 text-sm my-1">
          Last read: {{ moment($page.book.date).format("MMMM YYYY") }}.
          My rating: <strong>{{ $page.book.rating }}</strong>/10.
        </small>

        <p class="max-w-100 text-gray-700 my-6">TL;DR: {{ $page.book.tldr }}</p>
      </div>

      <div class="clear-both content">
        <h2 class="text-xl">My Notes</h2>

        <div v-html="$page.book.content"></div>
      </div>

      <p class="text-gray-800 mb-4 mt-20">&mdash;</p>

      <div v-if="$page.book.twitter" class="coloured mb-8 text-sm">
        <a :href="$page.book.twitter" target="_blank">
          Reply/RT on Twitter
        </a>
      </div>

    </article>

    <EssayFooter class="narrow" />

  </DefaultLayout>
</template>


<page-query>
query ($path: String!) {
  book: book(path: $path) {
    title
    content
    img
    tldr
    rating
    twitter
  }
}
</page-query>


<script>
import EssayFooter from '~/components/EssayFooter.vue'

export default {
  components: { EssayFooter },
  metaInfo() {
    return {
      title: this.$page.book.title
    };
  }
};
</script>

