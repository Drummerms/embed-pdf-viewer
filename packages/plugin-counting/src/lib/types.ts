import { BasePluginConfig } from '@embedpdf/core';

export interface CountingPluginConfig extends BasePluginConfig {
  // Configuration options for the counting plugin
  initialCount: number;
}

export interface CountingState {
  count: number;
}
