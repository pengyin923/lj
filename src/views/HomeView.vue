<script setup>
// import { Picture, CircleClose } from "@element-plus/icons-vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const set = () => {
  ElMessage.error("功能未开发");
};
const outSys = () => {
  router.push({
    name: "LogoPage",
  });
};
const list = reactive([
  {
    url: "../../src/assets/img/home1.gif",
    staticUrl: "../../src/assets/img/s1.png",
    srcUrl: "../../src/assets/img/s1.png",
  },
  {
    url: "../../src/assets/img/home2.gif",
    staticUrl: "../../src/assets/img/s2.png",
    srcUrl: "../../src/assets/img/s2.png",
  },
  {
    url: "../../src/assets/img/home3.gif",
    staticUrl: "../../src/assets/img/s3.png",
    srcUrl: "../../src/assets/img/s3.png",
  },
  {
    url: "../../src/assets/img/home4.gif",
    staticUrl: "../../src/assets/img/s4.png",
    srcUrl: "../../src/assets/img/s4.png",
  },
  {
    url: "../../src/assets/img/home5.gif",
    staticUrl: "../../src/assets/img/s5.png",
    srcUrl: "../../src/assets/img/s5.png",
  },
  {
    url: "../../src/assets/img/home6.gif",
    staticUrl: "../../src/assets/img/s6.png",
    srcUrl: "../../src/assets/img/s6.png",
  },
  {
    url: "../../src/assets/img/home3.gif",
    staticUrl: "../../src/assets/img/s3.png",
    srcUrl: "../../src/assets/img/s3.png",
  },
  {
    url: "../../src/assets/img/home3.gif",
    staticUrl: "../../src/assets/img/s3.png",
    srcUrl: "../../src/assets/img/s3.png",
  },
]);
const changeImage = (index, mouseType) => {
  if (mouseType) {
    list[index].staticUrl = list[index].url;
  } else {
    list[index].staticUrl = list[index].srcUrl;
  }
};
</script>
<template>
  <div class="home">
    <div class="header pr-3 flex-b-c">
      <img src="../../src/assets/img/h2.png" alt="" class="pic1" />
      <div class="flex-y-c">
        <img src="../../src/assets/img/h3.png" alt="" class="pic2 mr-2" />
        <div class="text">18°C~24°C</div>
        <div class="line mrl-3"></div>
        <el-popover placement="bottom" :width="200" trigger="hover">
          <template #reference>
            <div class="flex-c info">
              <div class="avatar flex-c mr-1">
                <el-icon class="avatar-pic" color="#DADADA"
                  ><Picture
                /></el-icon>
              </div>
              <div class="text mr-1">张三</div>
              <div class="typeName flex-c">校长</div>
            </div>
          </template>
          <div class="pop-list flex-y-c" @click="set">
            <el-icon><Switch /></el-icon>
            <div class="ml-1">切换身份</div>
          </div>
          <div class="pop-list flex-y-c" @click="set">
            <el-icon><MostlyCloudy /></el-icon>
            <div class="ml-1">后台管理系统</div>
          </div>
          <div class="pop-list flex-y-c" @click="outSys">
            <el-icon><CircleClose /></el-icon>
            <div class="ml-1">退出登录</div>
          </div>
        </el-popover>
      </div>
    </div>
    <div class="content-list flex-c">
      <div class="content">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="box"
          @click="set"
          @mouseover="changeImage(index, true)"
          @mouseleave="changeImage(index, false)"
        >
          <img :src="item.staticUrl" alt="" class="pic2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-image: url("../../src/assets/img/h1.png");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .header {
    height: 8rem;
    background-color: #2c97fb;
    .pic1 {
      // width: 35.2rem;
      // height: 7.2rem;
      width: 31.2rem;
      height: 4.2rem;
      object-fit: contain;
    }
    .pic2 {
      // width: 6.2rem;
      // height: 4.8rem;
      width: 4.2rem;
      height: 2.8rem;
      object-fit: contain;
    }
    .text {
      font-family: SourceHanSansCN-Medium;
      // font-size: 2.2rem;
      font-size: 2rem;
      font-weight: normal;
      color: #ffffff;
    }
    .line {
      width: 0.2rem;
      height: 3.7rem;
      background-color: #ffffff;
      border-radius: 1px;
      opacity: 0.2;
    }
    .info {
      cursor: pointer;
      .avatar {
        // width: 6.6rem;
        // height: 6.6rem;
        width: 4.6rem;
        height: 4.6rem;
        border-radius: 50%;
        background-color: #f2f2f2;
        .avatar-pic {
          // font-size: 5rem;
          font-size: 3rem;
        }
      }
      .typeName {
        width: 5.7rem;
        height: 2.5rem;
        background-color: #75e24a;
        border-radius: 0.4rem;
        font-family: SourceHanSansCN-Regular;
        font-size: 1.6rem;
        font-weight: normal;
        color: #ffffff;
      }
    }
  }
  .content-list {
    height: calc(100vh - 8rem);
    width: 100%;
  }
  .content {
    // margin: auto;
    box-sizing: border-box;
    padding: 5rem;
    // width: 124.4rem;
    // height: 58.6rem;
    // background-color: rgba(41, 46, 78, 0.15);
    background-color: rgba(127, 179, 234, 0.35);
    // background: rgb(255 255 255 /24%);
    box-shadow: 0 0.8rem 3.2rem 0 rgb(0 0 0 / 36%);
    backdrop-filter: blur(1.5rem);
    border: 0.1rem solid rgba(255, 255, 255, 0.18);

    border-radius: 12px;
    display: grid;
    grid-template-columns: repeat(4, 32.1rem);
    // grid-template-rows: repeat(2, 28.3rem);
    grid-row-gap: 1.5rem;
    grid-column-gap: 1.5rem;
    justify-content: center;
    align-content: center;
    // justify-items: center;
    // align-items: center;
    .box {
      // backdrop-filter: blur(1.5rem);
      // background-color: rgba(255, 255, 255, 0.3);
      background-color: rgba(255, 255, 255, 0.3);
      transition: all 0.4s;
      // backdrop-filter: blur(1.5rem);
      border-radius: 4px;
      cursor: pointer;

      .pic2 {
        width: 32.1rem;
        height: 28.3rem;
        z-index: 10;
      }
    }
    // .box:nth-child(4) {
    //   margin-right: 0;
    // }
    // .box:nth-child(8) {
    //   margin-right: 0;
    // }
  }
  .content > .box:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
    box-shadow: 0 0.5rem 0.5rem 0 rgb(0 0 0 / 10%);
  }
}
.pop-list {
  width: 15rem;
  height: 4rem;
  margin-left: 3.5rem;
  cursor: pointer;
  font-size: 1.6rem;
}
.pop-list:hover {
  color: #2c97fb;
}
</style>
