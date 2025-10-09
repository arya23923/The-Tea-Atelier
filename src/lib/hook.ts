import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'

// Correctly typed dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Typed selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Typed store
export const useAppStore = () => useStore<AppStore>()
