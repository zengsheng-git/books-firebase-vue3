<!--
 * @Author: zengsheng 12181283
 * @Date: 2025-09-17 09:10:05
 * @LastEditors: zengsheng 12181283
 * @LastEditTime: 2025-10-09 15:59:45
 * @FilePath: \books-firebase-vue3\src\views\Dashboard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <div class="header-left">
        <h1 class="main-title">Books List</h1>
        <nav class="navigation">
          <router-link to="/" class="nav-link">Book management</router-link>
          <router-link to="/weather" class="nav-link">Weather inquiry</router-link>
          <router-link to="/CountBookAPI" class="nav-link">Count Book API</router-link>
          <router-link to="/GetBookCount" class="nav-link">Get Book Count</router-link>
        </nav>
      </div>
      <div class="userWrip">
        <div class="username-display">{{ userName }}</div> 
        <LogoutButton />
      </div>
    </div>
    <TableComponent />
  </div>
</template>

<script setup lang="js">
import LogoutButton from '@/components/LogoutButton.vue'
import TableComponent from '@/components/dashboard/Table.vue';
const userName = localStorage.getItem('userName');

</script>

<style scoped>
.userWrip{
  display: flex;
  gap: 10px;
}

.dashboard-container {
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  min-height: 100vh;
  background: #f5f5f7;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
  gap: 1rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navigation {
  display: flex;
  gap: 1rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #ecf0f1;
}

.nav-link.router-link-active {
  background-color: #3498db;
  color: white;
}

.main-title {
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}

/* 用户名样式 */
.username-display {
  color: #34495e; /* 与标题颜色协调的深色 */
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  background: #ecf0f1; /* 浅灰色背景突出显示 */
  border-radius: 6px; /* 圆角处理 */
  white-space: nowrap; /* 避免用户名换行 */
}
</style>