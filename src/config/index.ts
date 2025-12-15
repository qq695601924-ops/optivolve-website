/**
 * @name 配置文件
 */

/** 应用名称 */
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'future harvest'

/** 展示下载 */
export const SHOW_DOWNLOAD = true

/** 下载地址 */
export const DOWNLOAD_URL = import.meta.env.VITE_APP_DOWNLOAD_URL || 'https://play.google.com/store/apps/details?id=com.giro.facil.credito&hl=en-gb&gl=ng'

/** 工作时间 */
export const WORK_TIME = ' Lunes a Domingo de 9:00 AM a 6:00 PM'

/** 邮箱 */
export const EMAIL = 'support@urieos.com'

/** 地址 */
export const ADDRESS = '---'

/** 版权所有 */
export const COPYRIGHT = 'Todos los derechos reservados © 2025 GiroFácil'

/** 服务电话 */
export const SERVICE_PHONE = '(81) 2191 2337'

export interface MenuItem {
  name: string
  path: string
  selector?: string
}

/** 跳转列表 */
export const redirectList: MenuItem[] = [
  {
    name: 'Value Proposition',
    path: '/',
  },
  {
    name: 'Core Capabilities',
    path: '/safe',
  },
  {
    name: 'Business Focus',
    path: '/help',
  },
  {
    name: 'Global Presence',
    path: '/about',
  },
]

/** 菜单列表 */
export const menuList: MenuItem[] = [
  {
    name: 'Why Trust Us',
    path: '/',
  },
  {
    name: 'Global Alliances',
    path: '/safe',
  },
  {
    name: 'Purpose&Ambition',
    path: '/help',
  },
  {
    name: 'Contact',
    path: '/about',
  },
]
