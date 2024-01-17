import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, PencilSquareIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { UserIcon } from '@heroicons/react/24/solid';
import Link from "next/link";



const Navbar = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);





  return (
    <nav>
        <div className="flex-between
        fixed top-0 bg-gradient-to-l from-cyan-100 via-cyan-300 to-cyan-100 dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-[#180c49] dark:border-b border-fuchsia-400 z-30 w-full py-6">
            <div className="flex-between mx-auto w-5/6">
                <div className="flex-between w-full gap-16">
                    <Link href="/">
                    <h1 className="logo">Next Intro</h1>
                    </Link>
                { isAboveMediumScreens ?(<div className="flex-between w-3/5">
                    <Link href='/clientSiderender' className="flex items-center gap-3">
                    <p className="text-xl icon">CSR</p>
                    </Link>
                    <Link href="/serverSideRender" className="flex items-center gap-3">
                    <p className="text-xl icon">SSR</p></Link>
                    <Link href="/staticSiteGeneration" className="flex items-center gap-3">
                    <p className="text-xl icon">SSG</p></Link>
                    
                </div>)
                : (
                <button className="dark:bg-icon p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-[30px] w-[30px] icon"/>
                </button>)}
                </div>
            </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40
                 h-full w-[300px] bg-gradient-to-b from-cyan-50 to-cyan-200 dark:bg-gradient-to-b dark:from-fuchsia-900 dark:to-[#220794] drop-shadow-xl">
            <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-8 w-8 icon"/>
                </button>
            </div>
            <div >
            <div className="ml-[20%] flex justify-between mt-10 flex-col gap-10 w-3/5">
            <Link href='/clientSiderender' className="flex items-center gap-3">
                    <p className="text-xl">CSR</p>
                    </Link>
                    <Link href="/serverSideRender" className="flex items-center gap-3">
                    <p className="text-xl">SSR</p></Link>
                    <Link href="/staticSiteGeneration" className="flex items-center gap-3">
                    <p className="text-xl">SSG</p></Link>
                </div>
            </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar