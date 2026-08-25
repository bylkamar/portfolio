import Link from "next/link";
import { BsEye } from "react-icons/bs";

import { defaultLocale, t, type Locale } from "../../i18n/config";
import { dictionaries, interpolate } from "../../i18n/dictionaries";

export function About({ locale = defaultLocale }: { locale?: Locale }) {
    const d = dictionaries.about;
    const BirthDate = new Date(2004, 8, 13); // 13 septembre 2004 -> send gift to my paypal ;)

    return (
        <div id="about" className="mt-28 md:pl-24 pl-8 flex flex-col justify-start items-start space-y-2">
            <p className="text-2xl font-semibold">{t(d.heading, locale)}</p>
            <p className="text-xl">{t(d.intro, locale)}</p>
            <p className="text-xl">
                {interpolate(t(d.age, locale), { age: getAge(BirthDate) })}
            </p>
            <p className="text-xl">{t(d.work, locale)}</p>
            <Link href="/assets/pdf/resume_ait_chikhoune_amer.pdf" className="flex justify-items-center items-center cursor-pointer hover:scale-105 mt-8 p-2 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group">
                <BsEye className="mr-2 text-zinc-300 dark:text-zinc-400" size={16} />
                {t(d.resume, locale)}
            </Link>

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
