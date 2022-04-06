<script setup>
import { NIcon, NModal } from "naive-ui";
import { useStore } from "@/store/store.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref } from "vue";

const store = useStore();
const showModal = ref(false);
//google登入
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            store.UserName = user.displayName;
            store.PhotoURL = user.photoURL;
            store.setUserEmail(user.email);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(errorCode, errorMessage, email, credential);
        });
};
</script>
<template>
    <div class="bg-bg w-full h-screen px-[120px] gap-3 py-10 grid grid-cols-6">
        <div
            class="w-[162px] h-[214px] shadow rounded-[28px] text-center grid place-items-center bg-white text-PeNi_pink"
        >
            <div @click="showModal = true">
                <n-icon size="56" class="hover:text-pink-300 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        class="iconify iconify--ic"
                        width="32"
                        height="32"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                        />
                    </svg>
                </n-icon>
                <p>上傳寵物照片</p>
            </div>
        </div>
        <!-- modal -->
        <n-modal v-model:show="showModal" transform-origin="center">
            <div
                class="grid place-items-center w-[466px] bg-white h-[240px] rounded-3xl text-center font-black py-11"
            >
                <p class="text-lg">請登入帳號，才能發送養文</p>
                <button
                    @click="signInWithGoogle()"
                    class="bg-PeNi_black text-white rounded-lg hover:bg-PeNi_blue w-[236px] h-[46px] gap-4 flex justify-center items-center"
                >
                    <img src="@/assets/google.png" alt="google login icon" />
                    <p>Google 登入</p>
                </button>
                <button
                    @click="showModal = false"
                    class="bg-PeNi_grey_light rounded-lg w-[236px] hover:bg-PeNi_black hover:text-white font-black h-[46px]"
                >取 消</button>
            </div>
        </n-modal>
    </div>
</template>
<style lang="">
    
</style>