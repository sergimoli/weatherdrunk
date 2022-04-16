import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          title: "Game of thrones",
          volver: "BACK",
          lang: "language",
          lang_english: "english",
          lang_castellano: "castillian",
          lang_catala: "catalan",
          header_pred_1: "Your's weather forecast",
          header_pred_2: "Sergi's weather forecast",
          header_pred_3: "Weather forecast by city",
          big_header: "Weather forecast",
          message_no_data: "Write the city to look for",
          city: "city",
          find: "Find",
          temp_max: "Maximum temperature: ",
          temp_min: "Minimum temperature: ",
          sens_therm: "Thermal sensation: ",
          humidity: "Humidity: ",
          wind_speed: "Wind speed: ",
        },
      },
      es: {
        translation: {
          title: "Juego de tronos",
          volver: "VOLVER",
          lang: "idioma",
          lang_english: "inglés",
          lang_castellano: "castellano",
          lang_catala: "catalán",
          header_pred_1: "Predicción donde estás tu",
          header_pred_2: "Predicción donde podula Sergi",
          header_pred_3: "Predicción por ciudad",
          big_header: "Predicción meteorológica",
          message_no_data: "Escribe la ciudad a buscar",
          city: "ciudad",
          find: "Buscar",
          temp_max: "Temperatura máxima:",
          temp_min: "Temperatura mínima: ",
          sens_therm: "Sensación térmica: ",
          humidity: "Humedad: ",
          wind_speed: "Velocidad del viento: ",
        },
      },
      ca: {
        translation: {
          title: "Juego de tronos",
          volver: "VOLVER",
          lang: "idioma",
          lang_english: "anglès",
          lang_castellano: "castellà",
          lang_catala: "català",
          header_pred_1: "Predicció d'on estàs tu",
          header_pred_2: "Predicció on viu en Sergi",
          header_pred_3: "Predicció per ciutat",
          big_header: "Predicció meteorològica",
          message_no_data: "Escriu el nom de la ciutat a buscar",
          city: "ciutat",
          find: "Buscar",
          temp_max: "Temperatura màxima: ",
          temp_min: "Temperatura mínima: ",
          sens_therm: "Sensació térmica: ",
          humidity: "Humetat: ",
          wind_speed: "Velocitat del vent: ",
        },
      },
    },
  });

export default i18n;
