<template>
  <div class="border-b border-solid border-gray-200
              mb-20 pt-4 pb-4
              text-gray-700 text-sm coloured">

    <p class="mb-2">
      Send feedback and thoughts:
      <a href="https://twitter.com/rmhsilva">Twitter</a>
      // <a href="mailto:ric@rmhsilva.com">ric@rmhsilva.com</a>
    </p>

    <p class="text-sm mb-4">
      Read more:
      <a href="/archive">Blog archive</a>
      // <a href="/books">Book notes</a>
      // <a href="feed:///rss.xml">RSS</a>
    </p>

    <SignupForm class="mb-8" />

  </div>
</template>


<script>
import SignupForm from '~/components/SignupForm.vue'

export default {
  components: { SignupForm }
};
</script>
