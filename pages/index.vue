<script setup>

  definePageMeta({
    middleware: ["auth"],
  })

  // this is to demonstrate handling the document obj
   const p = {
    pfpURL: "/placeholder.png",
    displayName: "BirdLover123",
    username: "birdsAreCool",
    userTags: ["computer science", "creative computing", "game design"],
    content: "We love lorem ipsum!! lorem ipsum so cool! I love lorum ipsum, why is lorum ipsum called lorum ipsum???"
   } 
</script>

<template>
    <div class="text-2xl font-body flex flex-col items-center justify-center">
        <!--post box-->
        <div class="text-text w-1/2 border p-1 my-3 mx-2 text-xl">
          <!--user section-->
          <div class="flex items-center space-x-4">
            <!--Placeholder image replace when necessary-->
            <img src="/placeholder.png" class="w-12 h-12 m-1 inline-block rounded-full"/>
            <div>
              <div class="font-bold text-l">BirdLover123</div>
              <div class="font-thin text-xs">@birdsAreCool</div>
            </div>
            
          </div>
          <!--media-->
          <!--text-->
          <form class="mx-1 text-text">
            <textarea class="bg-background border-none w-full h-20 my-2 resize-none placeholder:text-gray-400" placeholder="Say something!"></textarea>
          </form>
          <!--content-->
          <div>

          </div>
          <!--Interactions-->
          <div class="my-1 flex item-center">
            <!--Heart icon-->
            <button class="bg-secondary hover:bg-primary hover:text-white ease-in duration-150 py-1 px-2 rounded-2xl self-end">
              <p class="m-0 font-bold text-sm">Post</p>
            </button>
          </div>
        </div>
        <!--Make sure the template element has a v-for to loop through posts-->
        <template v-for="n in 10">
          <Post :post="p"/>
      </template>
    </div>
</template>