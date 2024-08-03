<script setup>

    const user = useCurrentUser();

</script>

<template>
    <!--navbar links-->
    <nav class="bg-background text-body flex relative justify-between items-center">
        <div class="text-secondary text-4xl m-1 w-max font-bold">
            <a href="/">Gold+</a>
        </div>
        <!--search-->
        <div class="flex relative justify-between items-center">
            <input type="text" class=" bg-gray-700 rounded-full border px-2 border-white text-white">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.796 15.811 21 21m-3-10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"/></svg>
        </div>
        <div class="flex items-center px-1">
            <ul class="flex m-0 p-0 list-none">
                <li class="text-primary"><a class="block no-underline p-2 hover:underline underline-offset-8 decoration-4" href="/discovery">discovery</a></li>
                <li class="text-primary"><a class="block no-underline p-2 hover:underline underline-offset-8 decoration-4" href="/communities">Communities</a></li>
            </ul>
            <img :src="user == null ? '/placeholder.png' : user.photoURL" class="w-10 h-10 rounded-full">
        </div>
        
    </nav>
    
</template>