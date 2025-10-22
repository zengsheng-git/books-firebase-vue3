<!--
 * @Author: zengsheng 12181283
 * @Date: 2025-09-17 09:10:05
 * @LastEditors: zengsheng 12181283
 * @LastEditTime: 2025-09-18 10:08:33
 * @FilePath: \books-firebase-vue3\src\components\LogoutButton.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <button type="button" class="btn btn-danger shadow-none" title="Logout" @click="logout">
        <i class="bi bi-power me-1"></i> Logout
    </button>
</template>

<script setup lang="js">
import { useAuthStore } from "@/stores/auth.js"

const store = useAuthStore();
const logout = () => {
    store.purgeAuth();
}
</script>

<style scoped>
.btn-danger {
    background: #e74c3c !important;
    border: none !important;
    color: white !important;
    border-radius: 8px !important;
    font-weight: 600 !important;
    transition: all 0.3s ease !important;
    padding: 8px 16px !important;
}

.btn-danger:hover {
    background: #c0392b !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 8px rgba(231, 76, 60, 0.2) !important;
}
</style>