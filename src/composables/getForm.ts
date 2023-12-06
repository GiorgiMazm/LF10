export async function getForm() {
  const { error, data } = await useFetch("/api/form", {
    method: "GET",
  });
  if (error.value) {
    throw createError({
      statusCode: 404,
      statusMessage: error.value.statusMessage,
      message: error.value.message,
    });
  }
  return data.value as { _id: string }[];
}
