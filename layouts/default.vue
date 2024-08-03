<template>
    <Navbar/>
    <!-- this will be for pages when you're logged in-->
    <!-- output the page content -->
    <div class="bg-background min-h-screen min-w-screen">
        <slot />
    </div>
</template>