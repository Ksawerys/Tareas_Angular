export interface Tarea {
    id: number;
    description: string;
    difficulty: string;
    assignment: any; 
    time_estimated: number;
    time_dedicated: number;
    progress: number;
    done: boolean;
    createdAt: string;
    updatedAt: string;
   }