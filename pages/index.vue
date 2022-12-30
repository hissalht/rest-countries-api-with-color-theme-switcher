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
.countries {
  padding: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem 2rem;
  justify-content: space-between;
}

@media screen and (max-width: 1100px) {
  .countries {
    justify-content: space-evenly;
    gap: 3rem 2rem;
  }
}
</style>
