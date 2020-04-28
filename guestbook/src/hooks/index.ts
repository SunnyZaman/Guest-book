import { createTypedHooks } from 'easy-peasy'; // 👈import the helper
import Store from '../interfaces/Store';

// Provide our model to the helper      👇
const typedHooks = createTypedHooks<Store>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;