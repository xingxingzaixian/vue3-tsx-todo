import { ref, defineComponent } from 'vue';
import { darkTheme, lightTheme } from 'naive-ui';
import { zhCN, dateZhCN, NConfigProvider, NGlobalStyle } from 'naive-ui';
import Layout from './components/Layout';

export default defineComponent({
  name: 'App',
  setup() {
    let theme = ref<string>('dark');

    const changeTheme = (value: string) => {
      theme.value = value;
    };

    return () => (
      <NConfigProvider theme={theme.value === 'dark' ? darkTheme : lightTheme} locale={zhCN} dateLocale={dateZhCN}>
        <NGlobalStyle />
        <Layout theme={theme.value} onUpdateTheme={changeTheme} />
      </NConfigProvider>
    );
  }
});
