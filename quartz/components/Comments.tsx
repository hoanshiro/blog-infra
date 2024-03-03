import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Footer() {
    return (
      <script
        src="https://giscus.app/client.js"
        data-repo="hoanshiro/hoanshiro.github.io"
        data-repo-id="R_kgDOKi-nzQ"
        data-category="Comments"
        data-category-id="DIC_kwDOKVtAzc4CZhVu"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossOrigin="anonymous"
        async
      ></script>
    )
  }

  return Footer
}) satisfies QuartzComponentConstructor
