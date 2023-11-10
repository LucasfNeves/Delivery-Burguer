import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Guardando o valor inferido de forma automática pelo TypeScript de quais são as propriedades que exitem no meu tema dentro da váriavel ThemeType
type ThemeType = typeof defaultTheme

/**
 * criando tipagem para o modulo styled-components do npm
 * toda vez que eu importa o styled components em algum arquivo a tipagem que ele vai puxar é o que eu definir aqui dentro
 * como estou querendo sobreescrever a tipagem do styled-components e não criar uma tipagem nova por isso foi importado o styled-components aqui
 */

declare module 'styled-components' {
  // extends passa as propriedades de uma interface para outra no caso passamso a propriedade de ThemeType para DefaultTheme
  export interface DefaultTheme extends ThemeType {}
}
