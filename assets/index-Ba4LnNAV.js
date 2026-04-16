import { u as c, j as t } from "./index-CPjXSBGK.js";
import "./_commonjsHelpers-CE1G-McA.js";
const i = { title: "Intro", description: "Introduction to semio concepts", order: 1, concepts: ["introduction", "beginner", "concepts"] };
function o(n) {
  const e = { p: "p", ...c(), ...n.components };
  return t.jsxs(t.Fragment, { children: [`
`, t.jsx(e.p, { children: "Learn the fundamental concepts of Semio." })] });
}
function m(n = {}) {
  const { wrapper: e } = { ...c(), ...n.components };
  return e ? t.jsx(e, { ...n, children: t.jsx(o, { ...n }) }) : o(n);
}
export {
  m as default,
  i as frontmatter
};
