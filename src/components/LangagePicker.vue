<template>
  <p class="langagePicker">
    <span @click="goFR" :class="{ activeLangage: $i18n.locale === 'fr' }"
      >FR</span
    >
    |
    <span @click="goEN" :class="{ activeLangage: $i18n.locale === 'en' }"
      >EN</span
    >
  </p>
</template>

<script>
export default {
  name: "langagePicker",
  methods: {
    goFR() {
      this.$root.$i18n.locale = "fr";
    },
    goEN() {
      this.$root.$i18n.locale = "en";
    }
  }
};
</script>

<style lang="scss" scoped>
.langagePicker {
  line-height: 40px;
  margin: 0;
  z-index: 2;
  color: white;
  span {
    cursor: pointer;
  }
}
.activeLangage {
  font-weight: 900;
}
</style>
