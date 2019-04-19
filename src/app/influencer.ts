export class Influencer{
    username: string
    fullName: string
    picture: string
    biography: string
    followerCount: number
    stats: {
        followerCount: number
        interests: Array<String>
        engagement: {
            avgCommentsRatio: number
            avgLikesRatio: number
        }

    }
}