import type { SkeletonFormat } from '../../../types/tokens'
import '../../styles/ua-skeleton.scss'

export interface UaSkeletonProps {
  format?: SkeletonFormat
  width?: string
  height?: string
  className?: string
}

export default function UaSkeleton({
  format = 'round',
  width = '240px',
  height = '56px',
  className
}: UaSkeletonProps) {
  return (
    <div className={['ua-skeleton', format, className].filter(Boolean).join(' ')} style={{ width, height }} />
  )
}
