<template>
  <section class="sf-clients__cards">
    <div class="container-fluid">
      <div class="row">
        <ClientsItem
          :img="require('@/assets/imgs/sf-logo__airbnb-icon.png')"
          :client="AirBnb"
        >
          <slot>
            <p>
              "Airbnb hails SaaSify for transforming our data analysis, providing
              real-time insights that elevate the user experience and enhance our
              strategic decision-making."
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem
          :img="require('@/assets/imgs/sf-logo__amazon-icon.png')"
          :client="Amazon"
        >
          <slot>
            <p>
              "Amazon applauds SaaSify's scalability, empowering our e-commerce giant to
              effortlessly manage and analyze vast amounts of data, ensuring seamless
              operations."
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem
          :img="require('@/assets/imgs/sf-logo__google-icon.png')"
          :client="Google"
        >
          <slot>
            <p>
              "Google values SaaSify's commitment to data security, with an iron-clad
              system that safeguards our sensitive information, earning our trust as a
              reliable analytics partner."
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem
          :img="require('@/assets/imgs/sf-logo__netflix-icon.png')"
          :client="Netflix"
        >
          <slot>
            <p>
              "Netflix appreciates the user-friendly interface of SaaSify, streamlining
              our content analytics and making it easier for our teams to extract
              meaningful insights from complex data sets."
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem
          :img="require('@/assets/imgs/sf-logo__slack-icon.png')"
          :client="Slack"
        >
          <slot>
            <p>
              "Slack commends SaaSify for fostering collaboration within our teams. The
              platform's intuitive features have significantly improved communication and
              efficiency across our organization."
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem :img="require('@/assets/imgs/sf-logo__aa.png')" :client="AAShop">
          <slot>
            <p>
              "A leading tech giant commends SaaSify for its cutting-edge analytics,
              revolutionizing the way we interpret and leverage data for enhanced business
              strategies."
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem :img="require('@/assets/imgs/sf-logo__coding.png')" :client="Coding">
          <slot>
            <p>
              "A prominent ride-sharing company values SaaSify's analytics prowess,
              streamlining operations and contributing to the continual improvement of our
              services."
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem
          :img="require('@/assets/imgs/sf-logo__freedom.png')"
          :client="Freedom"
        >
          <slot>
            <p>
              "A top CRM provider appreciates SaaSify's tailored analytics solutions,
              providing invaluable insights that propel our business forward in a dynamic
              marketplace."
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem
          :img="require('@/assets/imgs/sf-logo__quillpen.png')"
          :client="QuillPen"
        >
          <slot>
            <p>
              "A major social media player celebrates SaaSify's real-time analytics,
              helping us stay at the forefront of trends and ensuring our platform remains
              engaging and relevant."
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem :img="require('@/assets/imgs/sf-logo__square.png')" :client="Square">
          <slot>
            <p>
              "A professional networking platform recognizes SaaSify's data visualization
              tools, offering clear insights that empower users to make informed decisions
              about their careers."
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem
          :img="require('@/assets/imgs/sf-logo__friends.png')"
          :client="Friends"
        >
          <slot>
            <p>
              "A leading e-commerce giant values SaaSify for its comprehensive analytics
              suite, empowering us to refine our customer experience and drive
              unprecedented growth"
            </p>
          </slot>
        </ClientsItem>

        <ClientsItem
          :img="require('@/assets/imgs/sf-logo__farmers.png')"
          :client="Farmers"
        >
          <slot>
            <p>
              "A cutting-edge technology company applauds SaaSify's analytics
              capabilities, enabling us to unlock the full potential of our data for
              strategic decision-making and innovation."
            </p>
          </slot>
        </ClientsItem>
      </div>
    </div>
  </section>
</template>

<script>
import ClientsItem from "./ClientsItem.vue";
export default {
  name: "ClientsCards",
  props: {},
  components: {
    ClientsItem,
  },
};
</script>
