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
  selector?: string
}

/** 菜单列表 */
export const menuList: MenuItem[] = [
  {
    name: 'common.home',
    selector: 'banner-section',
  },
  {
    name: 'common.advantages',
    selector: 'why-section',
  },
  {
    name: 'common.services',
    selector: 'services-section',
  },
  {
    name: 'common.security',
    selector: 'question-section',
  },
  {
    name: 'common.about',
    selector: 'about-section',
  },
]
