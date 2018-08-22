const type = {
  base: 'Lato-Regular',
  semibold: 'Lato-Semibold',
  medium: 'Lato-Medium',
  black: 'Lato-Black'
}

const size = {
  h1: 16,
  regular: 12,
  small: 11,
  h4: 10
}

const style = {
  h1: {
    fontFamily: type.semibold,
    fontSize: size.h1
  },
  h2: {
    fontFamily: type.black,
    fontSize: size.small
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.small
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  h4: {
    fontFamily: type.medium,
    fontSize: size.h4
  }
}

export default {
  type,
  size,
  style
}
