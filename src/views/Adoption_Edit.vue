<script setup>
import { ref, reactive } from "vue";
import { useStore } from "@/store/store.js";
import { NIcon } from "naive-ui";
import { useRouter } from 'vue-router'
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
const router = useRouter()

//使用者填入的新增資料
const newPicUrl = ref(null);
const newPicUrlID = ref(null);
const newCatsOrDog = ref(null);
const newGender = ref(null);
const newAge = ref(null);
const newName = ref(null);
const newColor = ref(null);
const newContact = ref(null);
const newCity = ref(null);
const newDistrict = ref(null);
const newCondition = ref(null);

//顯示未填寫警告
const showWarning = ref(false);
//狗或貓
const catsOrDog = reactive({ dogs: false, cats: false });
const gender = reactive({ male: false, female: false, unknown: false });
const age = reactive({ young: false, adult: false });
function clickFindBtn(e) {
    switch (e) {
        case "dogs":
            catsOrDog.dogs = true;
            catsOrDog.cats = false;
            newCatsOrDog.value = "狗";
            break;
        case "cats":
            catsOrDog.cats = true;
            catsOrDog.dogs = false;
            newCatsOrDog.value = "貓";
            break;
        case "male":
            gender.male = true;
            gender.female = false;
            gender.unknown = false;
            newGender.value = "male";
            break;
        case "female":
            gender.male = false;
            gender.female = true;
            gender.unknown = false;
            newGender.value = "female";
            break;
        case "unknown":
            gender.male = false;
            gender.female = false;
            gender.unknown = true;
            newGender.value = "性別不明";
            break;
        case "young":
            age.young = true;
            age.adult = false;
            newAge.value = "幼齡";
            break;
        case "adult":
            age.young = false;
            age.adult = true;
            newAge.value = "成年";
            break;
    }
}
//貓的毛色
const catColors = reactive({
    白貓: false,
    黑貓: false,
    乳牛貓: false,
    橘貓: false,
    虎斑貓: false,
    三色貓: false,
    玳瑁貓: false,
    灰白貓: false,
});
//狗的毛色
const dogColors = reactive({
    白犬: false,
    黑犬: false,
    紅棕犬: false,
    雙色犬: false,
    三色犬: false,
    黃犬: false,
    虎斑犬: false,
    灰犬: false,
});
//重置貓的毛色狀態: false
function ClearCatColors() {
    for (const key in catColors) {
        if (catColors[key] == true) {
            catColors[key] = false;
        }
    }
}
//重置狗的毛色狀態: false
function ClearDogColors() {
    for (const key in dogColors) {
        if (dogColors[key] == true) {
            dogColors[key] = false;
        }
    }
}

//更改catColors的值
function clickColorBtn(e) {
    const text = e.target.innerText;
    newColor.value = text;
    switch (text) {
        case "白貓":
            ClearCatColors()
            catColors.白貓 = true;
            break;
        case "黑貓":
            ClearCatColors()
            catColors.黑貓 = true;
            break;
        case "乳牛貓":
            ClearCatColors()
            catColors.乳牛貓 = true;
            break;
        case "橘貓":
            ClearCatColors()
            catColors.橘貓 = true;
            break;
        case "虎斑貓":
            ClearCatColors()
            catColors.虎斑貓 = true;
            break;
        case "三色貓":
            ClearCatColors()
            catColors.三色貓 = true;
            break;
        case "玳瑁貓":
            ClearCatColors()
            catColors.玳瑁貓 = true;
            break;
        case "灰白貓":
            ClearCatColors()
            catColors.灰白貓 = true;
            break;
        case "白犬":
            ClearDogColors()
            dogColors.白犬 = true;
            break;
        case "黑犬":
            ClearDogColors()
            dogColors.黑犬 = true;
            break;
        case "紅棕犬":
            ClearDogColors()
            dogColors.紅棕犬 = true;
            break;
        case "雙色犬":
            ClearDogColors()
            dogColors.雙色犬 = true;
            break;
        case "三色犬":
            ClearDogColors()
            dogColors.三色犬 = true;
            break;
        case "黃犬":
            ClearDogColors()
            dogColors.黃犬 = true;
            break;
        case "虎斑犬":
            ClearDogColors()
            dogColors.虎斑犬 = true;
            break;
        case "灰犬":
            ClearDogColors()
            dogColors.灰犬 = true;
            break;
    }
}

//輸入
const publishBtn = () => {
    newPicUrl.value = store.NowPetPhoto;
    newPicUrlID.value = store.NowPetPhotoID;
    if (!newCatsOrDog.value || !newGender.value || !newAge.value || !newColor.value || !newContact.value || !newCity.value || !newDistrict.value) {
        showWarning.value = true;
        return;
    }
    createData();
    router.push("/adoption/list");
}
const createData = async () => {
    if (newName.value = null) {
        newName.value = "尚未取名";
    }
    await addDoc(collection(db, store.UserEmail), {
        // Age: Number(newAge.value),
        PicUrl: newPicUrl.value,
        PicUrlID: newPicUrlID.value,
        CatsOrDog: newCatsOrDog.value,
        Gender: newGender.value,
        Age: newAge.value,
        Name: newName.value,
        Color: newColor.value,
        Contact: newContact.value,
        City: newCity.value,
        District: newDistrict.value,
        Condtion: newCondition.value,
    });
    newPicUrl.value = null;
    newPicUrlID.value = null;
    newCatsOrDog.value = null;
    newGender.value = null;
    newAge.value = null;
    newName.value = null;
    newColor.value = null;
    newContact.value = null;
    newCity.value = null;
    newDistrict.value = null;
    newCondition.value = null;
    showWarning.value = false;
};
//抓取資料
const getData = async () => {
    const datas = await getDocs(collection(db, store.UserEmail));
    const data = datas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    store.AllData = data;
};
//修改
const updateUser = async (id, CatsOrDog, Gender, Age, Name) => {
    const userDoc = doc(db, store.UserEmail, id);
    const newFields = { CatsOrDog: CatsOrDog, Gender: Gender, Age: Age, Name: Name };
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-3">
            <div class="flex flex-col gap-3 lg:col-span-2">
                <div class="bg-white rounded-[28px] p-4 shadow">
                    <div class="aspect-w-3 aspect-h-3">
                        <img :src="store.NowPetPhoto" class="rounded-[30px] object-cover align-middle border-none" />
                    </div>
                    <button
                        class="w-full text-white py-[13px] hover:bg-white hover:text-PeNi_pink hover:ring-2 hover:ring-PeNi_pink mt-3 bg-PeNi_pink rounded-2xl">替換照片</button>
                </div>
            </div>
            <div class="flex flex-col gap-3 lg:col-span-3">
                <div class="bg-white rounded-[28px] p-4 w-full shadow">
                    <div class="flex justify-between">
                        <div>
                            <p class="pb-2">
                                種類
                                <span class="text-PeNi_pink">(*必選)</span>
                            </p>
                            <div class="flex gap-1">
                                <button @click="clickFindBtn('cats')" :class="{ 'btn-adoption-active': catsOrDog.cats }"
                                    class="btn-adoption">
                                    <n-icon size="30">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                            class="iconify iconify--ph" width="32" height="32"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                            <path fill="currentColor"
                                                d="M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm60-76.7V136c0 52.9-46.7 96-104 96S24 188.9 24 136V51.3A16 16 0 0 1 51.3 40l17.2 17.2a106.2 106.2 0 0 1 24.3-11.5l1.6-.5a111.2 111.2 0 0 1 67.2 0l1.6.5a106.2 106.2 0 0 1 24.3 11.5L204.7 40A16 16 0 0 1 232 51.3Zm-16 0l-21.9 22a8.1 8.1 0 0 1-10.5.7a84.1 84.1 0 0 0-15.6-9.2V88a8 8 0 0 1-16 0V59.1a95.7 95.7 0 0 0-16-2.8V88a8 8 0 0 1-16 0V56.3a95.7 95.7 0 0 0-16 2.8V88a8 8 0 0 1-16 0V64.8A84.1 84.1 0 0 0 72.4 74a8.1 8.1 0 0 1-10.5-.7L40 51.3V136c0 41.7 35.2 76 80 79.7v-20.4l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3v20.4c44.8-3.7 80-38 80-79.7Z" />
                                        </svg>
                                    </n-icon>
                                </button>
                                <button @click="clickFindBtn('dogs')" :class="{ 'btn-adoption-active': catsOrDog.dogs }"
                                    class="btn-adoption">
                                    <n-icon size="30">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                            class="iconify iconify--ph" width="32" height="32"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                            <path fill="currentColor"
                                                d="M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68.7 16a16.1 16.1 0 0 1-6.7 1.4a15.6 15.6 0 0 1-10-3.6V184a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40v-42.2a15.6 15.6 0 0 1-10 3.6a16.1 16.1 0 0 1-6.7-1.4a15.8 15.8 0 0 1-9.1-17.6l16.4-87.5a16.1 16.1 0 0 1 19.6-12.6L105 40h46l54.8-13.7a16.1 16.1 0 0 1 19.6 12.6l16.4 87.5a15.8 15.8 0 0 1-9.1 17.6ZM90.1 52.8l-43.8-11l-16.4 87.6ZM200 184v-62l-51.9-66h-40.2L56 122v62a24.1 24.1 0 0 0 24 24h40v-12.7l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3V208h40a24.1 24.1 0 0 0 24-24Zm26.1-54.6l-16.4-87.6l-43.8 11Z" />
                                        </svg>
                                    </n-icon>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p class="pb-2">
                                性別
                                <span class="text-PeNi_pink">(*必選)</span>
                            </p>
                            <div class="flex gap-1">
                                <button @click="clickFindBtn('male')" :class="{ 'btn-adoption-active': gender.male }"
                                    class="btn-adoption text-PeNi_blue">
                                    <n-icon size="30">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                            class="iconify iconify--ant-design" width="32" height="32"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                            <path fill="currentColor"
                                                d="M874 120H622c-3.3 0-6 2.7-6 6v56c0 3.3 2.7 6 6 6h160.4L583.1 387.3c-50-38.5-111-59.3-175.1-59.3c-76.9 0-149.3 30-203.6 84.4S120 539.1 120 616s30 149.3 84.4 203.6C258.7 874 331.1 904 408 904s149.3-30 203.6-84.4C666 765.3 696 692.9 696 616c0-64.1-20.8-124.9-59.2-174.9L836 241.9V402c0 3.3 2.7 6 6 6h56c3.3 0 6-2.7 6-6V150c0-16.5-13.5-30-30-30zM408 828c-116.9 0-212-95.1-212-212s95.1-212 212-212s212 95.1 212 212s-95.1 212-212 212z" />
                                        </svg>
                                    </n-icon>
                                </button>
                                <button @click="clickFindBtn('female')"
                                    :class="{ 'btn-adoption-active': gender.female }"
                                    class="btn-adoption text-PeNi_pink">
                                    <n-icon size="30">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                            class="iconify iconify--ant-design" width="32" height="32"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                            <path fill="currentColor"
                                                d="M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8c0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2C257.6 200.9 228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9c7.3 9.4 15.2 18.3 23.7 26.9c8.5 8.5 17.5 16.4 26.8 23.7c39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7zM512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1C404.2 161.5 456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556z" />
                                        </svg>
                                    </n-icon>
                                </button>
                                <button @click="clickFindBtn('unknown')"
                                    :class="{ 'btn-adoption-active': gender.unknown }" class="btn-adoption">
                                    <p class="font-black">不明</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-[28px] p-4 w-full shadow">
                    <div>
                        <p class="pb-2">
                            年齡
                            <span class="text-PeNi_pink">(*必選)</span>
                        </p>
                        <div class="gap-3 grid grid-cols-2 justify-around">
                            <button @click="clickFindBtn('young')" :class="{ 'btn-adoption-active': age.young }"
                                class="btn-adoption">
                                <p class="font-black">幼齡</p>
                            </button>
                            <button @click="clickFindBtn('adult')" :class="{ 'btn-adoption-active': age.adult }"
                                class="btn-adoption">
                                <p class="font-black">成年</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-[28px] p-4 w-full shadow">
                    <div>
                        <p class="pb-2">牠的名字</p>
                        <div class="gap-3 grid">
                            <input v-model="newName"
                                class="bg-bg py-2 px-3 rounded-[14px] placeholder:text-PeNi_grey_light placeholder:font-black"
                                placeholder="若尚未取名可不填" />
                        </div>
                    </div>
                </div>
                <div v-if="catsOrDog.cats || catsOrDog.dogs" class="bg-white rounded-[28px] p-4 w-full shadow">
                    <div>
                        <p class="pb-2">
                            毛色
                            <span class="text-PeNi_pink">(*必選)</span>
                        </p>
                        <div class="gap-3 grid grid-cols-3 justify-around">
                            <button v-if="catsOrDog.cats" v-for="(value, key) in catColors"
                                @click="clickColorBtn($event)" :class="{ 'btn-adoption-active': value }"
                                class="btn-adoption">
                                <p class="font-black">{{ key }}</p>
                            </button>
                            <button v-if="catsOrDog.dogs" v-for="(value, key) in dogColors"
                                @click="clickColorBtn($event)" :class="{ 'btn-adoption-active': value }"
                                class="btn-adoption">
                                <p class="font-black">{{ key }}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 lg:col-span-3">
                <div class="bg-white rounded-[28px] p-4 w-full shadow">
                    <div>
                        <p class="pb-2">
                            聯絡方式
                            <span class="text-PeNi_pink">(*必選)</span>
                        </p>
                        <div class="gap-3 grid">
                            <input v-model="newContact"
                                class="bg-bg py-2 px-3 rounded-[14px] placeholder:text-PeNi_grey_light placeholder:font-black"
                                placeholder="聯絡方式 (電話、通訊等…)" />
                            <div class="grid grid-cols-2 gap-2">
                                <input v-model="newCity"
                                    class="bg-bg py-2 px-3 rounded-[14px] placeholder:text-PeNi_grey_light placeholder:font-black"
                                    placeholder="輸入縣市" />
                                <input v-model="newDistrict"
                                    class="bg-bg py-2 px-3 rounded-[14px] placeholder:text-PeNi_grey_light placeholder:font-black"
                                    placeholder="輸入區別" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-[28px] p-4 w-full shadow">
                    <div>
                        <p class="pb-2">狀況</p>
                        <div class="gap-3 grid">
                            <textarea v-model="newCondition" maxlength="40"
                                class="bg-bg py-2 px-3 rounded-[14px] border-0 placeholder:text-PeNi_grey_light placeholder:font-black"
                                placeholder="限40字" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <button @click="publishBtn()" class="bg-PeNi_black w-full rounded-2xl text-white p-5">發佈</button>
                </div>
                <p v-if="showWarning" class="text-PeNi_pink text-lg">
                    *必填項目尚未填寫完，
                    請填寫完整後再發佈。
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>