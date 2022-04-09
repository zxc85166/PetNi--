<script setup>
import { ref, reactive } from "vue";
import { useStore } from "@/store/store.js";
import { NIcon } from "naive-ui";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "@firebase/firestore";
import { db } from "@/firebase.js";

const store = useStore();

//狗或貓
const catsOrDog = reactive({ dogs: false, cats: false });
const gender = reactive({ male: false, female: false, unknown: false });
function clickFindBtn(e) {
    switch (e) {
        case "dogs":
            catsOrDog.dogs = true;
            catsOrDog.cats = false;
            break;
        case "cats":
            catsOrDog.cats = true;
            catsOrDog.dogs = false;
            break;
        case "male":
            gender.male = true;
            gender.female = false;
            gender.unknown = false;
            break;
        case "female":
            gender.male = false;
            gender.female = true;
            gender.unknown = false;
            break;
        case "unknown":
            gender.male = false;
            gender.female = false;
            gender.unknown = true;
            break;
    }
}
//使用者填入的新增資料
const newNote = ref(null);
const newDate = ref(null);
const newHeight = ref(null);
const newWeight = ref(null);

//抓取資料
const getData = async () => {
    const datas = await getDocs(collection(db, store.UserEmail));
    const data = datas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    store.UserData = data;
};
//輸入
const createUser = async () => {
    await addDoc(collection(db, store.UserEmail), {
        note: newNote.value,
        date: newDate.value,
        height: Number(newHeight.value),
        weight: Number(newWeight.value),
    });
    newNote.value = null;
    newDate.value = null;
    newHeight.value = null;
    newWeight.value = null;
    getData();
};
//修改
const updateUser = async (id, date, height, weight, note) => {
    const userDoc = doc(db, store.UserEmail, id);
    const newFields = { date: date, height: height, weight: weight, note: note };
    await updateDoc(userDoc, newFields);
    getData();
};
//刪除
const deleteUser = async (id) => {
    const userDoc = doc(db, store.UserEmail, id);
    await deleteDoc(userDoc);
    getData();
};
</script>

<template>
    <div class="px-4 lg:px-[128px] lg:py-16 md:py-12 py-7 font-bold text-base">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div class="bg-white rounded-[28px] p-4">
                <div>
                    <img
                        :src="store.NowPetPhoto"
                        class="rounded-[30px] h-auto align-middle border-none"
                    />
                </div>
                <button
                    class="w-full text-white py-[13px] hover:bg-white hover:text-PeNi_pink hover:ring-2 hover:ring-PeNi_pink mt-3 bg-PeNi_pink rounded-2xl"
                >替換照片</button>
            </div>
            <div class="flex flex-col gap-3">
                <div class="bg-white rounded-[28px] p-4 w-full">
                    <div class="flex justify-between">
                        <div>
                            <p>
                                種類
                                <span class="text-PeNi_pink">(*必選)</span>
                            </p>
                            <div class="flex gap-1">
                                <button
                                    @click="clickFindBtn('cats')"
                                    :class="{ 'btn-adoption-active': catsOrDog.cats }"
                                    class="btn-adoption"
                                >
                                    <n-icon size="30">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            class="iconify iconify--ph"
                                            width="32"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm60-76.7V136c0 52.9-46.7 96-104 96S24 188.9 24 136V51.3A16 16 0 0 1 51.3 40l17.2 17.2a106.2 106.2 0 0 1 24.3-11.5l1.6-.5a111.2 111.2 0 0 1 67.2 0l1.6.5a106.2 106.2 0 0 1 24.3 11.5L204.7 40A16 16 0 0 1 232 51.3Zm-16 0l-21.9 22a8.1 8.1 0 0 1-10.5.7a84.1 84.1 0 0 0-15.6-9.2V88a8 8 0 0 1-16 0V59.1a95.7 95.7 0 0 0-16-2.8V88a8 8 0 0 1-16 0V56.3a95.7 95.7 0 0 0-16 2.8V88a8 8 0 0 1-16 0V64.8A84.1 84.1 0 0 0 72.4 74a8.1 8.1 0 0 1-10.5-.7L40 51.3V136c0 41.7 35.2 76 80 79.7v-20.4l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3v20.4c44.8-3.7 80-38 80-79.7Z"
                                            />
                                        </svg>
                                    </n-icon>
                                </button>
                                <button
                                    @click="clickFindBtn('dogs')"
                                    :class="{ 'btn-adoption-active': catsOrDog.dogs }"
                                    class="btn-adoption"
                                >
                                    <n-icon size="30">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            class="iconify iconify--ph"
                                            width="32"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68.7 16a16.1 16.1 0 0 1-6.7 1.4a15.6 15.6 0 0 1-10-3.6V184a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40v-42.2a15.6 15.6 0 0 1-10 3.6a16.1 16.1 0 0 1-6.7-1.4a15.8 15.8 0 0 1-9.1-17.6l16.4-87.5a16.1 16.1 0 0 1 19.6-12.6L105 40h46l54.8-13.7a16.1 16.1 0 0 1 19.6 12.6l16.4 87.5a15.8 15.8 0 0 1-9.1 17.6ZM90.1 52.8l-43.8-11l-16.4 87.6ZM200 184v-62l-51.9-66h-40.2L56 122v62a24.1 24.1 0 0 0 24 24h40v-12.7l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3V208h40a24.1 24.1 0 0 0 24-24Zm26.1-54.6l-16.4-87.6l-43.8 11Z"
                                            />
                                        </svg>
                                    </n-icon>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p>
                                性別
                                <span class="text-PeNi_pink">(*必選)</span>
                            </p>
                            <div class="flex gap-1">
                                <button
                                    @click="clickFindBtn('male')"
                                    :class="{ 'btn-adoption-active': gender.male }"
                                    class="btn-adoption"
                                >
                                    <n-icon size="30">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            class="iconify iconify--ph"
                                            width="32"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm60-76.7V136c0 52.9-46.7 96-104 96S24 188.9 24 136V51.3A16 16 0 0 1 51.3 40l17.2 17.2a106.2 106.2 0 0 1 24.3-11.5l1.6-.5a111.2 111.2 0 0 1 67.2 0l1.6.5a106.2 106.2 0 0 1 24.3 11.5L204.7 40A16 16 0 0 1 232 51.3Zm-16 0l-21.9 22a8.1 8.1 0 0 1-10.5.7a84.1 84.1 0 0 0-15.6-9.2V88a8 8 0 0 1-16 0V59.1a95.7 95.7 0 0 0-16-2.8V88a8 8 0 0 1-16 0V56.3a95.7 95.7 0 0 0-16 2.8V88a8 8 0 0 1-16 0V64.8A84.1 84.1 0 0 0 72.4 74a8.1 8.1 0 0 1-10.5-.7L40 51.3V136c0 41.7 35.2 76 80 79.7v-20.4l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3v20.4c44.8-3.7 80-38 80-79.7Z"
                                            />
                                        </svg>
                                    </n-icon>
                                </button>
                                <button
                                    @click="clickFindBtn('female')"
                                    :class="{ 'btn-adoption-active': gender.female }"
                                    class="btn-adoption"
                                >
                                    <n-icon size="30">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            class="iconify iconify--ph"
                                            width="32"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68.7 16a16.1 16.1 0 0 1-6.7 1.4a15.6 15.6 0 0 1-10-3.6V184a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40v-42.2a15.6 15.6 0 0 1-10 3.6a16.1 16.1 0 0 1-6.7-1.4a15.8 15.8 0 0 1-9.1-17.6l16.4-87.5a16.1 16.1 0 0 1 19.6-12.6L105 40h46l54.8-13.7a16.1 16.1 0 0 1 19.6 12.6l16.4 87.5a15.8 15.8 0 0 1-9.1 17.6ZM90.1 52.8l-43.8-11l-16.4 87.6ZM200 184v-62l-51.9-66h-40.2L56 122v62a24.1 24.1 0 0 0 24 24h40v-12.7l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3V208h40a24.1 24.1 0 0 0 24-24Zm26.1-54.6l-16.4-87.6l-43.8 11Z"
                                            />
                                        </svg>
                                    </n-icon>
                                </button>
                                <button
                                    @click="clickFindBtn('unknown')"
                                    :class="{ 'btn-adoption-active': gender.unknown }"
                                    class="btn-adoption"
                                >
                                    <p class="font-black">不明</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-[28px] p-4 w-full">
                    <div class="flex justify-between">
                        <div>
                            <p>
                                種類
                                <span class="text-PeNi_pink">(*必選)</span>
                            </p>
                            <div class="flex gap-1">
                                <button
                                    @click="clickFindBtn('cats')"
                                    :class="{ 'btn-adoption-active': catsOrDog.cats }"
                                    class="btn-adoption"
                                >
                                    <n-icon size="30">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            class="iconify iconify--ph"
                                            width="32"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm60-76.7V136c0 52.9-46.7 96-104 96S24 188.9 24 136V51.3A16 16 0 0 1 51.3 40l17.2 17.2a106.2 106.2 0 0 1 24.3-11.5l1.6-.5a111.2 111.2 0 0 1 67.2 0l1.6.5a106.2 106.2 0 0 1 24.3 11.5L204.7 40A16 16 0 0 1 232 51.3Zm-16 0l-21.9 22a8.1 8.1 0 0 1-10.5.7a84.1 84.1 0 0 0-15.6-9.2V88a8 8 0 0 1-16 0V59.1a95.7 95.7 0 0 0-16-2.8V88a8 8 0 0 1-16 0V56.3a95.7 95.7 0 0 0-16 2.8V88a8 8 0 0 1-16 0V64.8A84.1 84.1 0 0 0 72.4 74a8.1 8.1 0 0 1-10.5-.7L40 51.3V136c0 41.7 35.2 76 80 79.7v-20.4l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3v20.4c44.8-3.7 80-38 80-79.7Z"
                                            />
                                        </svg>
                                    </n-icon>
                                </button>
                                <button
                                    @click="clickFindBtn('dogs')"
                                    :class="{ 'btn-adoption-active': catsOrDog.dogs }"
                                    class="btn-adoption"
                                >
                                    <n-icon size="30">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            class="iconify iconify--ph"
                                            width="32"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68.7 16a16.1 16.1 0 0 1-6.7 1.4a15.6 15.6 0 0 1-10-3.6V184a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40v-42.2a15.6 15.6 0 0 1-10 3.6a16.1 16.1 0 0 1-6.7-1.4a15.8 15.8 0 0 1-9.1-17.6l16.4-87.5a16.1 16.1 0 0 1 19.6-12.6L105 40h46l54.8-13.7a16.1 16.1 0 0 1 19.6 12.6l16.4 87.5a15.8 15.8 0 0 1-9.1 17.6ZM90.1 52.8l-43.8-11l-16.4 87.6ZM200 184v-62l-51.9-66h-40.2L56 122v62a24.1 24.1 0 0 0 24 24h40v-12.7l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3V208h40a24.1 24.1 0 0 0 24-24Zm26.1-54.6l-16.4-87.6l-43.8 11Z"
                                            />
                                        </svg>
                                    </n-icon>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p>
                                性別
                                <span class="text-PeNi_pink">(*必選)</span>
                            </p>
                            <div class="flex gap-1">
                                <button
                                    @click="clickFindBtn('male')"
                                    :class="{ 'btn-adoption-active': gender.male }"
                                    class="btn-adoption"
                                >
                                    <n-icon size="30">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            class="iconify iconify--ph"
                                            width="32"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm60-76.7V136c0 52.9-46.7 96-104 96S24 188.9 24 136V51.3A16 16 0 0 1 51.3 40l17.2 17.2a106.2 106.2 0 0 1 24.3-11.5l1.6-.5a111.2 111.2 0 0 1 67.2 0l1.6.5a106.2 106.2 0 0 1 24.3 11.5L204.7 40A16 16 0 0 1 232 51.3Zm-16 0l-21.9 22a8.1 8.1 0 0 1-10.5.7a84.1 84.1 0 0 0-15.6-9.2V88a8 8 0 0 1-16 0V59.1a95.7 95.7 0 0 0-16-2.8V88a8 8 0 0 1-16 0V56.3a95.7 95.7 0 0 0-16 2.8V88a8 8 0 0 1-16 0V64.8A84.1 84.1 0 0 0 72.4 74a8.1 8.1 0 0 1-10.5-.7L40 51.3V136c0 41.7 35.2 76 80 79.7v-20.4l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3v20.4c44.8-3.7 80-38 80-79.7Z"
                                            />
                                        </svg>
                                    </n-icon>
                                </button>
                                <button
                                    @click="clickFindBtn('female')"
                                    :class="{ 'btn-adoption-active': gender.female }"
                                    class="btn-adoption"
                                >
                                    <n-icon size="30">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            class="iconify iconify--ph"
                                            width="32"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68.7 16a16.1 16.1 0 0 1-6.7 1.4a15.6 15.6 0 0 1-10-3.6V184a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40v-42.2a15.6 15.6 0 0 1-10 3.6a16.1 16.1 0 0 1-6.7-1.4a15.8 15.8 0 0 1-9.1-17.6l16.4-87.5a16.1 16.1 0 0 1 19.6-12.6L105 40h46l54.8-13.7a16.1 16.1 0 0 1 19.6 12.6l16.4 87.5a15.8 15.8 0 0 1-9.1 17.6ZM90.1 52.8l-43.8-11l-16.4 87.6ZM200 184v-62l-51.9-66h-40.2L56 122v62a24.1 24.1 0 0 0 24 24h40v-12.7l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3V208h40a24.1 24.1 0 0 0 24-24Zm26.1-54.6l-16.4-87.6l-43.8 11Z"
                                            />
                                        </svg>
                                    </n-icon>
                                </button>
                                <button
                                    @click="clickFindBtn('unknown')"
                                    :class="{ 'btn-adoption-active': gender.unknown }"
                                    class="btn-adoption"
                                >
                                    <p class="font-black">不明</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-[28px] p-4 w-full">2</div>
        </div>
    </div>
</template>

<style scoped>
</style>