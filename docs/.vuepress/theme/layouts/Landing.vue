<template>
  <div v-if="data.landingButton && data.landingButton.length" class="row help">
    <div v-for="(landingItem, index) in data.landingButton" :key="index" class="column helpItem">
      <a v-if="landingItem.link" :href="landingItem.link" tabindex="1">
        <div class="card" :class="'card__' + landingItem.title">
          <header>
            <FaqIcon />
            <h3>{{ landingItem.title }}</h3>
          </header>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },

  computed: {
    data() {
			return this.$page.frontmatter;
		},
  }
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
