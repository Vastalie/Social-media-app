<script setup>
 const { post } = defineProps(['post']); 
</script>

<template>
    <div>
    <!--Post-->
        <div class="text-text border min-w-xl max-w-xl my-3 mx-2 text-xl">
          <!--user section-->
          <div class="flex items-center space-x-4">
            <!--Placeholder image replace when necessary-->
            <img src="/placeholder.png" class="w-12 h-12 m-1 inline-block rounded-full"/>
            <div>
              <div class="font-bold text-l">{{ post.displayName }}</div>
              <div class="font-thin text-xs">@{{ post.username }}</div>
            </div>
            <!--user tags-->
            <div class="w-full pr-1 text-xs flex justify-end space-x-2">
              <p class="bg-green-400 text-black p-1 rounded-md">computer science</p>
              <p class="bg-purple-400 text-black p-1 rounded-md">creative computing</p>
              <p class="bg-slate-500 p-1 rounded-md">•••</p>
            </div>
          </div>
          <!--media-->
          <!--text-->
          <div class="mx-1">
            We love lorem ipsum!! lorem ipsum so cool! I love lorum ipsum, why is lorum ipsum called lorum ipsum???
          </div>
          <!--content-->
          <div>

          </div>
          <!--Interactions-->
          <div class="my-1 flex item-center">
            <!--Heart icon-->
            <svg class="w-6 h-6 mx-2 fill-none stroke-primary hover:fill-current hover:stroke-none hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M12 5.881A5.39 5.39 0 0 1 16.05 4C18.822 4 21 6.178 21 8.95c0 3.4-3.055 6.17-7.684 10.367l-.011.01L12 20.515l-1.305-1.179-.036-.032C6.044 15.11 3 12.344 3 8.95 3 6.178 5.178 4 7.95 4A5.39 5.39 0 0 1 12 5.881Z"/></svg>
            <svg class="w-5 h-5 mx-2 fill-primary hover:fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M16 26c-1.168 0-2.296-.136-3.38-.367l-4.708 2.83.063-4.639C4.366 21.654 2 18.066 2 14 2 7.373 8.268 2 16 2s14 5.373 14 12c0 6.628-6.268 12-14 12Zm0-26C7.164 0 0 6.269 0 14c0 4.419 2.345 8.354 6 10.919V32l7.009-4.253c.97.16 1.968.253 2.991.253 8.836 0 16-6.268 16-14 0-7.731-7.164-14-16-14Z"/></svg>
          </div>
        </div>       
    </div>
</template>
