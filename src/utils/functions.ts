export const classNames = (...classes:string[]) => {
    return classes.join(" ")
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());