export interface Character{
    name: string,
    imgUrl: string
}

export interface AvatarListProps{
    list: Character[],
    max: number
}