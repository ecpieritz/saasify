<template>
  <section class="sf-contact__form">
    <div class="container-fluid">
      <form>
        <div class="row">
          <div class="col-md-6 form-line">
            <div class="form-group">
              <label for="exampleInputUsername">Your name</label>
              <input type="text" class="form-control" id="" placeholder=" Enter Name" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                placeholder=" Enter Email id"
              />
            </div>
            <div class="form-group">
              <label for="telephone">Mobile No.</label>
              <input
                type="tel"
                class="form-control"
                id="telephone"
                placeholder=" Enter 11-digit mobile no."
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="description"> Message</label>
              <textarea
                class="form-control"
                id="description"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <div class="sf-contact__form__btn">
              <button type="button" class="sf-btn gradient">Send Message</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  props: {},
  components: {},
};
</script>
