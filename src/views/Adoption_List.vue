<script setup>
import { NIcon, NModal } from "naive-ui";
import { useStore } from "@/store/store.js";
import { useRouter } from 'vue-router'
// 註冊 firebase
import { app, db } from "@/firebase.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref as fireRef, uploadBytes, listAll, getDownloadURL, deleteObject, getStorage } from "firebase/storage";
import { ref, onMounted } from "vue";
import { v4 } from "uuid";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "@firebase/firestore";
const store = useStore();
const showModal = ref(false);
const router = useRouter()
const auth = getAuth();
const storage = getStorage();
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
            showModal.value = false;
            getData();
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
//抓取資料
const getData = async () => {
    const datas = await getDocs(collection(db, store.UserEmail));
    const data = datas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    store.AllData = data;
    console.log(store.AllData);
};
onMounted(() => {
    getData();

});
// 圖片資料
// const imageListRef = fireRef(storage, "images/");
// const imageUpload = ref(null);
// const imageList = ref([]);
// onMounted(() => listAll(imageListRef).then((response) => {
//     response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//             imageList.value.push({
//                 id: item.fullPath,
//                 url: url,
//             });
//         });
//     });
//     console.log(imageList.value);
// }))
//上傳圖片
const imageUpload = ref(null);
function onFileChanged($event) {
    imageUpload.value = $event.target.files[0];
}
function uploadImage() {
    if (imageUpload.value == null) {
        alert("請選擇圖片");
        return;
    }
    const imageRef = fireRef(storage, `${imageUpload.value.name + v4()}`);
    uploadBytes(imageRef, imageUpload.value)
        .then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                // imageList.value.push({
                //     id: snapshot.ref.fullPath,
                //     url: url,
                // });
                store.NowPetPhoto = url;
                store.NowPetPhotoID = snapshot.ref.fullPath;
            });
            router.push("/adoption/edit");
        })
        .catch((error) => {
            console.log(error);
            showModal.value = false;
        });
}

//將當前資料網址傳到store
function setNowData(item) {
    store.$patch({ NowPetData: item });
    // store.$patch({ NowPetPhoto: url });
}
//刪除
const deleteItem = async (id, PicUrlID) => {
    console.log(PicUrlID);
    const desertRef = fireRef(storage, PicUrlID);
    const userDoc = doc(db, store.UserEmail, id);
    await deleteDoc(userDoc); //刪除資料
    await deleteObject(desertRef).then(() => {
        // 圖片成功刪除
    }).catch((error) => {
        console.log(error);
    });
    getData();
};
</script>
<template>
    <div class="px-4 lg:px-[120px] gap-3 py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <div class="shadow rounded-[28px] py-24 text-center grid place-items-center bg-white text-PeNi_pink">
            <div @click="showModal = true">
                <n-icon size="56" class="hover:text-pink-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                    </svg>
                </n-icon>
                <p>上傳寵物照片</p>
            </div>
        </div>
        <div v-if="store.UserEmail" v-for="(item, index) in store.AllData" :key="index"
            class="w-full relative justify-center shadow rounded-[28px] text-center bg-white">
            <router-link to="/adoption/Details" @click="setNowData(item)">
                <div class="aspect-w-3 aspect-h-3">
                    <img :src="item.PicUrl" class="rounded-[28px] object-cover align-middle border-none p-4" />
                </div>
                <div @click.stop.prevent="deleteItem(item.id, item.PicUrlID)" class="top-3 right-3 z-10 absolute">
                    <n-icon size="40" class="hover:text-pink-300 cursor-pointer text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="iconify iconify--ri" width="32" height="32"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0-9.414l2.828-2.829l1.415 1.415L13.414 12l2.829 2.828l-1.415 1.415L12 13.414l-2.828 2.829l-1.415-1.415L10.586 12L7.757 9.172l1.415-1.415L12 10.586z">
                            </path>
                        </svg>
                    </n-icon>
                </div>
                <div class="inline-flex">
                    <p class="text-xl font-black">{{ item.Name }}</p>
                    <n-icon size="30" class="text-PeNi_pink pl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="iconify iconify--ant-design" width="32" height="32"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                            <path fill="currentColor"
                                d="M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8c0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2C257.6 200.9 228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9c7.3 9.4 15.2 18.3 23.7 26.9c8.5 8.5 17.5 16.4 26.8 23.7c39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7zM512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1C404.2 161.5 456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556z" />
                        </svg>
                    </n-icon>
                </div>
                <div class="pt-1">
                    <p class="text-PeNi_grey">{{ item.City }}{{ item.District }}</p>
                </div>
            </router-link>
        </div>
        <!-- modal -->
        <n-modal v-model:show="showModal" transform-origin="center">
            <div class="grid place-items-center w-[466px] bg-white h-[240px] rounded-3xl text-center font-black py-11">
                <div v-if="!store.UserEmail">
                    <p class="text-lg pb-3">請登入帳號，才能發送養文</p>
                    <button @click="signInWithGoogle()"
                        class="bg-PeNi_black text-white rounded-lg hover:bg-PeNi_blue w-[236px] h-[46px] gap-4 flex justify-center items-center">
                        <img src="@/assets/google.png" alt="google login icon" />
                        <p>Google 登入</p>
                    </button>
                </div>
                <div v-if="store.UserEmail">
                    <label class="block">
                        <span class="sr-only">選擇照片</span>
                        <input type="file" class="block pb-3 pl-10 w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100" @change="onFileChanged($event)" accept="image/*"
                            multiple /></label>
                    <button
                        class="bg-PeNi_grey_light rounded-lg w-[236px] hover:bg-PeNi_black hover:text-white font-black h-[46px]"
                        @click="uploadImage()">上傳圖片</button>
                </div>
                <button @click="showModal = false"
                    class="bg-PeNi_grey_light rounded-lg w-[236px] hover:bg-PeNi_black hover:text-white font-black h-[46px]">取消</button>
            </div>
        </n-modal>
    </div>
</template>
<style lang="">
    
</style>