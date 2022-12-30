<script lang="ts" setup>
import { Country } from "~~/types/countries-api";

const route = useRoute();

// TODO: handle country not found
const { data } = useFetch<Country[]>(
  `https://restcountries.com/v3.1/name/${route.params.country}`
);
</script>

<template>
  <div class="container">
    <NuxtLink href="/" class="back-link">Back</NuxtLink>
    <CountryDetails v-if="data && data[0]" :country="data[0]" class="details" />
  </div>
</template>

<style scoped>
.container {
  max-width: 80rem;
  margin: auto;
  margin-top: 5rem;
}

.back-link {
  color: var(--white);
  background-color: var(--dark-blue);
  padding: 0.5rem 2.5rem;
  text-decoration: none;
  display: inline-block;
}

.back-link:hover,
.back-link:focus {
  text-decoration: underline;
}

.details {
  margin-top: 5rem;
}
</style>
