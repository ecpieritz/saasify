<template>
  <main class="mb-5">
    <Banner :img="require('@/assets/imgs/sf-banner__clients-img.jpg')" class="pb-5">
      <slot>
        <div class="sf-banner__texts">
          <h1>Get in touch to find out more about our products</h1>

          <ContactForm />
        </div>
      </slot>
    </Banner>
  </main>
</template>

<script>
import Banner from "@/components/Banner.vue";
import ContactForm from "@/components/Contact/ContactForm.vue";

export default {
  name: "BannerView",
  components: {
    Banner,
    ContactForm,
  },
};
</script>
