import React from "react";
import { Text } from '@/components/ui/text';

interface TypographyProps {
  className: string
  children: React.ReactNode
}
export const Typography = (props: TypographyProps) => {
  const { children, className } = props
  return (
    <Text className={className}>{children}</Text>
  )
};