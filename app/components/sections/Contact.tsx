import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiLinkedin } from "react-icons/fi";
function Contact() {
    return (
        <div id="contact" className="mt-24">
            <h1 className="text-4xl mb-8 text-center">Contact Me</h1>
            <div className="grid grid-cols-2 col-span-2 gap-4">
                <Link href={"mailto:amer.aitchikhoune@gmail.com"} target="_blank" className="border-0 border-amber-50 py-2 px-4 flex justify-center items-center">
                    <FcGoogle className="ml-2 text-white text-2xl pr-2" />
                    <span className="font-bold">Gmail</span>
                </Link>
                <Link
                    href={"https://www.linkedin.com/in/amerac/"}
                    className="py-2 px-4 flex justify-center items-center group font-bold"
                    target="_blank" rel="noopener noreferrer"
                >
                    <FiLinkedin className="ml-2 text-white text-2xl pr-2 group-hover:text-blue-400 transition-colors" />
                    <span className="font-bold">Linkedin</span>

                </Link>
            </div>
        </div>
    )
}

export default Contact;