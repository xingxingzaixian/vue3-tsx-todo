<template>
  <div class="todo-input">
    <n-input v-model:value="value" type="text" placeholder="请输入任务内容" @keypress.enter="addTask" />
    <n-button type="info" @click="addTask">
      <template #icon>
        <n-icon><cash-outline /></n-icon>
      </template>
    </n-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { NInput, NButton, NIcon } from 'naive-ui';
import { CashOutline } from '@vicons/ionicons5';

const emits = defineEmits<{
  (e: 'addTask', task: string): void;
}>();

const value = ref<string>('');

const addTask = () => {
  emits('addTask', value.value);
  value.value = '';
};
</script>

<style lang="less" scoped>
.todo-input {
  display: flex;
  gap: 8px;
}
</style>
