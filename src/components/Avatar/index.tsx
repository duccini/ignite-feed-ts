import styles from './styles.module.css'

interface AvatarProps {
  avatarClass: 'sidebarAvatar' | 'commentAvatar' | 'postAvatar';
  src: string;
  alt?: string
}

export function Avatar({ avatarClass, src, alt }:AvatarProps) {
  let typeAvatar = ''

  switch (avatarClass) {
    case 'sidebarAvatar':
      typeAvatar = styles.sidebarAvatar
      break;
  
    case 'commentAvatar':
      typeAvatar = styles. commentAvatar
      break;

    case 'postAvatar':
      typeAvatar = styles.postAvatar
      break;
  }

  return (
    <img className={ typeAvatar } src={ src } alt={ alt } />
  )
}