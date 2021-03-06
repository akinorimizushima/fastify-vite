const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export const Query = {
  // @ts-expect-error
  books: (root, args, context) => books,
  // @ts-expect-error
  authors: (root, args, context) => [],
};
