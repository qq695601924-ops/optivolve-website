/**
 * @name 配置文件
 */

/** 应用名称 */
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Optivolve Digital'

/** 邮箱 */
export const EMAIL = ['partnership@optivolvedigital.com', 'it@optivolvedigital.com', 'customerservices@optivolvedigital.com']

/** 地址 */
export const ADDRESS = '---'

/** 版权所有 */
export const COPYRIGHT = '© 2025 Optivolve Digital. All rights reserved.'

export interface MenuItem {
  name: string
  path?: string
  selector?: string
}

/** 菜单列表 */
export const menuList: MenuItem[] = [
  {
    name: 'common.home',
    path: '/',
    selector: 'banner-section',
  },
  {
    name: 'common.advantages',
    path: '/',
    selector: 'why-section',
  },
  {
    name: 'common.services',
    path: '/',
    selector: 'services-section',
  },
  {
    name: 'common.security',
    path: '/',
    selector: 'question-section',
  },
  {
    name: 'common.about',
    path: '/',
    selector: 'about-section',
  },
  {
    name: 'common.faq',
    path: '/faq',
  },
]
