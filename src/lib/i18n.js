import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationDE from "../texte/translation_de.json";
import translationIT from "../texte/translation_it.json";
import translationFR from "../texte/translation_fr.json";
import translationEN from "../texte/translation_en.json";

// the translations
const resources = {
  de: {
    translation: translationDE
  },
  it: {
    translation: translationIT
  },
  fr: {
    translation: translationFR
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
