import type { InjectionKey, ComputedRef } from 'vue'

export const themeKey = Symbol() as InjectionKey<ComputedRef<boolean>>
export const toggleThemeKey = Symbol() as InjectionKey<() => void>
