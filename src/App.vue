<template>
  <n-config-provider :theme="theme === 'dark' ? darkTheme : lightTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-global-style />
    <Layout :theme="theme" @update:theme="changeTheme" />
  </n-config-provider>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import { darkTheme, lightTheme } from 'naive-ui';
import { zhCN, dateZhCN, NConfigProvider, NGlobalStyle } from 'naive-ui';
import Layout from './components/Layout.vue';

const theme = ref<string>('dark');

const changeTheme = (value: string) => {
  theme.value = value;
};
</script>

<style scoped></style>
