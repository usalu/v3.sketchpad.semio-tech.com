import { u as o, j as t } from "./index-CPjXSBGK.js";
import "./_commonjsHelpers-CE1G-McA.js";
const i = { title: "sketchpad", description: "Learn how to most effectively use semio sketchpad \u{1F680}", order: 1 };
function s(e) {
  const n = { a: "a", h1: "h1", span: "span", ...o(), ...e.components };
  return t.jsxs(t.Fragment, { children: [`
`, t.jsxs(n.h1, { id: "test-on-temporary-kits", children: [t.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#test-on-temporary-kits", children: t.jsx(n.span, { className: "icon icon-link" }) }), "Test on temporary kits"] })] });
}
function c(e = {}) {
  const { wrapper: n } = { ...o(), ...e.components };
  return n ? t.jsx(n, { ...e, children: t.jsx(s, { ...e }) }) : s(e);
}
export {
  c as default,
  i as frontmatter
};
