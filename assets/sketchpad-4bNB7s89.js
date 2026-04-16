import { u as a, j as n } from "./index-CPjXSBGK.js";
import "./_commonjsHelpers-CE1G-McA.js";
const c = { title: "sketchpad", description: "The semio sketchpad manual", icon: "\u270F\uFE0F", order: 3 };
function i(s) {
  const e = { a: "a", h1: "h1", h2: "h2", span: "span", ...a(), ...s.components };
  return n.jsxs(n.Fragment, { children: [`
`, n.jsxs(e.h1, { id: "apps", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#apps", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Apps"] }), `
`, n.jsxs(e.h2, { id: "home", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#home", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Home"] }), `
`, n.jsxs(e.h2, { id: "kit", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#kit", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Kit"] }), `
`, n.jsxs(e.h2, { id: "design", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#design", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Design"] }), `
`, n.jsxs(e.h2, { id: "type", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#type", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Type"] }), `
`, n.jsxs(e.h2, { id: "quality", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#quality", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Quality"] }), `
`, n.jsxs(e.h2, { id: "docs", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#docs", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Docs"] })] });
}
function r(s = {}) {
  const { wrapper: e } = { ...a(), ...s.components };
  return e ? n.jsx(e, { ...s, children: n.jsx(i, { ...s }) }) : i(s);
}
export {
  r as default,
  c as frontmatter
};
