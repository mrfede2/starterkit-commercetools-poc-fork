import { PAGE } from './mocks'

export const getPage = async () => {
    // Mock a server call
    await mockAsyncWait()
    console.log("something");
    
    return PAGE
}

const mockAsyncWait = async (waitTime: number = 1500) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, waitTime);
    })
}

