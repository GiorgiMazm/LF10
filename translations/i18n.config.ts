import de from "~~/translations/de";
import en from "~~/translations/en";
import ru from "~~/translations/ru";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    ...de,
    ...en,
    ...ru,
  },
}));
