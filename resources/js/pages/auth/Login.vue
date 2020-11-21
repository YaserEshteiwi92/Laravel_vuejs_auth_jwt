<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Login
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group row">
                                <label
                                    for="email"
                                    class="col-md-4 col-form-label text-md-right"
                                >
                                    Email
                                </label>
                                <div class="col-md-8">
                                    <input
                                        type="email"
                                        id="email"
                                        class="form-control"
                                        autofocus
                                        autocomplete="email"
                                        v-model="form.email"
                                        :class="[
                                            hasError('email')
                                                ? 'is-invalid'
                                                : ''
                                        ]"
                                    />
                                    <div
                                        class="invalid-feedback"
                                        v-for="(error, index) in hasError(
                                            'email'
                                        )"
                                        :key="'errorEmail' + index"
                                    >
                                        {{ error }}
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                    for="password"
                                    class="col-md-4 col-form-label text-md-right"
                                >
                                    Password
                                </label>
                                <div class="col-md-8">
                                    <input
                                        type="password"
                                        id="password"
                                        class="form-control"
                                        v-model="form.password"
                                        :class="[
                                            hasError('password')
                                                ? 'is-invalid'
                                                : ''
                                        ]"
                                    />
                                    <div
                                        class="invalid-feedback"
                                        v-for="(error, index) in hasError(
                                            'password'
                                        )"
                                        :key="'errorPassword' + index"
                                    >
                                        {{ error }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-8 offset-md-4">
                                    <button
                                        class="btn btn-success btn-block"
                                        @click.prevent="login"
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            errors: [],
            status: null
        };
    },
    methods: {
        login() {
            this.status = null;
            this.$store
                .dispatch("login", this.form)
                .then(response => {
                    this.$router.push({name: 'profile'});
                })
                .catch(error => {
                    if(error.response.status === 422){
                        this.status = 422;
                        this.errors = error.response.data;
                    }
                });
        },
        hasError(field) {
            if (this.status === 422 && this.errors[field]) {
                return this.errors[field];
            }
        }
    }
};
</script>

<style lang="sass" scoped></style>
