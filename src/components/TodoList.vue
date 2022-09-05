<template>
  <n-tabs type="line" animated default-value="finish">
    <n-tab-pane name="finish" tab="全部">
      <todo-classify :list="taskList" />
    </n-tab-pane>
    <n-tab-pane name="unfinished" tab="未完成">
      <todo-classify :list="unFinishedList" />
    </n-tab-pane>
    <n-tab-pane name="completed" tab="已完成">
      <todo-classify :list="completedList" />
    </n-tab-pane>
  </n-tabs>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { NTabs, NTabPane } from 'naive-ui';
import { TaskType } from './types';
import TodoClassify from './TodoClassify.vue';

const props = defineProps<{
  taskList: TaskType[];
}>();

const unFinishedList = computed<TaskType[]>(() => {
  return props.taskList.filter((task) => task.status === false);
});

const completedList = computed<TaskType[]>(() => {
  return props.taskList.filter((task) => task.status === true);
});
</script>

<style lang="less" scoped></style>
