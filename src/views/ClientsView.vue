<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__clients-img.jpg')">
      <slot>
        <div class="sf-banner__texts">
          <h1>The CLIENTS we are proud to work with</h1>
          <h4>
            Equals is the only spreadsheet with built-in connections to any database,
            versioning, and collaboration.
          </h4>
        </div>
      </slot>
    </Banner>
    <ClientsCards />
  </main>
</template>

<script>
import Banner from "@/components/Banner.vue";
import ClientsCards from "@/components/Clients/ClientsCards.vue";

export default {
  name: "ClientsView",
  components: {
    Banner,
    ClientsCards,
  },
};
</script>
