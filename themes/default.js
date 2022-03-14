import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: 'purple.500',
      },
      variants: {
        'nav-link': {
          padding: '0.5rem',
          // borderWidth: '1px',
          // borderColor: 'gray.400',
          borderRadius: '10px',
          bg: 'gray.100',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          '&:focus, &:hover': {
            // bg: 'gray.300',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          },
        },
      },
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: 'gray.100',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        'div#__next': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      },
      header: {
        zIndex: '1000',
        position: 'fixed',
        left: '0',
        top: '0',
        right: '0',
        height: '5rem',
        padding: '1rem',
        h1: {
          fontSize: 'xl',
        },
        nav: {
          a: {
            img: {
              width: '2rem',
              borderRadius: `${(10 / 57) * 2}rem`,
            },
            p: {
              marginLeft: '0.5rem',
            },
            '&:not(:first-of-type)': {
              marginLeft: '0.5rem',
            }
          },
        },
      },
      main: {
        padding: '1rem',
        marginTop: '5rem',
        '&[no-margin=true]': {
          marginTop: '0',
        },
      },
      footer: {
        padding: '1rem',
        bg: 'gray.200',
      },
      'aside.landing': {
        position: 'relative',
        zIndex: '100',
        width: '100%',
        // height: '700px',
        '> *' : {
          flex: '1'
        },
        'span': {
          display: 'block',
          width: '1920px',
          // height: '700px',
        },
        'img': {
          display: 'block',
          width: '1920px',
          // height: '700px',
          objectFit: 'cover',
        },
        '.store': {
          width: '160px',
          height: '54px',
          position: 'absolute',
          left: '50%',
          bottom: '1rem',
          transform: 'translateX(-50%)'
        }
      },
      form: {
        'div[role=group]': {
          '&:not(:first-of-type)': {
            marginTop: '1rem'
          }
        }
      }
    }),
  },
})

export default theme
