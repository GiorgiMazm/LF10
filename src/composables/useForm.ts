export default () => {
  async function addForm(form: Object) {
    const { error } = await useFetch("api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }
  }
  async function getForm() {
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
    return data.value;
  }
  return { getForm, addForm };
};
