import { computed, defineComponent, PropType } from 'vue';
import { NTabs, NTabPane } from 'naive-ui';
import { TaskType } from './types';
import TodoClassify from './TodoClassify';

export default defineComponent({
  name: 'TodoList',
  props: {
    taskList: {
      type: Array as PropType<TaskType[]>,
      default: []
    }
  },
  setup(props) {
    const unFinishedList = computed<TaskType[]>(() => {
      return props.taskList.filter((task) => task.status === false);
    });

    const completedList = computed<TaskType[]>(() => {
      return props.taskList.filter((task) => task.status === true);
    });

    return () => (
      <NTabs type="line" animated default-value="finish">
        <NTabPane name="finish" tab="全部">
          <TodoClassify list={props.taskList} />
        </NTabPane>
        <NTabPane name="unfinished" tab="未完成">
          <TodoClassify list={unFinishedList.value} />
        </NTabPane>
        <NTabPane name="completed" tab="已完成">
          <TodoClassify list={completedList.value} />
        </NTabPane>
      </NTabs>
    );
  }
});
