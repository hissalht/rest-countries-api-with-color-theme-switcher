<script lang="ts" setup>
import { Country } from "~~/types/countries-api";

// TODO: only fetch needed fields https://restcountries.com/#filter-response
const { data } = useFetch<Country[]>("https://restcountries.com/v3.1/all");
</script>

<template>
  <div class="container">
    <div class="countries">
      <CountryCard
        v-for="country in data"
        :key="country.cca3"
        :country="country"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 80rem;
  margin: auto;
}

.countries {
  display: grid;
  gap: 5rem 1rem;
  grid-template-columns: auto auto auto auto;
  padding: 3rem 0;
  justify-content: space-between;
}
</style>
