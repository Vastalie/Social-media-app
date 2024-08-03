<script setup>
    import back from "../backend.json"
</script>


<script>
    definePageMeta({
        layout: "default",
        middleware: ["auth"],
    });
</script>

<template>
    <div class="font-body text-primary flex flex-wrap items-center justify-center">
        <template v-for="c in back.community">
            <Module :c="c" :joined="true"/>
        </template>
        
    </div>
</template>
