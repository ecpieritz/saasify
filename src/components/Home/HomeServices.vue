<template>
  <section class="sf-home__services">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 sf-home__services__item">
          <img class="sf-home__services__item__icon" src="@/assets/imgs/icons/sf-icon__task.svg" alt="" />
          <h4 class="sf-home__services__item__title">Task Management</h4>
          <p class="sf-home__services__item__text">The process of managing a task through its life cycle. It involves planning, testing, tracking.</p>
          <a class="sf-btn right-arrow" href="/services">
            Read More 
            <img src="@/assets/imgs/icons/sf-icon__right-arrow.svg" alt="">
          </a>
        </div>
        <div class="col-md-4 sf-home__services__item">
          <img class="sf-home__services__item__icon" src="@/assets/imgs/icons/sf-icon__design.svg" alt="" />
          <h4 class="sf-home__services__item__title">Design System</h4>
          <p class="sf-home__services__item__text">The technology by which a process or procedure is performed with minimal human assistance.</p>
          <a class="sf-btn right-arrow" href="/services">
            Read More 
            <img src="@/assets/imgs/icons/sf-icon__right-arrow.svg" alt="">
          </a>
        </div>
        <div class="col-md-4 sf-home__services__item">
          <img class="sf-home__services__item__icon" src="@/assets/imgs/icons/sf-icon__practice.svg" alt="" />
          <h4 class="sf-home__services__item__title">Best Practices</h4>
          <p class="sf-home__services__item__text">Creating plan to spend your money, This spending planer is called a budgeting tool for business.</p>
          <a class="sf-btn right-arrow" href="/services">
            Read More 
            <img src="@/assets/imgs/icons/sf-icon__right-arrow.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeServices",
  props: {},
  components: {},
};
</script>
