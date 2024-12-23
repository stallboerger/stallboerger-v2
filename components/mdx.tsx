import * as React from 'react'
import Image from '@/components/image'
import { useMDXComponent } from 'next-contentlayer2/hooks'

const components = {
  Image
}

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
    
  return (
    <Component components={{ ...components }} />
  )
}