import { PRODUCTS } from './mocks'

export const getProducts = async () => {
    // Mock a server call
    await mockAsyncWait()
    return PRODUCTS
}

const mockAsyncWait = async (waitTime: number = 1500) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, waitTime);
    })
}

