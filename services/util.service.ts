export function getRandomIndex<T>(array: T[]): number {
    return Math.floor(Math.random() * array.length);
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}