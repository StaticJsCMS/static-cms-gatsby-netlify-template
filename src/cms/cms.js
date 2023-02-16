const PostPreview = ({ entry, widgetFor }) => {
  return window.h(
    "div",
    {},
    window.h("h1", {}, entry.data.title),
    window.h("p", {}, window.h("small", {}, "Written " + entry.data.date)),
    window.h("div", { className: "text" }, widgetFor("body"))
  )
}

window.CMS.registerPreviewTemplate('blog', PostPreview);
