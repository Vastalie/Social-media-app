<script setup>
    const { c , joined } = defineProps(['c', 'joined']);

</script>


<template>
<!--Community module-->
        <div class=" w-80 min-h-64 mx-4 my-2 relative border-primary border-2">
            <!--Banner-->
            <img src="/placeholder_banner.png">
            <div>
                <!--Community pfp-->
                <img src="/placeholder.png" class="w-12 h-12 ml-2 rounded-full absolute top-32">
                <div class="my-1">
                    <!--community tags-->
                    <div class="w-full pr-1 text-xs flex justify-end space-x-2">
                        <p class="bg-green-400 text-black truncate p-1 max-w-24 rounded-md">tech</p>
                        <p class="bg-purple-400 text-black truncate p-1 max-w-24 rounded-md">creative computing</p>
                        <p class="bg-slate-500 text-white p-1 rounded-md">•••</p>
                    </div>
                    <!--User count-->
                    <p class="text-sm mx-2 text-gray-400"><svg class="fill-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M231.942 219.99a8.001 8.001 0 0 1-6.93 4.003L30.99 223.99a8 8 0 0 1-6.924-12.007 120.488 120.488 0 0 1 67.119-54.14 72 72 0 1 1 73.633 0 120.487 120.487 0 0 1 67.12 54.142 8.001 8.001 0 0 1 .005 8.004Z"/></svg>145</p>
                </div>
                
            </div>
            
            <!--others who follow-->
            <p class="text-xs mx-2 text-gray-400">foo, bar and more follow...</p>
            <!--Community name-->
            <p class="font-bold mx-2">{{ c.name }}</p>
            <!--Community username-->
            <p class="text-xs mx-2 my-1">@{{ c.username }}</p>
            <!--Description-->
            <p class="mx-2 text-xs">
                {{ c.desc }}
            </p>
            <!--join button-->
            <template v-if="!joined">
                <button class="bg-secondary hover:bg-primary hover:text-white ease-in duration-150 font-bold px-2 m-2 rounded-full">Join</button>
            </template>
            <button class="bg-secondary hover:bg-primary hover:text-white ease-in duration-150 font-bold px-2 m-2 rounded-full"><a :href="'/' + c.username + '/post'">visit</a></button>
        </div>
</template>
