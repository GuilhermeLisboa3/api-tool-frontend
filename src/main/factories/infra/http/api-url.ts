export const makeApiUrl = (path: string): string => `${process.env.NEXT_PUBLIC_API ?? 'http://localhost:3000'}${path}`
