<script lang="ts" setup>
import { Country } from "~~/types/countries-api";

const props = defineProps<{
  country: Country;
}>();

const { data: countries } = useFetch<Pick<Country, "name" | "cca3">[]>(
  "https://restcountries.com/v3.1/all?fields=name,cca3"
);

const borders = computed(
  () =>
    props.country.borders
      ?.map(
        (cca3) =>
          countries.value?.find((country) => country.cca3 === cca3)?.name.common
      )
      .filter(Boolean) as string[] | undefined
);
</script>

<template>
  <div class="country">
    <div>
      <img :src="country.flags.svg" alt="" width="300" height="200" />
    </div>
    <div class="informations">
      <h1>{{ country.name.common }}</h1>

      <dl>
        <div>
          <dt>Native Name:</dt>
          <dd>
            {{
              Object.values(country.name.nativeName)
                .map((name) => name.common)
                .join(", ")
            }}
          </dd>
        </div>

        <div>
          <dt>Population:</dt>
          <dd>{{ country.population }}</dd>
        </div>

        <div>
          <dt>Region:</dt>
          <dd>{{ country.region }}</dd>
        </div>

        <div>
          <dt>Sub Region:</dt>
          <dd>{{ country.subregion }}</dd>
        </div>

        <div>
          <dt>Capital:</dt>
          <dd>
            {{ country.capital ? country.capital.join(", ") : "N/A" }}
          </dd>
        </div>

        <div>
          <dt>Top Level Domain:</dt>
          <dd>{{ country.tld.join(", ") }}</dd>
        </div>

        <div>
          <dt>Currencies:</dt>
          <dd>
            {{
              Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")
            }}
          </dd>
        </div>

        <div>
          <dt>Languages:</dt>
          <dd>
            {{ Object.values(country.languages).join(", ") }}
          </dd>
        </div>
      </dl>

      <template v-if="borders">
        <p>Border Countries:</p>
        <ul class="borders">
          <li v-for="border in borders" :key="border">
            <NuxtLink
              :href="`/${encodeURIComponent(border)}`"
              class="border-link"
            >
              {{ border }}
            </NuxtLink>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<style scoped>
.country {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  gap: 2rem;
}

img {
  width: 100%;
  height: auto;
}

dl {
  line-height: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  grid-auto-flow: column;
  gap: 0 1rem;
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

ul {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
}

p {
  font-weight: 600;
}

.border-link {
  color: inherit;
  background-color: var(--element-background);
  padding: 0.25rem 1.5rem;
  text-decoration: none;
  display: block;
}

.border-link:hover,
.border-link:focus {
  text-decoration: underline;
}

.border-link + .border-link {
  margin-left: 0.5rem;
}

@media screen and (max-width: 500px) {
  .country {
    grid-template-columns: 1fr;
  }

  dl {
    display: block;
  }
}
</style>
