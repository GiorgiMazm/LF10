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
  async function putForm(id: string) {
    const { error } = await useFetch("api/form", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }

    console.log(JSON.stringify(id));
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
    return data.value as { _id: string }[];
  }
  return { getForm, addForm, putForm };
};
