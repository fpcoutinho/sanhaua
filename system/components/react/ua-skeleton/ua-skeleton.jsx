import '../../styles/ua-skeleton.scss'

export default function UaSkeletonReact({ format = 'round', width = '240px', height = '56px' }) {
  return <div className={`ua-skeleton ${format}`} style={{ width, height }} />
}
