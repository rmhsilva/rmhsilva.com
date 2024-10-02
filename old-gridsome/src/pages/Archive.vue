<template>
  <DefaultLayout>

    <div class="content narrow">

      <h1>Archive, by date</h1>

      <div v-for="edge in $page.allEssay.edges" :key="edge.node.id">

        <span class="text-sm">
          {{ moment(edge.node.date).format("MMM YYYY") }} &nbsp; // &nbsp;
        </span>
        <a :href="edge.node.path" class="inline-block py-1">
          {{ edge.node.title }}
        </a>

      </div>

    </div>

  </DefaultLayout>
</template>


<page-query>
query{
  allEssay {
    edges {
      node {
        id
        title
        date
        path
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo() {
    return {
      title: "Archive"
    };
  }
};
</script>
