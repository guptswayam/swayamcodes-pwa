<template>
    <div class="container-fluid">
        <img src="/src/assets/swayamcodes.PNG" height=100 width=100 style="display: block;margin: auto">
        <form class="form-group" @submit.prevent="submitForm()">
            <label for="name">Name</label>
            <input type="text" placeholder="Name" class="form-control" id="name" v-model="name" required>
            <label for="email">Email</label>
            <input type="text" placeholder="email" class="form-control" id="email" v-model="email" required><br>
            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: "",
            email: ""
        }
    },
    methods: {
        submitForm(){
            this.$router.push({name: "home", query: {name: this.name,email: this.email}});
        }
    }
}
</script>

<style scoped>

label{
    margin-top: 20px;
}

</style>