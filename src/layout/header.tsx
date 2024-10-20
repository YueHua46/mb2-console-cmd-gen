// import { ModeToggle } from "@/components/mode-trigger";
import { getImageUrl } from "@/lib/utils";

export default function Header() {
    return (
        <header className="bg-background shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <div className="flex justify-self-start">
                        <img src={getImageUrl('logo.png')} alt="Logo" className="h-8 w-auto" />
                    </div>
                    <div className="flex justify-self-end">
                        <h1 className="text-3xl line-height-20 text-3d font-bold">Mounte&Blade II Console Generate</h1>
                    </div>
                </div>
                {/* <div>
                    <ModeToggle />
                </div> */}
            </div>
        </header>

    )
}
