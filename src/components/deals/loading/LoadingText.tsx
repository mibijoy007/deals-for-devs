import { cn } from '@/lib/utils'
import React from 'react'

interface LoadingTextProps {
  className?: string
  width?: LOADING_TEXT_WIDTHS
  style?: LOADING_TEXT_STYLE
}

export enum LOADING_TEXT_WIDTHS {
  XS = 'w-10',
  SMALL = 'w-20',
  MEDIUM = 'w-40',
  LARGE = 'w-60',
}

export enum LOADING_TEXT_STYLE {
  DARK = 'bg-gray-700 text-gray-700',
  LIGHT = 'bg-gray-200 text-gray-200',
}

export default function LoadingText({
  className,
  width = LOADING_TEXT_WIDTHS.MEDIUM,
  style = LOADING_TEXT_STYLE.DARK,
}: LoadingTextProps) {
  return (
    <div
      className={cn(
        'box-content h-[1lh] animate-pulse rounded-md ',
        width,
        style,
        className
      )}
    ></div>
  )
}
