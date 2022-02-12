export async function get() {
  // Connect to DB & Get Data

  const guides = [
    { id: 1, title: "Some Title 1", body: "Lorem Ipsum" },
    { id: 2, title: "Some Title 2", body: "Lorem Ipsum" },
    { id: 3, title: "Some Title 3", body: "Lorem Ipsum" },
    { id: 4, title: "Some Title 4", body: "Lorem Ipsum" },
    { id: 5, title: "Some Title 5", body: "Lorem Ipsum" },
  ];

  return {
    status: 200,
    body: { guides },
  };
}
