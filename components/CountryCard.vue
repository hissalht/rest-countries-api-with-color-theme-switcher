<script lang="ts" setup>
import { Country } from "~~/types/countries-api";

defineProps<{
  country: Country;
}>();
</script>

<template>
  <div class="country-card">
    <img :src="country.flags.svg" alt="" width="300" height="200" />

    <div class="informations">
      <NuxtLink
        class="link"
        :href="`/${encodeURIComponent(country.name.common)}`"
        >{{ country.name.common }}</NuxtLink
      >
      <dl>
        <div>
          <dt>Population:</dt>
          <dd>{{ country.population }}</dd>
        </div>

        <div>
          <dt>Region:</dt>
          <dd>{{ country.region }}</dd>
        </div>

        <div>
          <dt>Capital:</dt>
          <dd>
            {{ country.capital ? country.capital.join(", ") : "N/A" }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped>
.country-card {
  background-color: var(--element-background);
  max-width: 16.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

@media screen and (max-width: 500px) {
  /* max-width: default; */
  .country-card {
    max-width: none;
  }
}

img {
  width: 100%;
  height: auto;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.informations {
  padding: 2rem 1.5rem 2.5rem 1.5rem;
}

.link {
  font-weight: 600;
  margin: 0;
  color: inherit;
  text-decoration: none;
  outline: none;
}

.link:hover,
.link:focus {
  text-decoration: underline;
}

.link::after {
  position: absolute;
  content: "";
  inset: 0;
}

.link:focus::after {
  outline: auto;
}

dl {
  font-size: 0.875rem;
  line-height: 2;
}

dt,
dd {
  display: inline;
}

dt {
  font-weight: 600;
  margin-right: 1ch;
}

dd {
  margin: 0;
}
</style>
