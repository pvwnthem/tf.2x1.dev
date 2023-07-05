'use server'
import CryptoJS from 'crypto-js'

// Encryption key (replace with your own secret key)

export const encrypt = async (data: any) => {
    const encryptedData = CryptoJS.AES.encrypt(
        data,
        process.env.NEXTAUTH_SECRET as string
    ).toString()
    return encryptedData
}

export const decrypt = async (encryptedData: any) => {
    const bytes = CryptoJS.AES.decrypt(
        encryptedData,
        process.env.NEXTAUTH_SECRET as string
    )
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    return decryptedData
}
