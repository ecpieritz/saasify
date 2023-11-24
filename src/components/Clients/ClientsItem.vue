<template>
  <div class="col-md-4 sf-clients__cards__item">
    <div class="row">
      <div class="col-4 sf-clients__cards__item__client">
        <img :src="img" :alt="client" />
      </div>
      <div class="col-8 sf-clients__cards__item__text">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientsItem",
  props: {
    img: {
      type: String,
    },
    client: {
      type: String,
    },
  },
};
</script>
