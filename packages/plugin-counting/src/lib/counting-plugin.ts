import { Plugin, PluginRegistry } from '@embedpdf/core';
import { CountingPluginConfig, CountingState } from './types';
import { COUNTING_PLUGIN_ID } from './manifest';
import { CountingAction } from './reducer';

export class CountingPlugin extends Plugin<CountingPluginConfig, CountingState, CountingAction> {
  constructor(id: string, registry: PluginRegistry, config: CountingPluginConfig) {
    super(id, registry, config);
  }

  public getCount(): number {
    return this.getState().count;
  }

  public increment(): void {
    this.dispatch({ type: 'INCREMENT' });
  }

  public decrement(): void {
    this.dispatch({ type: 'DECREMENT' });
  }

  public reset(): void {
    this.dispatch({ type: 'RESET' });
  }

  // Lifecycle methods
  public onInit(): void {
    this.logger.info('CountingPlugin initialized with initial count:', this.config.initialCount);
  }

  public onDestroy(): void {
    this.logger.info('CountingPlugin destroyed.');
  }
}
