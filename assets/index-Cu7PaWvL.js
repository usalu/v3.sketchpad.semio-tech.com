import { u as s, j as e } from "./index-CPjXSBGK.js";
import "./_commonjsHelpers-CE1G-McA.js";
const c = { title: "Hello Semio", description: "Your first semio tutorial", order: 1 };
function o(t) {
  const n = { p: "p", ...s(), ...t.components };
  return e.jsxs(e.Fragment, { children: [`
`, e.jsx(n.p, { children: "Learn the basics of semio by building your first design step by step." })] });
}
function m(t = {}) {
  const { wrapper: n } = { ...s(), ...t.components };
  return n ? e.jsx(n, { ...t, children: e.jsx(o, { ...t }) }) : o(t);
}
export {
  m as default,
  c as frontmatter
};
