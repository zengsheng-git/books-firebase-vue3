<!--
 * @Author: zengsheng 12181283
 * @Date: 2025-09-17 09:10:05
 * @LastEditors: zengsheng 12181283
 * @LastEditTime: 2025-09-18 10:08:06
 * @FilePath: \books-firebase-vue3\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <defautLayout />
  <!-- <ul class="circles">
    <li v-for="i in CIRCLES_AMOUNT" :key="i"></li>
  </ul> -->
</template>

<script setup lang="js">
import defautLayout from '@/components/layouts/default.vue'

const CIRCLES_AMOUNT = 10;
</script>
