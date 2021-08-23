export const getPosts = () => {
  return [
    {
      title: "JavaScript Nedir?",
      slug: "template1",
      details: require("./posts/template1.md").default,
      date: "18 Ağustos 2021"
    },
    {
      title: "JavaScript Ne İşe Yarar?",
      slug: "template2",
      details: require("./posts/template2.md").default,
      date: "18 Ağustos 2021"
    },
    {
      title: "JavaScript Ne İçin Kullanılır?",
      slug: "template3",
      details: require("./posts/template3.md").default,
      date: "18 Ağustos 2021"
    }
  ];
};
