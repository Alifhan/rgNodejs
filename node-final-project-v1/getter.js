function mapUsers(users) {
  return {
    data: users,
    count: users.length,
  }; // TODO: replace this
}
let user1 = [
  {
    id: 1,
    username: "alvinarkansas",
    password: "PhT1Oky01",
    gender: "male",
  },
  {
    id: 2,
    username: "anisatahira",
    password: "oYt2Thj9w",
    gender: "female",
  },
];
let user2 = [
  {
    id: 1,
    username: "imamassi",
    password: "YhI6ErG71",
    gender: "male",
  },
];
console.log(mapUsers(user1));
function mapArticles(articles) {
  return {
    data: articles,
    count: articles.length,
  }; // TODO: replace this
}
let articles1 = [
  {
    id: 1,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 1,
  },
  {
    id: 2,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 2,
  },
  {
    id: 3,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 3,
  },
  {
    id: 4,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 4,
  },
];
let articles2 = [
  {
    id: 1,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 6,
  },
  {
    id: 2,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 5,
  },
];

export default mapUsers;
export { mapArticles };
