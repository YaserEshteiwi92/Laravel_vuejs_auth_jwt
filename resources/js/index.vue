<template>
    <div class="index">
        <navbar-component></navbar-component>
        <router-view></router-view>
    </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent';
export default {
    components:{
        NavbarComponent
    }
}
</script>