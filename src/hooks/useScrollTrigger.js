import { useEffect, useState } from "react"

function getOffset(el, offsetValue) {
  var y = 0

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    y += el.offsetTop - el.scrollTop + offsetValue
    el = el.offsetParent
  }

  return { top: y }
}

function hasScrolledTo(el, offsetValue) {
  if (!el) return false

  const { top } = getOffset(el, offsetValue)
  const offset = window.innerHeight

  return top - offset <= window.pageYOffset
}

export default function useScrollTrigger(ref, onTrigger, options = {}) {
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    function onScroll() {
      const offsetValue = options.offset ? options.offset : 0
      const viewed = hasScrolledTo(ref.current, offsetValue)

      if (viewed && !triggered) {
        window.removeEventListener("scroll", onScroll)
        setTriggered(true)
        onTrigger(true)
      }
    }

    setTimeout(() => {
      window.addEventListener("scroll", onScroll)
    }, 1000)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [ref, options, onTrigger, triggered])
}
