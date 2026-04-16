import { u as t, j as e } from "./index-CPjXSBGK.js";
import "./_commonjsHelpers-CE1G-McA.js";
const r = { title: "Ladybug tools", description: "How to combine semio with the ladybug tools", icon: "\uFFFD", order: 3 };
function s(o) {
  const n = { a: "a", h2: "h2", span: "span", ...t(), ...o.components };
  return e.jsxs(e.Fragment, { children: [`
`, e.jsxs(n.h2, { id: "type-\uFE0F-room", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#type-\uFE0F-room", children: e.jsx(n.span, { className: "icon icon-link" }) }), "Type \u2194\uFE0F Room"] }), `
`, e.jsxs(n.h2, { id: "design-\uFE0F-model", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#design-\uFE0F-model", children: e.jsx(n.span, { className: "icon icon-link" }) }), "Design \u2194\uFE0F Model"] }), `
`, e.jsxs(n.h2, { id: "-honeybee", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-honeybee", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F41D} Honeybee"] })] });
}
function d(o = {}) {
  const { wrapper: n } = { ...t(), ...o.components };
  return n ? e.jsx(n, { ...o, children: e.jsx(s, { ...o }) }) : s(o);
}
export {
  d as default,
  r as frontmatter
};
