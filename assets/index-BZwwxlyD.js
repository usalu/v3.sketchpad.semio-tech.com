import { u as s, j as e } from "./index-CPjXSBGK.js";
import { cR as i, cQ as n } from "./index-xjMdFvN_.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./_commonjs-dynamic-modules-TDtrdbi3.js";
const d = { title: "Welcome to Semio", description: "Design Information Modeling for Architecture", concepts: ["introduction", "overview", "getting-started"] };
function r(o) {
  const t = { a: "a", p: "p", ...s(), ...o.components };
  return e.jsxs(e.Fragment, { children: [`
`, `
`, e.jsxs(i, { children: [e.jsxs(n, { title: "\u270F\uFE0F Just want to toy around?", children: ["You can try out sketchpad free and without login ", e.jsx(t.a, { href: "https://play.semio-tech.com", children: "online" }), " \u{1F39B}\uFE0F"] }), e.jsx(n, { title: "\u{1F4D6} More into research?", children: e.jsxs(t.p, { children: ["Here is the ", e.jsx(t.a, { href: "https://eg-ice-25.semio-tech.com", children: "presentation" }), " of our ", e.jsx(t.a, { href: "https://doi.org/10.17868/strath.00093288", children: "latest paper" }), " on LLMs \u{1F916} Or ", e.jsx(t.a, { href: "https://eg-ice-23.semio-tech.com", children: "another one" }), " about formalizing architecture \u{1F3DB}\uFE0F"] }) }), e.jsxs(n, { title: "\u{1F4DA} Are you a web-dev?", children: ["All shared UI elements for sketchpad can be found in our ", e.jsx(t.a, { href: "https://js.semio-tech.com", children: "elements Storybook" }), "."] }), e.jsxs(n, { title: "\u{1F4BB} Ever wanted to combine Wasp, Monoceros, Ladybug and Rhino?", children: ["See how semio enables the ", e.jsx(t.a, { href: "https://docs.semio.tech/integrations", children: "integration" }), " of all of these platforms through a Grasshopper plugin \u{1F997}"] })] })] });
}
function m(o = {}) {
  const { wrapper: t } = { ...s(), ...o.components };
  return t ? e.jsx(t, { ...o, children: e.jsx(r, { ...o }) }) : r(o);
}
export {
  m as default,
  d as frontmatter
};
