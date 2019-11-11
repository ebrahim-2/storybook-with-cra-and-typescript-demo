import { configure } from '@storybook/react';
import '../src/App.css';
// automatically import all files ending in *.stories.(tsx|jsx)
configure(require.context('../src/stories', true, /\.stories\.(mdx|[tj]sx?)$/), module);
