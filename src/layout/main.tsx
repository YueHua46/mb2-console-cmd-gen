import { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren) {
    return (
        <div className="p-4 max-w-screen-lg mx-auto">
            {children}
        </div>
    )
}
