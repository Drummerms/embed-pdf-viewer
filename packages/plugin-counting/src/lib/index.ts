import { PluginPackage } from '@embedpdf/core';
import { manifest, COUNTING_PLUGIN_ID } from './manifest';
import { CountingPluginConfig, CountingState } from './types';
import { CountingPlugin } from './counting-plugin';
import { initialState, reducer, CountingAction } from './reducer';

export const CountingPluginPackage: PluginPackage<
  CountingPlugin,
  CountingPluginConfig,
  CountingState,
  CountingAction
> = {
  manifest,
  create: (registry, config) => new CountingPlugin(COUNTING_PLUGIN_ID, registry, config),
  reducer,
  initialState: (_, config) => initialState(config),
};

export * from './counting-plugin';
export * from './types';
export * from './manifest';
export { initialState } from './reducer';
