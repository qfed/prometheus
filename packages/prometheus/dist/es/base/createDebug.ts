// import createDebug from 'debug'
const loop = (...args: any[]) => {
  console.log(...args)
}
/**
 * 添加个封装在RN中 debug 会报错
 */
export default (prefix: string) => {
  try {
    const debug = loop
    return debug
  } catch (error) {
    return loop
  }
}
