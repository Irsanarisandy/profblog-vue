import { configure } from '@storybook/vue';
import '../src/styles/main.scss';

const loadStories = () => {
  const req = require.context('./stories', false, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
