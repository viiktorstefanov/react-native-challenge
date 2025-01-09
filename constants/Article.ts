export type Article = {
    id: string,
    title: string,
    image_url: string,
    body: string,
    published_at: string,
    category: {
        label: string,
        title: string,
    },
};