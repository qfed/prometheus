import createDebug from './createDebug'
const debug = createDebug('qr:log')

export default function log(target: any, name: string, descriptor: any) {
  const oldValue = descriptor.value
  descriptor.value = function(...args: any[]) {
    debug(`Calling ${name} with`, args)
    return oldValue.apply(this, args)
  }

  return descriptor
}
