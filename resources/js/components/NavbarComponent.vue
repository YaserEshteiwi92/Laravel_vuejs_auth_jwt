<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
            <router-link :to="{ name: 'home' }" class="navbar-brand" exact>
                Index
            </router-link>
            <button
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarContent"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" v-if="authStatus == false">
                        <router-link :to="{ name: 'login' }" class="nav-link">
                            <!-- <i class="fa fa-sign-in"></i> -->
                            Login
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="authStatus == false">
                        <router-link
                            :to="{ name: 'register' }"
                            class="nav-link"
                        >
                            <!-- <i class="fa fa-user-plus"></i> -->
                            Register
                        </router-link>
                    </li>
                    <!-- Auth -->
                    <li class="nav-item" v-if="authStatus == true">
                        <router-link
                            :to="{ name: 'profile' }"
                            class="nav-link"
                        >
                            <!-- <i class="fa fa-user-plus"></i> -->
                            Profile
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="authStatus == true">
                        <a
                            href="#"
                            class="nav-link"
                            @click.prevent="logout"
                        >
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        logout() {
            this.$store
                .dispatch("logout")
                .then(response => {
                    this.$router.push({name: 'login'});
                })
                .catch(error => {
                    console.log('error');
                    console.log(error.response);
                });
        }
    },
    computed: {
        authStatus() {
            if (this.$store.getters.getToken) {
                return true;
            }
            return false;
        }
    }
};
</script>

<style lang="sass" scoped>
.nav-link
    margin-left: 10px
    position: relative
    overflow: hidden
    &::after,
    &::before
        content: ''
        position: absolute
        width: 50%
        height: 2px
        background-color: #ffffff
        bottom: 0
        transition: 0.3s
    &::after
        left: 0
        transform: translateX(-100%)
    &::before
        right: 0
        transform: translateX(100%)
    &:hover
        &::after,
        &::before
            transform: translateX(0)
.active
        &::after,
        &::before
            transform: translateX(0)
</style>
