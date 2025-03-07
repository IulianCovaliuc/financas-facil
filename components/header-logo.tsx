import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="/fin.svg" alt="Logo" height={180} width={180} /> 
                <p className="font-semibold text-white text-2xl ml-2.5">
                     
                </p>
            </div>
        </Link>
    );
}; 