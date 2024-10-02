<template>
  <DefaultLayout>

    <h1 class="font-bold text-center mt-16 md:mt-32 mb-10">Welcome, friend.</h1>

    <About class="flex-1 mx-auto"/>

    <div class="mt-12 md:grid grid-cols-2 gap-x-2">

      <!-- <div class="content">
           <h2>Thoughts</h2>
           <ul class="list-disc list-inside">
           <li v-for="edge in $page.allEssay.edges" :key="edge.node.id">
           <a :href="edge.node.path">{{ edge.node.title }}</a></li>
           </ul>
           </div>

           <div class="content">
           <h2>Questions</h2>
           <ul class="list-decimal list-inside">
           <li><a href="/questions"
           >If not microservices, then what?
           </a> </li>
           <li><a href="/questions"
           >Why is symbolic ML not more popular?
           </a> </li>
           <li><a href="/questions"
           >How can we reduce 3rd-world country investment risk?
           </a></li>
           </ul>
           </div> -->

    </div>

  </DefaultLayout>
</template>

<page-query>
query{
  allEssay {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>


<script>
import SignupForm from '~/components/SignupForm.vue'
import About from '~/components/About.vue'

export default {
  components: { SignupForm, About }
}
</script>
