// src/data/types.ts

export interface Parameter {
    key: string;
    label: string;
    default?: string;
}

export interface Command {
    name: string;
    code: string;
    description: string;
    params?: Parameter[];
}

export interface Category {
    name: string;
    commands: Command[];
}
