<template>
  <div>

    <!-- https://docs.netlify.com/forms/setup/#work-with-javascript-rendered-forms -->
    <form class="hidden" name="updates" netlify>
      <input type="hidden" name="firstname" />
      <input type="hidden" name="email" />
    </form>

    <div v-if="!shown">
      <a href="#" v-on:click="shown = true">Get e-mail updates when I write</a>
    </div>

    <form v-else-if="!submitted"
          v-on:submit.prevent="handleSubmit"
          method="post">

      <input
        class="w-48 text-black placeholder-gray-700 text-sm bg-gray-100 px-2 py-4 sm:py-2
               border-primary-700 border-t border-l sm:border-b border-r sm:border-r-0"
        type="text"
        name="firstname"
        v-model="formData.firstname"
        placeholder="Enter your name" />

      <input
        class="w-48 text-black text-sm bg-white px-2 py-4 sm:py-2
               border-primary-700 border-l sm:border-l-0 border-r sm:border-t border-b
               block sm:inline-block mx-auto sm:ml-0"
        type="email"
        name="email"
        v-model="formData.email"
        placeholder="Enter your e-mail" />

      <button class="button text-left bg-primary-700 text-gray-100 shadow-xl
                     hover:bg-primary-800
                     border border-primary-900
                     block sm:inline-block mx-auto sm:ml-2 mt-2 sm:mt-1
                     px-4 py-2"
              type="submit">
        Subscribe
      </button>

    </form>

    <div v-else>
      <span class="success msg">You're in, {{ formData.firstname }}.</span>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      formData: {},
      submitted: false,
      shown: false
    }
  },
  methods: {
    encode(data) {
      return Object
        .keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      // https://docs.netlify.com/forms/setup/#submit-forms-via-ajax
      // AJAX request must match the action attribute on the form
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({'form-name': 'updates', ...this.formData}),
      })
        .then(() => this.submitted = true)
        .catch((error) => console.log(error))
    }
  }
}
</script>
