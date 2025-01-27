import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";

// TODO: ADD UI/UX IMPROVEMENTS
const LanguageSwitcher = () => {
  const { locale, switchLanguage } = useLanguageSwitcher();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switchLanguage(e.target.value);
  };

  return (
    <select
      id="language"
      value={locale}
      onChange={handleLanguageChange}
      className="rounded border p-2"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LanguageSwitcher;
