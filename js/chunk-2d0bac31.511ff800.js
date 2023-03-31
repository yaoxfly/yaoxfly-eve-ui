(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bac31"],{"391f":function(t,s,_){"use strict";_.r(s);var v=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"markdown-body"},[s("Md")],1)])},a=[],r=function(){var t=this,s=t._self._c;return s("section",[s("html",[s("head"),s("body",[s("h1",[t._v("Menu 菜单")]),s("p",[t._v("菜单组件,与Header和Breadcrumb以及TagViews组件有联动关系。")]),t._m(0),s("h1",[t._v("基础用法")]),[s("div",[s("example")],1)],s("h1",[t._v("演示代码")]),t._m(1),s("h3",[t._v("Attributes")]),t._m(2),s("h3",[t._v("Attributes(自定义)")]),t._m(3),t._m(4),s("h3",[t._v("data")]),t._m(5),t._m(6),s("h3",[t._v("config")]),t._m(7),t._m(8),s("h3",[t._v("Events")]),t._m(9),s("h3",[t._v("Function")]),t._m(10),s("h3",[t._v("Slot")]),t._m(11)],2)])])},e=[function(){var t=this,s=t._self._c;return s("blockquote",[s("p",[t._v("全局样式 "),s("code",{pre:!0},[t._v("li{ display: inline-block;")]),t._v("} 会影响到菜单三级(包括三级)以上的样式及布局,设置当前样式时不要设置为全局，以免导致菜单样式错乱。")])])},function(){var t=this,s=t._self._c;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("eve-menu")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"data"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":top")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"55"')]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("eve-menu")]),t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"language-javascript"}},[t._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  data () {\n    "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": [\n        {\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("path")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v(",\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'submenu'")]),t._v(",\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'菜单1'")]),t._v(",\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(": [\n            {\n              "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'开发指南'")]),t._v(",\n              "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("path")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'main'")]),t._v(",\n              "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'item'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 子菜单")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'el-icon-location'")]),t._v(",\n              "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Main'")]),t._v(",\n            }\n          ],\n        },\n        {\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("path")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'/'")]),t._v(",\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'item'")]),t._v(",\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'开始'")]),t._v("\n        },\n      ]\n    }\n  },\n  "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {}\n}\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t._self._c;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("可选值")]),s("th",[t._v("默认值")])])]),s("tbody",[s("tr",[s("td",[t._v("mode")]),s("td",[t._v("模式")]),s("td",[t._v("string")]),s("td",[t._v("horizontal / vertical")]),s("td",[t._v("vertical")])]),s("tr",[s("td",[t._v("unique-opened")]),s("td",[t._v("是否只保持一个子菜单的展开")]),s("td",[t._v("boolean")]),s("td",[t._v("—")]),s("td",[t._v("false")])]),s("tr",[s("td",[t._v("router")]),s("td",[t._v("是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转；设置为false,路由不跳转。")]),s("td",[t._v("boolean")]),s("td",[t._v("—")]),s("td",[t._v("true")])]),s("tr",[s("td",[t._v("background-color")]),s("td",[t._v("菜单的背景色")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("#ffffff")])]),s("tr",[s("td",[t._v("text-color")]),s("td",[t._v("菜单的文字颜色")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("#303133")])]),s("tr",[s("td",[t._v("active-text-color")]),s("td",[t._v("当前激活菜单的文字颜色")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("#409EFF")])]),s("tr",[s("td",[t._v("collapse")]),s("td",[t._v("是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）")]),s("td",[t._v("boolean")]),s("td",[t._v("—")]),s("td",[t._v("false")])]),s("tr",[s("td",[t._v("shrink-width")]),s("td",[t._v("面包屑、页签的收缩按钮，收缩后左侧的宽度，如果有padding、margin也要算进去")]),s("td",[t._v("number")]),s("td",[t._v("—")]),s("td",[t._v("64")])]),s("tr",[s("td",[t._v("border-right")]),s("td",[t._v("菜单整体右边边框的线")]),s("td",[t._v("boolean")]),s("td",[t._v("—")]),s("td",[t._v("true")])]),s("tr",[s("td",[t._v("item-border-right")]),s("td",[t._v("菜单选项右边边框的线")]),s("td",[t._v("boolean")]),s("td",[t._v("—")]),s("td",[t._v("false")])])])])},function(){var t=this,s=t._self._c;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("可选值")]),s("th",[t._v("默认值")])])]),s("tbody",[s("tr",[s("td",[t._v("data")]),s("td",[t._v("菜单数据,详细参数见下表")]),s("td",[t._v("array")]),s("td",[t._v("—")]),s("td",[t._v("[]")])]),s("tr",[s("td",[t._v("width")]),s("td",[t._v("菜单宽度")]),s("td",[t._v("number")]),s("td",[t._v("—")]),s("td",[t._v("256")])]),s("tr",[s("td",[t._v("top")]),s("td",[t._v("距离顶部(header)的距离")]),s("td",[t._v("number")]),s("td",[t._v("—")]),s("td",[t._v("42")])]),s("tr",[s("td",[t._v("config")]),s("td",[t._v("配置菜单的text、path、children等key值--支持只修改某个key值,其他配置默认,详细参数见下表")]),s("td",[t._v("object")]),s("td",[t._v("—")]),s("td",[t._v("{}")])]),s("tr",[s("td",[t._v("padding-left")]),s("td",[t._v("各级菜单距离左边的距离")]),s("td",[t._v("number,string")]),s("td",[t._v("—")]),s("td",[t._v("10")])])])])},function(){var t=this,s=t._self._c;return s("blockquote",[s("p",[t._v("设置了"),s("code",{pre:!0},[t._v("box-sizing: border-box")]),t._v("后会影响"),s("code",{pre:!0},[t._v("top")]),t._v("属性,如果出现菜单纵向没铺满的"),s("code",{pre:!0},[t._v("bug")]),t._v(",可自由调节当前值到铺满的为止，或者设置"),s("code",{pre:!0},[t._v("top")]),t._v("值为"),s("code",{pre:!0},[t._v("0")]),t._v("并在"),s("code",{pre:!0},[t._v("app.vue")]),t._v("中添加样式 "),s("code",{pre:!0},[t._v("body{overflow: hidden;}")])])])},function(){var t=this,s=t._self._c;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("可选值")]),s("th",[t._v("默认值")])])]),s("tbody",[s("tr",[s("td",[t._v("type")]),s("td",[t._v("类型")]),s("td",[t._v("string")]),s("td",[t._v("submenu(父菜单)，item(子菜单)")]),s("td",[t._v("—")])]),s("tr",[s("td",[t._v("text")]),s("td",[t._v("菜单文本，可根据下表的config自定义修改参数名")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("—")])]),s("tr",[s("td",[t._v("path")]),s("td",[t._v("菜单路径 ，可根据下表的config自定义修改参数名")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("—")])]),s("tr",[s("td",[t._v("children")]),s("td",[t._v("树结构数据的孩子节点，可根据下表的config自定义修改参数名")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("—")])]),s("tr",[s("td",[t._v("title")]),s("td",[t._v("菜单分组的title ，可根据下表的config自定义修改参数名")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("—")])]),s("tr",[s("td",[t._v("icon")]),s("td",[t._v("菜单的图标")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("—")])]),s("tr",[s("td",[t._v("tooltip")]),s("td",[t._v("菜单过长，出现三个点，设置当前属性可提示全部值")]),s("td",[t._v("—")]),s("td",[t._v("—")]),s("td")])])])},function(){var t=this,s=t._self._c;return s("blockquote",[s("p",[s("code",{pre:!0},[t._v("path")]),t._v("是唯一的，不能配置一样的"),s("code",{pre:!0},[t._v("path")]),t._v("，如果父菜单没有跳转的功能，就不需要配置"),s("code",{pre:!0},[t._v("path")])])])},function(){var t=this,s=t._self._c;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("可选值")]),s("th",[t._v("默认值")])])]),s("tbody",[s("tr",[s("td",[t._v("text")]),s("td",[t._v("菜单文本渲染的key值")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("text")])]),s("tr",[s("td",[t._v("path")]),s("td",[t._v("菜单路径渲染的key值")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("path")])]),s("tr",[s("td",[t._v("children")]),s("td",[t._v("树结构数据的孩子节点key值")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("children")])]),s("tr",[s("td",[t._v("title")]),s("td",[t._v("菜单分组的title")]),s("td",[t._v("string")]),s("td",[t._v("—")]),s("td",[t._v("title")])])])])},function(){var t=this,s=t._self._c;return s("blockquote",[s("p",[t._v("当这里的配置修改时，为了联动，Breadcrumb以及TagViews组件的配置，也要进行同步修改。")])])},function(){var t=this,s=t._self._c;return s("table",[s("thead",[s("tr",[s("th",[t._v("事件名称")]),s("th",[t._v("说明")]),s("th",[t._v("回调参数")])])]),s("tbody",[s("tr",[s("td",[t._v("select")]),s("td",[t._v("菜单激活回调")]),s("td",[t._v("function(param)，包含index(当前路径)、indexPath(路径数组)、data(菜单数据),text(菜单文本)、currentData(当前菜单详细信息)")])]),s("tr",[s("td",[t._v("right-content-button")]),s("td",[t._v("右边部分icon和用户信息等按钮的点击事件")]),s("td",[t._v("function(param) 包含导航按钮的index(下标)和数据")])]),s("tr",[s("td",[t._v("dialog-operate")]),s("td",[t._v("右边dialog的按钮的点击事件")]),s("td",[t._v("function(param) ,包含dialog按钮的index(下标)和数据")])])])])},function(){var t=this,s=t._self._c;return s("table",[s("thead",[s("tr",[s("th",[t._v("方法名")]),s("th",[t._v("说明")]),s("th",[t._v("参数")])])]),s("tbody",[s("tr",[s("td",[t._v("update")]),s("td",[t._v("更新组件--配合header联动用, 当header组件调用findlowestMenu方法赋值时，跳转菜单，导致左边菜单展开多个情况时使用")]),s("td",[t._v("—")])])])])},function(){var t=this,s=t._self._c;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),s("th",[t._v("说明")])])]),s("tbody",[s("tr",[s("td",[t._v("——")]),s("td",[t._v("在菜单的上方添加内容")])])])])}],n=function(){var t=this,s=t._self._c;return s("div",[s("eve-menu",{attrs:{data:t.data,top:55}})],1)},d=[],l={data:function(){return{data:[{path:"",type:"submenu",text:"菜单1",children:[{title:"开发指南",path:"main",type:"item",icon:"el-icon-location",text:"Main"}]},{path:"/",type:"item",text:"开始"}]}},methods:{}},p=l,c=_("2877"),i=Object(c["a"])(p,n,d,!1,null,null,null),h=i.exports,o={components:{Example:h}},u=o,m=Object(c["a"])(u,r,e,!1,null,null,null),g=m.exports,f={name:"Menu",components:{Md:g}},j=f,b=Object(c["a"])(j,v,a,!1,null,null,null);s["default"]=b.exports}}]);