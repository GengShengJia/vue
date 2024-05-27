import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'

// 创建编译器
const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }
