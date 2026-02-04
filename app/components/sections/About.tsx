import Link from "next/link";
import { BsEye } from "react-icons/bs";

export function About() {
    const BirthDate = new Date(2004, 8, 13); // 13 septembre 2004 -> send gift to my paypal ;)
    return (
        <div id="about" className="mt-28 md:pl-24 pl-8 flex flex-col justify-start items-start space-y-2">
            <p className="text-2xl font-semibold">Student in Web Development at IUT of Metz</p>
            <p className="text-xl">Hello everyone, my name is AIT CHIKHOUNE Amer, I study computer science in France, I&apos;m currently open to any internship opportunities.</p>
            <p className="text-xl">I am {getAge(BirthDate)} years old and passionate about technology and cybersecurity.</p>
            <p className="text-xl">I enjoy working on projects I can fully invest myself in (which I really like), creating automation scripts.</p>
            <Link href="./assets/pdf/resume_ait_chikhoune_amer.pdf" className="flex justify-items-center items-center cursor-pointer hover:scale-105 mt-8 p-2 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group">
                <BsEye className="mr-2 text-zinc-300 dark:text-zinc-400" size={16} />View my resumé
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