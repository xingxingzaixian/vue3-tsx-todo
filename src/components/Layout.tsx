import { defineComponent } from 'vue';
import { NGrid, NGridItem, NSwitch } from 'naive-ui';
import Todo from './Todo';
import styles from './style/layout.module.less';

export default defineComponent({
  name: 'Layout',
  props: {
    theme: String
  },
  emits: ['updateTheme'],
  setup(props, { emit }) {
    let isDarkTheme = props.theme === 'dark' ? true : false;

    const changeTheme = () => {
      if (isDarkTheme) {
        emit('updateTheme', 'dark');
      } else {
        emit('updateTheme', 'light');
      }
    };

    return () => (
      <NGrid cols={3}>
        <NGridItem offset={1} class={styles.gridTheme}>
          <NSwitch
            v-model:value={isDarkTheme}
            size="small"
            class={styles.switch}
            onUpdateValue={changeTheme}
            v-slots={{ checked: () => '深色', unchecked: () => '浅色' }}
          ></NSwitch>
        </NGridItem>
        <NGridItem offset={1}>
          <Todo />
        </NGridItem>
      </NGrid>
    );
  }
});
