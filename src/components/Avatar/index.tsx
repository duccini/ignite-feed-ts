import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  avatarClass: 'sidebarAvatar' | 'commentAvatar' | 'postAvatar';
}

export function Avatar({ avatarClass, ...props }:AvatarProps) {
  /*
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
  */

  return (
    <img className={ styles[avatarClass] } { ...props } />
  )
}