<template>
  <n-scrollbar style="max-height: 50vh">
    <n-space vertical>
      <todo-item v-for="task in list" :key="task.id" :task="task"></todo-item>
    </n-space>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import { NSpace, NScrollbar } from 'naive-ui';
import { TaskType } from './types';
import TodoItem from './TodoItem.vue';

defineProps<{
  list: TaskType[];
}>();
</script>

<style lang="less" scoped></style>
