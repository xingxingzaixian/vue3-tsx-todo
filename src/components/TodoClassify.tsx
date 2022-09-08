import { defineComponent, PropType } from 'vue';
import { NSpace, NScrollbar } from 'naive-ui';
import { TaskType } from './types';
import TodoItem from './TodoItem';

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<TaskType[]>,
      default: []
    }
  },
  setup(props) {
    return () => (
      <NScrollbar style="max-height: 50vh">
        <NSpace vertical>
          {props.list.map((task) => (
            <TodoItem key={task.id} task={task}></TodoItem>
          ))}
        </NSpace>
      </NScrollbar>
    );
  }
});
