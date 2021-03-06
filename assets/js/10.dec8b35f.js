(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{177:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("VuePress 由两部分组成：第一部分是一个极简静态网站生成器，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。")]),t._v(" "),s("p",[t._v("每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("事实上，一个 VuePress 网站是一个由 Vue、Vue Router 和 webpack 驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。")]),t._v(" "),s("p",[t._v("在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 Nuxt 的 nuxt generate 命令，以及其他的一些项目，比如 Gatsby")]),t._v(" "),t._m(2),s("p",[t._v("Nuxt\nVuePress 能做的事情，Nuxt 理论上确实能够胜任，但 Nuxt 是为构建应用程序而生的，而 VuePress 则专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性。")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("这两个项目同样都是基于 Vue，然而它们都是完全的运行时驱动，因此对 SEO 不够友好。如果你并不关注 SEO，同时也不想安装大量依赖，它们仍然是非常好的选择！")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Hexo 一直驱动着 Vue 的文档 —— 事实上，在把我们的主站从 Hexo 迁移到 VuePress 之前，我们可能还有很长的路要走。Hexo 最大的问题在于他的主题系统太过于静态以及过度地依赖纯字符串，而我们十分希望能够好好地利用 Vue 来处理我们的布局和交互，同时，Hexo 的 Markdown 渲染的配置也不是最灵活的。")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("我们的子项目文档一直都在使用 GitBook。GitBook 最大的问题在于当文件很多时，每次编辑后的重新加载时间长得令人无法忍受。它的默认主题导航结构也比较有限制性，并且，主题系统也不是 Vue 驱动的。GitBook 背后的团队如今也更专注于将其打造为一个商业产品而不是开源工具。")]),t._v(" "),t._m(6),s("p",[t._v("馨客栈导航")]),t._v(" "),s("p",[t._v("馨客栈导航")]),t._v(" "),s("Valine")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"技术页哦"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术页哦","aria-hidden":"true"}},[this._v("#")]),this._v(" 技术页哦")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"它是如何工作的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的？","aria-hidden":"true"}},[this._v("#")]),this._v(" 它是如何工作的？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<div class="fx-update">\n        <div class="fx-update-box">\n            <div class="fx-update-tou">客栈消息：</div>\n            <div class="fx-update-con">\n                <div class="xiaoxi">\n                    <p>2019-02-14，全新的馨客栈前端导航站正式上线</p>\n                    <p>2019-02-14，馨客栈电报群分享：馨客栈电报群 有能力的可以加入进去，不定期分享新鲜好玩有趣的内容</p>\n                </div>\n                </div>\n        </div>\n    </div>\n\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"docsify-docute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docsify-docute","aria-hidden":"true"}},[this._v("#")]),this._v(" Docsify / Docute")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"hexo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hexo","aria-hidden":"true"}},[this._v("#")]),this._v(" Hexo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"gitbook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitbook","aria-hidden":"true"}},[this._v("#")]),this._v(" GitBook")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("yarn add -D @vuepress/plugin-back-to-top\n# OR npm install -D @vuepress/plugin-back-to-top\n\nyarn add -D @vuepress/plugin-back-to-top\n# OR npm install -D @vuepress/plugin-back-to-top\n\nyarn add -D @vuepress/plugin-back-to-top\n# OR npm install -D @vuepress/plugin-back-to-top\n\nyarn add -D @vuepress/plugin-back-to-top\n# OR npm install -D @vuepress/plugin-back-to-top\n\nyarn add -D @vuepress/plugin-back-to-top\n# OR npm install -D @vuepress/plugin-back-to-top\n\nyarn add -D @vuepress/plugin-back-to-top\n# OR npm install -D @vuepress/plugin-back-to-top\n\nyarn add -D @vuepress/plugin-back-to-top\n# OR npm install -D @vuepress/plugin-back-to-top\n\nyarn add -D @vuepress/plugin-back-to-top\n# OR npm install -D @vuepress/plugin-back-to-top\n\nyarn add -D @vuepress/plugin-back-to-top\n# OR npm install -D @vuepress/plugin-back-to-top\n\nyarn add -D @vuepress/plugin-back-to-top\n# OR npm install -D @vuepress/plugin-back-to-top\n")])])])}],!1,null,null,null);a.options.__file="README.md";e.default=a.exports}}]);