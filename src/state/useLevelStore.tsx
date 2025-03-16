import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware"; 
import { mmkvStorage, storage } from "./storage";
import { initialLevelData } from "../utils/data";

interface Level{
    id: number;
    unlocked: boolean;
    completed: boolean,
    highScore: number,
}

interface LevelStore{
    levels: Level[];
    unlockLevel: (id: number) => void
    completeLevel: (id: number, collectedCandies: number) => void
}

export const useLevelStore = create<LevelStore>()(
    persist(
        (set, get) => ({
            level: initialLevelData,
            unlockLevel: (id:number) =>{
                
            }
        })
        {
            name: 'level-storage',
            storage: createJSONStorage(()=> mmkvStorage),
        }
    )
)