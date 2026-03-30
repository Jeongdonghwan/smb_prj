import { useEffect } from 'react'

const BASE_URL = 'https://kidc114.kr'
const DEFAULT_IMAGE = `${BASE_URL}/images/hero.png`
const SITE_NAME = 'KIDC 마케팅'

function setMeta(selector, attribute, value) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const match = selector.match(/\[(\w+)="([^"]+)"\]/)
    if (match) el.setAttribute(match[1], match[2])
    document.head.appendChild(el)
  }
  el.setAttribute(attribute, value)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSEO({ title, description, path = '/', image }) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${path}`
    const ogImage = image || DEFAULT_IMAGE

    document.title = title

    setMeta('meta[name="description"]', 'content', description)

    setLink('canonical', canonicalUrl)

    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', canonicalUrl)
    setMeta('meta[property="og:image"]', 'content', ogImage)
    setMeta('meta[property="og:type"]', 'content', 'website')
    setMeta('meta[property="og:site_name"]', 'content', SITE_NAME)
    setMeta('meta[property="og:locale"]', 'content', 'ko_KR')

    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', ogImage)
    setMeta('meta[name="twitter:url"]', 'content', canonicalUrl)
  }, [title, description, path, image])
}
