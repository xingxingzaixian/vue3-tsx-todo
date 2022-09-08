import { inject, defineComponent, PropType } from 'vue';
import { NRadio, NButton, NIcon, NSpace } from 'naive-ui';
import { TrashBinOutline } from '@vicons/ionicons5';
import { TaskType } from './types';
import './style/todoitem.less';

export default defineComponent({
  props: {
    task: Object as PropType<TaskType>
  },
  setup(props) {
    const updateTask = inject<(id: number, checked: boolean) => void>('update');
    const deleteTask = inject<(id: number) => void>('delete');

    const handleChecked = () => {
      if (updateTask && props.task) {
        updateTask(props.task.id, !props.task.status);
      }
    };

    const handleDelete = () => {
      if (deleteTask && props.task) {
        deleteTask(props.task.id);
      }
    };

    return () => {
      if (props.task) {
        return (
          <NSpace wrap={false} class="todoitem">
            <NRadio checked={props.task.status} label={props.task.content} onClick={handleChecked}></NRadio>
            <NButton
              strong
              secondary
              circle
              type="error"
              size="tiny"
              onClick={handleDelete}
              v-slots={{
                icon: () => (
                  <NIcon>
                    <TrashBinOutline />
                  </NIcon>
                )
              }}
            ></NButton>
          </NSpace>
        );
      }
    };
  }
});
