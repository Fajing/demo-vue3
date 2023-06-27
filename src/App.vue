<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router="true"
    @select="handleSelect"
  >
    <el-menu-item index="/">森澜志愿通推荐系统（本地版）</el-menu-item>
    <el-menu-item index="/majorinfo">专业详细信息</el-menu-item>
  </el-menu>
  <router-view></router-view>
  
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';


const activeIndex2 = ref('1')


const handleSelect = (key: string, keyPath: string[]) => {
  // switch (key) {
  //   case '1':
  //     router.push('/')
  //     break;
  //     case '2':
  //     router.push('/majorinfo')
  //     break;
  //   default:
  //     break;
  // }
}
</script>
