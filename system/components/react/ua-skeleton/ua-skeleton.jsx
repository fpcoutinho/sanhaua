import '../../styles/ua-skeleton.scss'

export default function UaSkeleton({ format = 'round', width = '240px', height = '56px' }) {
  return <div className={`ua-skeleton ${format}`} style={{ width, height }} />
}
