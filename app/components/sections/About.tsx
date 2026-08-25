import { BsDownload, BsEye } from "react-icons/bs";

import { RESUME_FILENAME, RESUME_PATH } from "../../data/resume";
import { defaultLocale, t, type Locale } from "../../i18n/config";
import { dictionaries, interpolate } from "../../i18n/dictionaries";

/* Le CV est un fichier statique, pas une route : `<a>` plutôt que `next/link`,
   qui n'a rien à précharger ici. */
const buttonClass =
    "flex items-center cursor-pointer hover:scale-105 p-2 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition";

export function About({ locale = defaultLocale }: { locale?: Locale }) {
    const d = dictionaries.about;
    const BirthDate = new Date(2004, 8, 13); // 13 septembre 2004 -> send gift to my paypal ;)

    return (
        <div id="about" className="scroll-mt-28 mt-28 md:pl-24 pl-8 flex flex-col justify-start items-start space-y-2">
            <h1 className="text-2xl font-semibold">{t(d.heading, locale)}</h1>
            <p className="text-xl">{t(d.intro, locale)}</p>
            <p className="text-xl">
                {interpolate(t(d.age, locale), { age: getAge(BirthDate) })}
            </p>
            <p className="text-xl">{t(d.work, locale)}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
                {/* Ouvrir dans un nouvel onglet : sinon le visiteur quitte le
                    portfolio pour le viewer PDF et ne revient pas, surtout sur mobile. */}
                <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(d.resumeViewAria, locale)}
                    className={buttonClass}
                >
                    <BsEye aria-hidden className="mr-2 text-zinc-300 dark:text-zinc-400" size={16} />
                    {t(d.resume, locale)}
                </a>
                <a
                    href={RESUME_PATH}
                    download={RESUME_FILENAME}
                    aria-label={t(d.resumeDownloadAria, locale)}
                    className={buttonClass}
                >
                    <BsDownload aria-hidden className="mr-2 text-zinc-300 dark:text-zinc-400" size={16} />
                    {t(d.resumeDownload, locale)}
                </a>
            </div>

        </div>
    );
}

export default About;

function getAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
