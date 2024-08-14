export interface Problem {
    title?: string
    id: string; // Unique identifier for the problem
    link: string; // URL link to the problem
    hints?: string; // Optional hints related to the problem
    topics?: string[]; // Optional array of topics related to the problem
    description?: string; // Optional description of how you found the problem
    addedDate: Date; // Date and time when the problem was added
    userId: string; // ID of the user who added or is tracking the problem
}