import { useState, useEffect } from "react";

const useLanguageSwitcher = () => {
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    const storedLocale =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("locale="))
        ?.split("=")[1] || "en";

    setLocale(storedLocale);
  }, []);

  const switchLanguage = (newLocale: string) => {
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;

    setLocale(newLocale);
    window.location.reload();
  };

  return { locale, switchLanguage };
};

export default useLanguageSwitcher;
