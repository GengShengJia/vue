import {
  isPreTag,
  mustUseProp,
  isReservedTag,
  getTagNamespace
} from '../util/index'

import modules from './modules/index'
import directives from './directives/index'
import { genStaticKeys } from 'shared/util'
import { isUnaryTag, canBeLeftOpenTag } from './util'
import { CompilerOptions } from 'types/compiler'

export const baseOptions: CompilerOptions = {
  expectHTML: true, // 期望 html
  modules, // class、style、input动态type问题
  directives, // v-model v-html、v-text
  isPreTag, // 标签判断函数
  isUnaryTag, // 标签判断函数
  mustUseProp, // 判断必须传参的标签
  canBeLeftOpenTag, // 可以故意打开的元素 没懂怎么回事🤔
  isReservedTag, // 判断是否是保留的标签
  getTagNamespace, // 判断svg、math标签
  staticKeys: genStaticKeys(modules)
}
