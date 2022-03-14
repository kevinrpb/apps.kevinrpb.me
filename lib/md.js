import { createElement } from 'react'

import { unified } from 'unified'
import parse from 'remark-parse'
import stringify from 'remark-stringify'
import extract from 'remark-extract-frontmatter'
import frontmatter from 'remark-frontmatter'
import gfm from 'remark-gfm'
import toRehype from 'remark-rehype'
import toReact from 'rehype-react'
import yaml from 'yaml'

import { Image, Text } from '@chakra-ui/react'

import Heading from '@components/heading'
import SaneLink from '@components/link'

const getComponent = (markdown) => {
  const react = unified()
    .use(parse)
    .use(stringify)
    .use(frontmatter, ['yaml'])
    .use(extract, { yaml: yaml.parse })
    .use(gfm)
    .use(toRehype)
    .use(toReact, {
      createElement,
      components: {
        a: SaneLink,
        p: Text,
        img: Image,
        h1: Heading.h1,
        h2: Heading.h2,
        h3: Heading.h3,
        h4: Heading.h4,
        h5: Heading.h5,
        h6: Heading.h6
      }
    })
    .processSync(markdown)

  return {
    meta: react.data,
    component: react.result
  }
}

export default getComponent
