<script lang="js">
//we need this for the page redirect function
import { GoogleAuthProvider } from 'firebase/auth';
export const googleAuthProvider = new GoogleAuthProvider();
</script>

<script lang="js" setup>
//see https://vuejs.org/api/sfc-script-setup.html for why we need script setup
import { 
    getRedirectResult,
    signInWithRedirect, 
    signOut 
} from 'firebase/auth';

//even though vuefire is a global library I'm going to import anyways
import {useFirebaseAuth, useCurrentUser,useIsCurrentUserLoaded} from "vuefire";

definePageMeta({
    linkTitle: "login",
    order: 2,
    layout: "none",
})

const auth = useFirebaseAuth(); //only exists in the client side
const user = useCurrentUser();
const isUserLoaded = useIsCurrentUserLoaded();

//display any errors if any
const error = ref(null);

//user will be redirected to sign in
function signInRedirect(){
    signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
        console.error(`Failed signinRedirect`, reason);
        error.value = reason;
    })
}

//on the client side
onMounted(() => {
    getRedirectResult(auth).catch((reason) => {
        console.error("Failed signinRedirect", reason)
        error.value = reason;
    })
})

const route = useRoute();

</script>

<template>
    <ClientOnly>
        <div class="text-primary" v-if="!isUserLoaded">
            Loading...
        </div>
    </ClientOnly>
    
    <template v-if="user">
        <div class="text-primary">you're signed in!</div>
        <div class="bg-secondary hover:bg-primary hover:text-white ease-in duration-150 font-bold px-2 py-1 m-2 rounded-full w-fit" @click="signOut(auth)">sign out</div>
    </template>
    <template v-else>
        <div class="p-1 font-body flex items-center justify-center">
            <div class="max-w-xl min-w-80 h-80 border-2 m-2 p-2 border-primary text-primary">
                <div class="flex flex-col mt-5">
                    <!--title-->
                    <div class="text-4xl font-bold">Sign in</div>
                    <!--username-->
                    <div class="flex flex-row my-2">
                        <p>Username</p>
                        <input type="text" class="bg-gray-600 mx-1">
                    </div>
                    <!--password-->
                    <div class="flex flex-row my-2">
                        <p>Password</p>
                        <input type="password" class="bg-gray-600 mx-1">
                    </div>
                    <!--buttons-->
                    <button class="w-fit bg-secondary m-1 p-1 rounded-md"><p class="text-black text-sm">Sign in</p></button>
                    <button class="my-1">
                    <div @click="signInRedirect()" class="bg-googleBlue flex flex-row w-fit mx-1 border-1 border-googleBlue">
                        <img src="/google.jpg" class="w-8 h-8">
                        <div class="bg-googleBlue text-white font-sans px-2 py-1">sign in with google</div>
                    </div>
                </button>
 
                </div>
           
            </div>
        </div>
    </template>
    
</template>