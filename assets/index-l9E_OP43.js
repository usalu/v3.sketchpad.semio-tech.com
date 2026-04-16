import { u as s, j as e } from "./index-CPjXSBGK.js";
import "./_commonjsHelpers-CE1G-McA.js";
const c = { title: "Manuals", description: "Reference manuals", icon: "\u{1F4D6}", order: 4 };
function o(n) {
  const t = { p: "p", ...s(), ...n.components };
  return e.jsxs(e.Fragment, { children: [`
`, e.jsx(t.p, { children: "Comprehensive manuals for all semio components." })] });
}
function m(n = {}) {
  const { wrapper: t } = { ...s(), ...n.components };
  return t ? e.jsx(t, { ...n, children: e.jsx(o, { ...n }) }) : o(n);
}
export {
  m as default,
  c as frontmatter
};
