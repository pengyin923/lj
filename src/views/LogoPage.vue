<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import { Search } from "@element-plus/icons-vue";
import { CodeApi, loginApi } from "../api/loginApi.js";
import { useRouter } from "vue-router";
const Router = useRouter();
// import { ElMessage } from "element-plus";
const loginRef = ref();
const loginPara = reactive({
  loginTypeIndex: 0,
  codeLogin: false,
  uuid: "",
  PicCode: "",
});
const loginForm = reactive({
  // user: "13888106446",
  user: "",
  //不知道加密方式等，先写死 只能13888106446 Xshxy2020@能登录
  // Pass: "eUbsBO/QfpT2d2kay0VPklN0YZ2ljEMbSqydMTX6y6KZ/GBve4hJ7RGDkkroa5ErUGB4+OyeTTZeYErUCt9WYNsb+oMkavVHSxEl0G3FYTlh5C8MYZFrYPQz0ZBDphHjjzudgEdCMVNdNLZd3N3Uuyteus/QX5N0v14vWKBEfCo=",
  Pass: "",
  code: "",
  phone: "",
  SMSVerificationCode: "",
});
const validatePass1 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
};
const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
};
const validatePass3 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入验证码"));
  } else {
    callback();
  }
};
const loginRules = reactive({
  user: [{ validator: validatePass1, trigger: "blur" }],
  Pass: [{ validator: validatePass2, trigger: "blur" }],
  code: [{ validator: validatePass3, trigger: "blur" }],
});
const submitForm = (formEl) => {
  Router.push({
    name: "home",
  });
  // if (!formEl) return;
  // formEl.validate((valid) => {
  //   if (valid) {
  //     if (!loginRef.codeLogin) {
  //       loginApi({
  //         code: loginForm.code,
  //         loginName: loginForm.user,
  //         password: loginForm.Pass,
  //         type: 0,
  //         uuid: loginPara.uuid,
  //       }).then((res) => {
  //         console.log(res);
  //       });
  //     }
  //   } else {
  //     console.log("error submit!");
  //   }
  // });
};
const changeType = () => {
  loginPara.codeLogin = !loginPara.codeLogin;
};
//图形验证码
const getCode = () => {
  CodeApi().then((res) => {
    if (res.code === 0) {
      loginPara.uuid = res.data.uuid;
      loginPara.PicCode = "data:image/gif;base64," + res.data.img;
    }
  });
};
const set = () => {
  ElMessage.error("功能未开发");
};
onMounted(() => {
  getCode();
});
</script>

<template>
  <div class="logo flex-c">
    <div class="logo-gif">
      <img src="../../src/assets/img/h2.png" alt="" class="logo-pic" />
      <img src="../../src/assets/img/b1.gif" alt="" srcset="" class="bg-img" />
    </div>

    <div class="right">
      <div class="title flex-c">欢迎登录</div>
      <el-form
        ref="loginRef"
        style="max-width: 600px"
        :model="loginForm"
        status-icon
        :rules="loginRules"
      >
        <el-form-item prop="user" v-if="!loginPara.codeLogin">
          <div class="box flex-y-c">
            <img
              src="../../src/assets/img/l3.png"
              alt=""
              class="login-icon mr-3"
            />
            <el-input
              v-model="loginForm.user"
              autocomplete="off"
              placeholder="请输入用户名"
            />
          </div>
        </el-form-item>
        <el-form-item prop="phone" v-if="loginPara.codeLogin">
          <div class="box flex-y-c">
            <img
              src="../../src/assets/img/l3.png"
              alt=""
              class="login-icon mr-3"
            />
            <el-input
              v-model="loginForm.phone"
              autocomplete="off"
              placeholder="请输入账号"
            />
          </div>
        </el-form-item>
        <el-form-item prop="Pass" v-if="!loginPara.codeLogin">
          <div class="box flex-y-c">
            <img
              src="../../src/assets/img/l1.png"
              alt=""
              class="login-icon mr-3"
            />
            <el-input
              v-model="loginForm.Pass"
              autocomplete="off"
              placeholder="请输入密码"
            />
          </div>
        </el-form-item>
        <el-form-item prop="code">
          <div class="box flex-y-c">
            <img
              src="../../src/assets/img/l2.png"
              alt=""
              class="login-icon mr-3"
            />
            <el-input v-model="loginForm.code" placeholder="请输入图形验证码" />
            <div class="code" @click="getCode()">
              <img
                v-if="loginPara.PicCode"
                :src="loginPara.PicCode"
                alt=""
                srcset=""
                class="code"
              />
            </div>
          </div>
        </el-form-item>
        <el-form-item prop="SMSVerificationCode" v-if="loginPara.codeLogin">
          <div class="box flex-y-c">
            <img
              src="../../src/assets/img/l2.png"
              alt=""
              class="login-icon mr-3"
            />
            <el-input
              v-model.number="loginForm.SMSVerificationCode"
              placeholder="请输入短信验证码"
            />
            <div class="SMSVerificationCode" @click="set">短信验证码</div>
          </div>
        </el-form-item>
      </el-form>
      <div class="flex-b-c loginType">
        <div class="loginType-left" @click="changeType">
          {{ loginPara.codeLogin ? "账号密码登录" : "验证码登录" }}
        </div>
        <div class="loginType-right" @click="set">忘记密码?</div>
      </div>
      <div @click="submitForm(loginRef)" class="btn flex-c">立刻登录</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  width: 100vw;
  height: 100vh;
  background-image: url("../../src/assets/img/l4.png");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  .logo-gif {
    overflow: hidden;
    visibility: hidden;
    position: relative;
    box-shadow: 0.4rem 0rem 2.2rem 0rem rgba(73, 126, 255, 0.5);
    border-radius: 3rem;
    height: 82.3rem;
    width: 66.4rem;
    box-sizing: border-box;
    margin-left: 30%;
    animation: 0.4s linear 0.5s 1 forwards leftAnimation;
    z-index: 10;
    .logo-pic {
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translateX(-50%);
      width: 35.2rem;
      height: 7.2rem;
      object-fit: contain;
      // z-index: 10;
    }
    .bg-img {
      width: 66.5rem;
      height: 82.3rem;
      // width: 100%;
      // height: 100%;
      object-fit: contain;
      // z-index: 10;
    }
  }
}

.right {
  width: 60.3rem;
  height: 74rem;
  background-color: #ffffff;
  box-shadow: 0rem 1.4rem 4.9rem 0rem rgba(100, 177, 255, 0.4);
  border-radius: 3rem;
  margin-left: -1rem;
  padding: 0 5.5rem;
  box-sizing: border-box;
  visibility: hidden;
  animation: 0.7s ease-out 1.3s 1 forwards rightAnimation;
  overflow: hidden;
  .title {
    width: 100%;
    font-family: Alibaba-PuHuiTi-B;
    font-size: 4.3rem;
    font-weight: normal;
    color: #333333;
    margin-top: 12.3rem;
    margin-bottom: 4.5rem;
  }
  .box {
    height: 6rem;
    width: 100%;
    // border: 1px solid red;
    border-bottom: 0.1rem solid #868684;
    .login-icon {
      width: 2.6rem;
      height: 2.7rem;
    }
    .code {
      width: 15rem;
      height: 6rem;
      margin-bottom: 0.2rem;
    }
    .SMSVerificationCode {
      width: 15rem;
      height: 6rem;
      font-size: 1.4rem;
      color: #409eff;
      // border-left: 0.1rem solid #868684;
      cursor: pointer;
    }
  }
  .loginType {
    width: 100%;
    height: 8rem;
    .loginType-left {
      font-family: Alibaba-PuHuiTi-R;
      font-size: 2rem;
      font-weight: normal;
      color: #999999;
      cursor: pointer;
    }
    .loginType-right {
      font-family: Alibaba-PuHuiTi-R;
      font-size: 2rem;
      font-weight: normal;
      color: #3377ff;
      cursor: pointer;
    }
  }
  .btn {
    width: 47.2rem;
    height: 6.8rem;
    background-color: #3377ff;
    border-radius: 1rem;
    font-family: MicrosoftYaHei;
    font-size: 2.4rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }
}

/* 去掉 Element Plus Input 组件的边框 */
.el-input {
  :deep(.el-input__wrapper) {
    border: none !important;
    box-shadow: none !important;
    padding-left: 0 !important;
    // height: 6rem;
  }
  :deep(.el-input__inner) {
    //border: none !important;
    box-shadow: none !important;
    // border-bottom: 1px solid black;
  }
}
@keyframes leftAnimation {
  0% {
    visibility: hidden;
    transform: translateY(10rem);
    margin-left: 30%;
  }
  10% {
    visibility: visible;
  }
  50% {
    visibility: visible;
    transform: translateY(0);
    margin-left: 30%;
  }
  100% {
    visibility: visible;
    margin-left: 0;
    // transform: translateY(0);
  }
}
@keyframes rightAnimation {
  0% {
    visibility: hidden;
    transform: translateX(-20rem);
  }
  50% {
    visibility: visible;
    transform: translateX(5rem);
  }
  70% {
    visibility: visible;
    transform: translateX(0);
  }
  85% {
    visibility: visible;
    transform: translateX(0.5rem);
  }
  100% {
    visibility: visible;
    transform: translateX(0);
  }
}
</style>
