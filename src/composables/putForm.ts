export async function putForm(id: string, status: boolean) {
  const { error } = await useFetch("api/form", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, isApproved: status }),
  });
  if (error.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Something went wrong with fetching data, try again later",
    });
  }
}
