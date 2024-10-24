import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface GlobalState {
    language: string;
}
interface GlobalActions {
    setLanguage: (language: string) => void;
}

const defaultGlobalState: GlobalState = {
    language: navigator.language || "en-US",
}

const useGlobalStore = create<GlobalState & GlobalActions>()(persist((set) => ({
    ...defaultGlobalState,
    setLanguage: (language: string) => {
        set({ language })
    },
}),
    {
        name: "global",
    }
))

export default useGlobalStore;