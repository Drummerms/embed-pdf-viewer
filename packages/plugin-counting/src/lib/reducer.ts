import { Reducer } from '@embedpdf/core';
import { CountingState, CountingPluginConfig } from './types';

export type CountingAction = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'RESET' };

export const initialState = (config: CountingPluginConfig): CountingState => ({
  count: config.initialCount || 0,
});

export const reducer: Reducer<CountingState, CountingAction> = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: Math.max(0, state.count - 1) };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};
