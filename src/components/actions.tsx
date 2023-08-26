export const updateMessage = (message: string) => {
    return {
        type: 'UPDATE_MESSAGE',
        payload: message,
    }
}