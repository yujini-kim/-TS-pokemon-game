import { createContext, useContext, type ReactNode } from 'react'

/**
 * @description createScopedContext는 컴포넌트 내부에서 사용되는 컨텍스트를 생성하는 함수입니다.
 * @returns [Provider, useCustomContext]
 * @example
 * const [Provider, useCustomContext] = createScopedContext()
 *
 * function CustomProvider({ children }: { children: ReactNode }) {
 *   const [value, setValue] = useState(0)
 *   return <Provider value={{ value }}>{children}</Provider>
 * }
 *
 * function CustomComponent() {
 *   const { value } = useCustomContext()
 *   return <div>{value}</div>
 * }
 */

export default function createScopedContext() {
  function createCustomContext<ContextValueType extends object | null>(
    defaultContext?: ContextValueType,
  ) {
    const BaseContext = createContext<ContextValueType | undefined>(defaultContext)

    const Provider = ({ children, value }: { children: ReactNode; value: ContextValueType }) => {
      return <BaseContext.Provider value={value}>{children}</BaseContext.Provider>
    }

    const useCustomContext = () => {
      const context = useContext(BaseContext)

      if (!context) {
        throw new Error('useContext must be used within a Provider')
      }

      return context
    }

    return [Provider, useCustomContext] as const
  }

  return createCustomContext
}
