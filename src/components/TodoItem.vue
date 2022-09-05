<template>
  <n-space :wrap="false">
    <n-radio :checked="task.status" :label="task.content" @click="handleChecked"></n-radio>
    <n-button strong secondary circle type="error" size="tiny" @click="handleDelete">
      <template #icon>
        <n-icon><trash-bin-outline /></n-icon>
      </template>
    </n-button>
  </n-space>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import { NRadio, NButton, NIcon, NSpace } from 'naive-ui';
import { TrashBinOutline } from '@vicons/ionicons5';
import { TaskType } from './types';

const props = defineProps<{
  task: TaskType;
}>();

const updateTask = inject<(id: number, checked: boolean) => void>('update');
const deleteTask = inject<(id: number) => void>('delete');

const handleChecked = () => {
  if (updateTask) {
    updateTask(props.task.id, !props.task.status);
  }
};

const handleDelete = () => {
  if (deleteTask) {
    deleteTask(props.task.id);
  }
};
</script>

<style lang="less" scoped>
:deep(.n-radio-input:checked + .n-radio__dot-wrapper + .n-radio__label) {
  text-decoration: line-through;
}
</style>
