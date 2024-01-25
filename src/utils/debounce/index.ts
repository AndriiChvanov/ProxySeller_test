export default function debounce(func: (e: string) => void, ms: number) {
  let timer: NodeJS.Timeout | null
  return function (...args: any) {
    // @ts-ignore
    const context = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      func.apply(context, args)
    }, ms)
  }
}
