export interface Llama3Request {
    prompt: string;
    max_tokens?: number;
}

export interface Llama3Choice {
    text: string;
    index: number;
    logprobs?: unknown;
    finish_reason: string;
}

export interface Llama3Response {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Llama3Choice[];
}