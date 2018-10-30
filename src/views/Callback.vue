<template>
    <div class="callback">
        <h1>This page loaded from Auth0</h1>
    </div>
</template>

<script>
import { handleAuth } from "../utils/auth";

export default {
    name: "Callback",
    beforeMount() {
        handleAuth(error => {
            if (error)
            {
                console.log(error);

                return;
            }
        });

        this.$router.push("/secret");
    },
    props: {

    },
    methods: {

    }
};
</script>
