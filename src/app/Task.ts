//? is an optianal field so we don't get errors
export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
  } 