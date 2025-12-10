import { createViewer } from '@embedpdf/core';
import { CountingPluginPackage } from '@embedpdf/plugin-counting';

const viewer = createViewer({
  plugins: [
    CountingPluginPackage.create({ initialCount: 5 }),
  ],
});

const countingPlugin = viewer.getPlugin('counting');

if (countingPlugin) {
  console.log('Initial count:', countingPlugin.getState().count);
  countingPlugin.dispatch({ type: 'INCREMENT' });
  console.log('Count after increment:', countingPlugin.getState().count);
  countingPlugin.dispatch({ type: 'DECREMENT' });
  console.log('Count after decrement:', countingPlugin.getState().count);
}
