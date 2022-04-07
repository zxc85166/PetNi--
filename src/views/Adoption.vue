<script setup>
import { NIcon, NModal, NImage } from "naive-ui";
import { useStore } from "@/store/store.js";
// 註冊 firebase
import { app, storage } from "@/firebase.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref as fireRef, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { ref, onMounted } from "vue";
import { v4 } from "uuid";

const store = useStore();
const showModal = ref(false);
const auth = getAuth();
//google登入
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            store.UserName = user.displayName;
            store.PhotoURL = user.photoURL;
            store.setUserEmail(user.email);
            console.log(store.UserName, store.PhotoURL, store.UserEmail);
            showModal.value = false;
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
// 圖片資料
const imageListRef = fireRef(storage, "images/");
const imageUpload = ref(null);
const imageList = ref([]);
onMounted(() => listAll(imageListRef).then((response) => {
    response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
            imageList.value.push({
                id: item.fullPath,
                url: url,
            });
            console.log(imageList.value);
        });
    });
}))
//上傳圖片
function onFileChanged($event) {
    imageUpload.value = $event.target.files[0];
}
function uploadImage() {
    console.log(imageUpload.value);
    if (imageUpload.value == null) return;

    const imageRef = fireRef(storage, `images/${imageUpload.value.name + v4()}`);
    uploadBytes(imageRef, imageUpload.value)
        .then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                imageList.value.push({
                    url: url,
                });
            });
            showModal.value = false;
        })
        .catch((error) => {
            console.log(error);
            showModal.value = false;
        });
}

</script>
<template>
    <div
        class="bg-bg w-full h-screen px-4 lg:px-[120px] gap-3 py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
    >
        <div
            class="w-full h-[214px] shadow rounded-[28px] text-center grid place-items-center bg-white text-PeNi_pink"
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
        <div
            v-if="store.UserEmail"
            v-for="img in imageList"
            class="w-full h-[214px] shadow rounded-[28px] text-center bg-white"
        >
            <n-image width="100" :src="img.url" />
        </div>
        <!-- modal -->
        <n-modal v-model:show="showModal" transform-origin="center">
            <div
                class="grid place-items-center w-[466px] bg-white h-[240px] rounded-3xl text-center font-black py-11"
            >
                <div v-if="!store.UserEmail">
                    <p class="text-lg pb-3">請登入帳號，才能發送養文</p>
                    <button
                        @click="signInWithGoogle()"
                        class="bg-PeNi_black text-white rounded-lg hover:bg-PeNi_blue w-[236px] h-[46px] gap-4 flex justify-center items-center"
                    >
                        <img src="@/assets/google.png" alt="google login icon" />
                        <p>Google 登入</p>
                    </button>
                </div>
                <div v-if="store.UserEmail">
                    <input type="file" @change="onFileChanged($event)" accept="image/*" capture />
                    <button
                        class="bg-PeNi_grey_light rounded-lg w-[236px] hover:bg-PeNi_black hover:text-white font-black h-[46px]"
                        @click="uploadImage()"
                    >上傳圖片</button>
                </div>
                <button
                    @click="showModal = false"
                    class="bg-PeNi_grey_light rounded-lg w-[236px] hover:bg-PeNi_black hover:text-white font-black h-[46px]"
                >取消</button>
            </div>
        </n-modal>
    </div>
</template>
<style lang="">
    
</style>