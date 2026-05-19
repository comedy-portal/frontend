export type AssetCategory = 'comedians' | 'groups' | 'venues'

export const assetsUrlBuilder = (category: AssetCategory, fileName: string) => {
    const assetsBaseUrl = process.env.NEXT_PUBLIC_ASSETS_BASE_URL as string

    return `${assetsBaseUrl.replace(/\/+$/, '')}/${category}/${fileName.replace(/^\/+/, '')}`
}
