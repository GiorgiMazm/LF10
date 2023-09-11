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
  async function getForm(form: Object) {
    const { error, data } = await useFetch("api/readDb", {
      method: "GET",
    });
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }
    return data;
  }
  return { getForm, addForm };
};
