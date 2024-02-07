import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

// import translationEN from '../public/locales/en/translation.json';

// the translations
const resources = {
    en: {
      translation: {
        "medicalSummary": "Medical Summary",
        "followUp": "Follow Up",
        "medicineSchedule": "Medicine Schedule",
        "reminderNotification": "Reminder / Notification",
        "couponsDetails": "Coupons - Offers/Promo Code",
        "dashboardDetails": "Dashboard - Overall Satisfaction",

      }
    },
    es: {
      translation: {
        "medicalSummary": "Resumen médico",
        "followUp": "Hacer un seguimiento",
        "medicineSchedule": "Horario de medicamentos",
        "reminderNotification": "Recordatorio / Notificación",
        "couponsDetails": "Cupones - Ofertas/Código promocional",
        "dashboardDetails": "Panel de control: satisfacción general",
      }
    }
  };

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;