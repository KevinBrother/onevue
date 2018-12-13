<template>
    <select @change="showOptVal">
        <option v-for="lolHero in lolHeroPage" :value="lolHero.id">
                {{lolHero.againstSkill}}
        </option>        
    </select>

</template>
<script>
    export default {
        mounted() {
            this.getPage();
         },
        name: 'test',
        data() {
            return {
                lolHeroPage: []        
            }
        },
        methods: {
            getPage() {
                this.$axios.get('/ash/lol/lolHeroPage/map;typ=;nameLike=/sys;offset=0;limit=10')
                .then((result) => {
                    let res = result.data;
                    // console.log(res);
                    this.lolHeroPage = res.result.lolHeroPage;
                })
            },
            showOptVal(event) {
                let el = event.currentTarget;
                alert(el.value);
            }
        }
    }
</script>
<style></style>