<template>
    <div class="container mt-5">
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="(info, key, index) in user"
                :key="'info' + index"
            >
                {{ key }} => {{ info }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: []
        };
    },
    created() {
        this.$store
            .dispatch("me")
            .then((response) => {
                this.user = this.$store.getters.getUser;
            })
            .catch(error => {
                this.$router.push({name: 'login'});
            });
    }
};
</script>
