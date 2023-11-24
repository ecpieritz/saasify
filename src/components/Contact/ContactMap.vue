<template>
  <section class="sf-contact__map">
    <div class="container-fluid">
      <h2>Or find us at the following address</h2>

      <div class="row">
        <div class="col-md-6 sf-contact__map__text">
          <p>5th street, Ananindeua/PA - Brazil</p>
          <p>+55 91 98765-4321</p>
          <p>contact@saasify.com</p>

          <div class="sf-contact__map__text__socials">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/imgs/sf-social__facebook.png" alt="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/imgs/sf-social__instagram.png" alt="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/imgs/sf-social__linkedin.png" alt="" />
            </a>
          </div>
        </div>

        <div class="col-md-6">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63819.11752055811!2d-48.42818215618465!3d-1.3597310895072812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a45fe447932a59%3A0xf3812b35573454d3!2sAnanindeua%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1699631567779!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            border
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactMap",
  props: {},
  components: {},
};
</script>
