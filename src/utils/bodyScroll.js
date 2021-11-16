import { useEffect } from "react"

export const useDisableBodyScroll = open => {
  useEffect(() => {
    var gatsby = document.querySelector("html")
    if (open) {
      gatsby.style.overflow = "hidden"
    } else {
      gatsby.style.overflow = "unset"
    }
  }, [open])
}