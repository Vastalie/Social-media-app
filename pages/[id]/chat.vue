<script>
    definePageMeta({
        layout: "default",
        middleware: ["auth"],
    });
</script>

<template>
    <div class="bg-secondary text-white font-body ml-1 p-1 w-fit rounded-xl hover:bg-white hover:text-black ease-in duration-150"><a href="post">return</a></div>
    <div class="max-w-full font-body overflow-y-scroll h-[38rem]">
        <div v-for="n in 20" class="flex h-fit my-2">
            <!--message-->
            <img src="/placeholder.png" class="h-12 mx-1 rounded-full">
            <div>
                <!--time sent-->
                <p class="text-gray-400 text-xs">14:00 tuesday</p>
                <!--compare userID to the user's id, if true, colour blue, else green-->
                <div class=" bg-blue-500 max-w-60 min-w-10 py-1 px-2 my-2 text-white">This is a user text, you are blue, users are green, this is just dummy text</div>
            </div>
            
        </div>
    </div>
    <div class="flex">
        <!--input-->
        <input type="text" class="h-9 w-full">
        <!--send button-->
        <button class="bg-secondary p-2 text-white h-9">send</button>
    </div>
</template>