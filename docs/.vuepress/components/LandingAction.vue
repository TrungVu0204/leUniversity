<template>
    <div v-if="data.landingButton && data.landingButton.length" class="row action">
        <div v-for="(landingItem, index) in data.landingButton" :key="index" class="column helpItem">
            <a v-if="landingItem.link" :href="landingItem.link" tabindex="1">
                <div class="card" :class="'card__' + landingItem.title">
                    <header>
                        <h3>{{ landingItem.title }}</h3>
                        <p>{{ landingItem.description }}</p>
                    </header>
                </div>
            </a>
        </div>
    </div>
</template>


<script>
    export default {
        computed: {
            data() {
                return this.$page.frontmatter;
            },
        }
    }
</script>

<style lang="scss">
    .action {
        margin-top: 3rem;
        margin: 3rem 10%;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 1fr;
        grid-gap: 2rem;
    }
</style>