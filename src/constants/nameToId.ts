export function generateIdWithTimestamp(phrase: string, date: string): string{
    // Remove special character
    const cleanedPhrase = phrase.replace(/[^a-zA-Z0-9]/g, '');

    // use the ASCII code each caractere to generate a large number
    let id = 0;
    for (const char of cleanedPhrase) {
        id += char.charCodeAt(0);
    }

    // add now timesTamp
    const timestamp = date; // Timestamp 
    const fullId = `${id}${timestamp}`; //conect id with timesTamp

    return fullId;
}

