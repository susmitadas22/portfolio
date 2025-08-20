import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="rounded-sm" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    code: ({
      children,
      ...props
    }: ComponentPropsWithoutRef<'code'> & { children: ReactNode }) => {
      const codeString =
        typeof children === 'string'
          ? children
          : Array.isArray(children)
            ? children.join('')
            : ''
      const codeHTML = highlight(codeString)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
    table: (props: ComponentPropsWithoutRef<'table'>) => {
      return (
        <div className="my-4 overflow-x-auto rounded-md border border-gray-300 shadow-sm dark:border-gray-700">
          <table
            className="w-full border-collapse divide-y divide-gray-200 text-left dark:divide-gray-700"
            {...props}
          >
            {props.children}
          </table>
        </div>
      )
    },
    thead: (props: ComponentPropsWithoutRef<'thead'>) => {
      return <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
    },
    tbody: (props: ComponentPropsWithoutRef<'tbody'>) => {
      return <tbody className="bg-white dark:bg-gray-900" {...props} />
    },
    tr: (props: ComponentPropsWithoutRef<'tr'>) => {
      // Instead of striped prop, use CSS nth-child for striping:
      return (
        <tr
          className="odd:bg-gray-50 even:bg-white dark:odd:bg-gray-800 dark:even:bg-gray-900"
          {...props}
        />
      )
    },
    th: (props: ComponentPropsWithoutRef<'th'>) => {
      return (
        <th
          className="border-b border-gray-200 px-4 py-2 font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-300"
          {...props}
        />
      )
    },
    td: (props: ComponentPropsWithoutRef<'td'>) => {
      return (
        <td
          className="border-b border-gray-200 px-4 py-2 text-gray-600 dark:border-gray-700 dark:text-gray-400"
          {...props}
        />
      )
    },
  }
}
