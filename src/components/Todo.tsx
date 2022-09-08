import { reactive, provide, defineComponent } from 'vue';
import { NCard } from 'naive-ui';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { TaskType } from './types';
import { message } from '@/utils/message';

export default defineComponent({
  name: 'Todo',
  setup() {
    const taskList = reactive<TaskType[]>([]);
    let maxId = 1;

    const addTask = (value: string) => {
      if (!value.trim()) {
        message.error('请输入任务内容');
        return;
      }

      taskList.push({
        id: maxId + 1,
        content: value,
        status: false
      } as TaskType);
      maxId += 1;
      message.info('添加任务成功');
    };

    const updateTask = (id: number, finished: boolean) => {
      const task = taskList.find((task) => task.id === id);
      if (task) {
        task.status = finished;
        taskList.sort((a: TaskType, b: TaskType) => (a.status ? 1 : -1));

        if (finished) {
          message.success('任务已完成');
        } else {
          message.warning('任务重新打开');
        }
      }
    };

    const deleteTask = (id: number) => {
      const index = taskList.findIndex((task) => task.id === id);
      if (index >= 0) {
        taskList.splice(index, 1);
      }
      message.error('删除任务成功');
    };

    provide('update', updateTask);
    provide('delete', deleteTask);

    return () => (
      <NCard title="任务清单">
        <TodoInput onAddTask={addTask} />

        <TodoList taskList={taskList} />
      </NCard>
    );
  }
});
