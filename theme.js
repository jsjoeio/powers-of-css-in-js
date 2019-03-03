import theme from 'mdx-deck/themes'
import Provider from './components/Provider'

export default {
  ...theme,
  font: 'Lato, sans-serif',
  Provider,
  heading: {
    fontFamily: 'Bangers, cursive',
  },
  colors: {
    ...theme.colors,
    text: '#f7f6fa',
    background: '#000'
  }
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}
