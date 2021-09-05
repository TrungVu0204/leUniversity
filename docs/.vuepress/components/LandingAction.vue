<template>
    <div v-if="data.landingButton && data.landingButton.length" class="row action">
        <div v-for="(landingItem, index) in data.landingButton" :key="index" class="column helpItem">
            <a v-if="landingItem.link" :href="landingItem.link" tabindex="1">
                <div class="card">
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
        margin: 3rem 0;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 1fr;
        grid-gap: 2rem;

        @media screen and (max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
        }
    }

    .card {
        border: solid 1px;
        border-color: var(--c-border);
        border-radius: 0.5rem;
        padding: 1rem;
        text-align: center;
        transition: all 300ms ease;

        &:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        h3, 
        p {
            margin: 0;
        }
    }
</style>