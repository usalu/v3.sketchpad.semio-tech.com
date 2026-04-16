import { u as r, j as n } from "./index-CPjXSBGK.js";
import "./_commonjsHelpers-CE1G-McA.js";
const i = { title: "Theory", description: "Theoretical concepts", icon: "\u{1F4DA}", order: 5 };
function o(t) {
  const e = { p: "p", ...r(), ...t.components };
  return n.jsxs(n.Fragment, { children: [`
`, n.jsx(e.p, { children: "Explore the theoretical foundations of Semio." })] });
}
function a(t = {}) {
  const { wrapper: e } = { ...r(), ...t.components };
  return e ? n.jsx(e, { ...t, children: n.jsx(o, { ...t }) }) : o(t);
}
export {
  a as default,
  i as frontmatter
};
