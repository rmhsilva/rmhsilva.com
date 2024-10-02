<template>
  <DefaultLayout>

    <div class="narrow">

      <h1 class="heading">Books I've read</h1>

      <p class="content">
        In January 2021 I began publishing notes about books I found
        particularly interesting. Definitely inspired by
        <a href="https://sive.rs/book">Sivers</a>.
      </p>

      <div class="mt-20" v-for="edge in $page.allBook.edges" :key="edge.node.id">

        <figure>
          <a :href="edge.node.path">
            <img :src="'/uploads/books/' + edge.node.img"
              class="w-32 mr-8 float-left" />
          </a>
        </figure>

        <a :href="edge.node.path">
          <h2 class="text-2xl">{{ edge.node.title }}</h2>
        </a>

        <small class="block text-gray-800 text-sm my-2">
          Last read: {{ moment(edge.node.date).format("MMMM YYYY") }}.
          My rating: <strong>{{ edge.node.rating }}</strong>/10.
        </small>

        <p class="max-w-100 text-gray-700 my-6">TL;DR: {{ edge.node.tldr }}</p>

        <a :href="edge.node.path" class="block underline">
          My notes
        </a>

      </div>

    </div>

  </DefaultLayout>
</template>


<page-query>
query {
  allBook {
    edges {
      node {
        id
        title
        rating
        tldr
        img
        path
        content
        date
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo() {
    return {
      title: "Books"
    };
  }
};
</script>
