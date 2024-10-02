<template>
  <div>

    <header>

      <a v-if="essay.path" :href="essay.path" class="hover:underline">
        <h1 class="text-2xl mt-10 mb-8">{{ essay.title }}</h1>
      </a>
      <h1 v-else class="text-2xl mt-10 mb-8">{{ essay.title }}</h1>

      <p class="pb-4">
        {{ moment(essay.date).format("MMMM YYYY") }}
        <span v-if="essay.draft"
              class="italic bg-gray-100 rounded px-2 py-1 ml-2">
          Draft - still thinking about this.
        </span>
      </p>

    </header>

    <div class="content" v-html="essay.content"/>

    <div v-if="essay.hn" class="coloured mt-8 text-sm">
      <a :href="'https://news.ycombinator.com/item?id=' + essay.hn" target="_blank">
        Discuss on HN
      </a>
    </div>

  </div>
</template>


<script>
export default {
  props: {
    essay: Object
  }
};
</script>
