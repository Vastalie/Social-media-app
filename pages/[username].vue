<script setup>

    const username = useRoute().params.username;

    const p = {
        pfpURL: "/placeholder.png",
        displayName: username,
        username: username,
        userTags: ["computer science", "creative computing", "game design"],
        content: "We love lorem ipsum!! lorem ipsum so cool! I love lorum ipsum, why is lorum ipsum called lorum ipsum???"
    }
    
    definePageMeta({
        middleware: ["auth"],
    })

</script>

<template>
    <!--info-->
    <div class="text-body text-primary w-full">
        <!--Banner-->
        <div class="h-64 bg-[url('/placeholder_banner.png')] bg-no-repeat bg-cover"/>
        <!--pfp-->
        <img src="/placeholder.png" class="w-24 h-24 rounded-full shadow-md absolute top-64 left-4">
        <div class="flex relative justify-between items-center">
            <div>
                <!--community title-->
                <div class="font-bold text-4xl mt-10 mx-2">{{ username }}</div>
                <!--community username-->
                <div class="mx-2 text-gray-400">@{{ username }}</div>
                <!--userbase info-->
                <!--User count-->
                <p class="text-sm mx-2 text-gray-400"><svg class="fill-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M231.942 219.99a8.001 8.001 0 0 1-6.93 4.003L30.99 223.99a8 8 0 0 1-6.924-12.007 120.488 120.488 0 0 1 67.119-54.14 72 72 0 1 1 73.633 0 120.487 120.487 0 0 1 67.12 54.142 8.001 8.001 0 0 1 .005 8.004Z"/></svg>145</p>
                <!--others who follow-->
                <p class="text-xs mx-2 text-gray-400">foo, bar and more follow...</p>
            </div>
            <div>
                <div class="w-full pr-2 text-s flex self-end justify-end space-x-2">
                        <p class="bg-green-400 text-black text-m truncate p-1 max-w-48 rounded-md">tech</p>
                        <p class="bg-purple-400 text-black text-m truncate p-1 max-w-48 rounded-md">creative computing</p>
                        <p class="bg-slate-500 text-white text-m p-1 rounded-md">•••</p>
                </div>
                <button class="bg-secondary text-white py-2 px-4 rounded-full my-2 hover:bg-primary hover:text-white ease-in duration-150 font-bold">Follow</button>
            </div>
        </div>
        
    </div>
    <div class="text-2xl pb-4 font-body flex flex-col items-center justify-center">
        <template v-for="n in 10">
            <post :post="p"/>
        </template>
    </div>
    
</template>