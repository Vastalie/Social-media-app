<script setup>

    const CommunityName = useRoute().params.id;

    const p = {
        pfpURL: "/placeholder.png",
        displayName: "BirdLover123",
        username: "birdsAreCool",
        userTags: ["computer science", "creative computing", "game design"],
        content: "We love lorem ipsum!! lorem ipsum so cool! I love lorum ipsum, why is lorum ipsum called lorum ipsum???"
    }

    definePageMeta({
        middleware: ["auth"],
    });

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
                <div class="font-bold text-4xl mt-10 mx-2">{{ CommunityName }}</div>
                <!--community username-->
                <div class="mx-2 text-gray-400">@{{ CommunityName }}</div>
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
                <button class="bg-secondary text-white py-2 px-4 rounded-full my-2 hover:bg-primary hover:text-white ease-in duration-150 font-bold">Join</button>
                <div class="bg-secondary w-8 h-8 p-1 rounded-full hover:bg-white ease-in duration-150"><a href="chat"><svg class="stroke-white hover:stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-linecap="round"><path stroke-width="1.5" d="M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5"/><path stroke-linejoin="round" stroke-width="2" d="M8 12h.009m3.982 0H12m3.991 0H16"/></g></svg></a></div>
            </div>
        </div>
        
    </div>
    <div class="text-2xl pb-4 font-body flex flex-col items-center justify-center">
        <template v-for="n in 10">
            <post :post="p"/>
        </template>
    </div>
    
</template>