<template>
  <div class="sans">

    <div id="top-strip"> </div>

    <div class="md:fixed top-0 left-0 right-0">
      <header class="container max-w-screen-md mx-auto py-4">

        <a class="inline-block text-md md:mr-8 py-2 edge-padding
                  border border-solid border-transparent
                  hover:border-gray-900
                  " href="/">
          <font-awesome :icon="['fas', 'chess-rook']"/>
        </a>

        <nav class="header-nav float-right inline-block edge-padding">
          <a href="/now">Now</a>
          <a href="/work">Work</a>
          <a href="/writing">Writing</a>
        </nav>

      </header>
    </div>


    <div class="container max-w-screen-lg mx-auto edge-padding
                mt-10 md:mt-20
                mb-20">
      <slot />
    </div>


  </div>
</template>


<script>
/* (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]= */
/* function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date; */
/* e=o.createElement(i);r=o.getElementsByTagName(i)[0]; */
/* e.src='https://www.google-analytics.com/analytics.js'; */
/* r.parentNode.insertBefore(e,r)}(window,document,'script','ga')); */
/* ga('create','UA-42722262-1','auto');ga('send','pageview'); */
</script>
