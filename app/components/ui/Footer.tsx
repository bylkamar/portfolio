import { defaultLocale, t, type Locale } from "../../i18n/config";
import { dictionaries, interpolate } from "../../i18n/dictionaries";

function Footer({ locale = defaultLocale }: { locale?: Locale }) {
    return (

        <footer className="w-full mt-24 py-6 border-t border-gray-300 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
                {interpolate(t(dictionaries.footer.rights, locale), {
                    year: new Date().getFullYear(),
                })}
            </p>
        </footer>
    );
}
export default Footer;
