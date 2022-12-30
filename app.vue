<script lang="ts" setup>
import "normalize.css/normalize.css";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";

const colorMode = useColorMode();
</script>

<template>
  <div class="site-header">
    <div class="container">
      <p class="site-title">Where in the world?</p>

      <button
        class="color-mode"
        @click="
          colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
        "
      >
        {{ colorMode.value === "dark" ? "Dark Mode" : "Light Mode" }}
      </button>
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
  background-color: var(--site-background);
  color: var(--text-color);
}

:root.dark-mode {
  --element-background: var(--dark-blue);
  --site-background: var(--very-dark-blue);
  --text-color: var(--white);
}

:root.light-mode {
  --element-background: var(--white);
  --site-background: var(--very-light-gray);
  --text-color: var(--very-dark-blue-text);
}

.container {
  margin: auto;
  max-width: 82rem;
  padding-left: 1rem;
  padding-right: 1rem;
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
  display: flex;
  justify-content: space-between;
}

.site-header {
  padding: 2rem 0;
  background-color: var(--element-background);
  position: sticky;
  top: 0;
  z-index: 1;
}

.color-mode {
  background-color: var(--element-background);
  color: inherit;
  border: none;
  padding: 0.25rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
}
</style>
