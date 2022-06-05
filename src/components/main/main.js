import Typewriter from "typewriter-vue";

export default {
  name: "Main",
  components: {
    Typewriter,
  },
  data: () => ({
    replace: [
      { from: "", to: "Try it out and tell us" },
      { from: "Try it out and tell us", to: "Lost? read the doc." },
    ],
  }),
};
