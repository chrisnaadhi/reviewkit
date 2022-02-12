export async function get({ params }) {
  const guides = [
    { id: 1, title: "Some Title 1", body: "Lorem Ipsum", userId: "Chrisna" },
    { id: 2, title: "Some Title 2", body: "Lorem Ipsum", userId: "Adhi" },
    { id: 3, title: "Some Title 3", body: "Lorem Ipsum", userId: "Neth" },
    { id: 4, title: "Some Title 4", body: "Lorem Ipsum", userId: "Pranoto" },
    { id: 5, title: "Some Title 5", body: "Lorem Ipsum", userId: "Verglas" },
  ];

  const guide = guides.find((g) => g.id == params.id);

  if (guide) {
    return {
      status: 200,
      body: { guide },
    };
  }

  return {
    status: 404,
  };
}
