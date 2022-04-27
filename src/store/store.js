import { defineStore } from "pinia";

export const useStore = defineStore({
  // id: 在所有 Store 中唯一
  id: "user",
  // state: 返回函數
  state: () => ({
    UserName: "登入",
    UserEmail: "",
    PhotoURL: "",
    //儲存取得資料
    UserData: "",
    //傳參數-送養寵物照片
    NowPetPhoto: "",
    NowPetPhotoID: "",
    //所有資料
    AllData: "",
    //當前資料
    NowPetData: "",
  }),
  getters: {},
  actions: {
    //清空
    clear() {
      this.UserName = "登入";
      this.UserEmail = "";
      this.PhotoURL = "";
      this.UserData = "";
    },
    //設定UserEmail
    setUserEmail(email) {
      this.UserEmail = email;
    },
  },
  // 開啟資料快取
  persist: {
    enabled: true,
  },
});
