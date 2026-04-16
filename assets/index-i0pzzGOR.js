import { u as r, j as n } from "./index-CPjXSBGK.js";
import "./_commonjsHelpers-CE1G-McA.js";
const a = { title: "Tutorials", description: "Step-by-step tutorials", icon: "\u{1F4DD}", order: 2 };
function e(t) {
  const o = { p: "p", ...r(), ...t.components };
  return n.jsxs(n.Fragment, { children: [`
`, n.jsx(o.p, { children: "Follow our tutorials to learn semio hands-on." })] });
}
function c(t = {}) {
  const { wrapper: o } = { ...r(), ...t.components };
  return o ? n.jsx(o, { ...t, children: n.jsx(e, { ...t }) }) : e(t);
}
export {
  c as default,
  a as frontmatter
};
