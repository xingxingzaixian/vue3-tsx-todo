<template>
  <n-grid :cols="3">
    <n-grid-item :offset="1" class="grid-theme">
      <n-switch v-model:value="isDarkTheme" size="small" @update:value="changeTheme">
        <template #checked>深色</template>
        <template #unchecked>浅色</template>
      </n-switch>
    </n-grid-item>
    <n-grid-item :offset="1">
      <Todo />
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NGrid, NGridItem, NSwitch } from 'naive-ui';
import Todo from './Todo.vue';

const props = defineProps<{
  theme: string;
}>();

const emits = defineEmits<{
  (e: 'update:theme', theme: string): void;
}>();

const isDarkTheme = ref<boolean>(props.theme === 'dark' ? true : false);

const changeTheme = () => {
  if (isDarkTheme.value) {
    emits('update:theme', 'dark');
  } else {
    emits('update:theme', 'light');
  }
};
</script>

<style scoped>
.grid-theme {
  height: 150px;
  position: relative;
}

.grid-theme .n-switch {
  position: absolute;
  bottom: 5px;
  right: 0;
}
</style>
