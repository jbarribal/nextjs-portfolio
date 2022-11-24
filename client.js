import sanityClient from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'etwb73ky',
    dataset: 'production',
    apiVersion: '2022-10-09',
    useCdn: true,
    token: process.env.SANITY_TOKEN
})

const builder = imageURLBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}