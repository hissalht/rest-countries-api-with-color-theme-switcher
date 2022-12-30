<script lang="ts">
import "normalize.css/normalize.css";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";
</script>

<template>
  <div class="site-header">
    <div class="container">
      <p class="site-title">Where in the world?</p>
    </div>
  </div>
  <NuxtPage />
</template>

<style>
:root {
  /* Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%) */
  --dark-blue: hsl(209, 23%, 22%);

  /* Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%) */
  --very-dark-blue: hsl(207, 26%, 17%);

  /* - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%) */
  --very-dark-blue-text: hsl(200, 15%, 8%);

  /* Dark Gray (Light Mode Input): hsl(0, 0%, 52%) */
  --dark-gray: hsl(0, 0%, 52%);

  /* Very Light Gray (Light Mode Background): hsl(0, 0%, 98%) */
  --very-light-gray: hsl(0, 0%, 98%);

  /* White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%) */
  --white: hsl(0, 0%, 100%);

  font-family: "Nunito Sans", sans-serif;
  font-weight: 300;

  background-color: var(--very-dark-blue);
  color: var(--white);
}
</style>

<style scoped>
.site-title {
  font-weight: 800;
  margin: 0;
  font-size: 1.5rem;
}

.container {
  max-width: 80rem;
  margin: auto;
}

.site-header {
  padding: 2rem 0;
  background-color: var(--dark-blue);
}
</style>
