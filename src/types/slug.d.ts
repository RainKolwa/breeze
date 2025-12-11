declare module 'slug' {
  export interface SlugOptions {
    lower?: boolean
    replacement?: string
    remove?: RegExp
  }

  export default function slugify(
    input: string,
    options?: SlugOptions
  ): string
}
