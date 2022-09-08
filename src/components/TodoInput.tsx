import { ref, defineComponent } from 'vue';
import { NInput, NButton, NIcon } from 'naive-ui';
import { CashOutline } from '@vicons/ionicons5';
import styles from './style/todoinput.module.less';

export default defineComponent({
  name: 'TodoInput',
  emits: ['addTask'],
  setup(props, { emit }) {
    const value = ref<string>('');

    const addTask = (e: KeyboardEvent | MouseEvent) => {
      if (e instanceof KeyboardEvent && e.key !== 'Enter') {
        return;
      }
      emit('addTask', value.value);
      value.value = '';
    };

    return () => (
      <div class={styles.todoInput}>
        <NInput v-model:value={value.value} type="text" placeholder="请输入任务内容" onKeypress={addTask} />
        <NButton
          type="info"
          onClick={addTask}
          v-slots={{
            icon: () => (
              <NIcon>
                <CashOutline />
              </NIcon>
            )
          }}
        ></NButton>
      </div>
    );
  }
});
