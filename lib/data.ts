import { TrendingGameType, WhatsNewArticleType } from "./types"

export const trendingGames: TrendingGameType[] = [
    {
        name: 'Halo Infinite',
        image: '/trending-games/halo.jpg',
        followersCount: 50
    },
    {
        name: 'Fortnite',
        image: '/trending-games/fortnite.jpg',
        followersCount: 44
    },
    {
        name: 'Dead Cells',
        image: '/trending-games/dead-cells.jpg',
        followersCount: 37
    },
    {
        name: 'Ori',
        image: '/trending-games/ori.jpeg',
        followersCount: 31
    },
    {
        name: 'Valorant',
        image: '/trending-games/valorant.jpg',
        followersCount: 17
    },
    {
        name: 'Skul',
        image: '/trending-games/skull.jpeg',
        followersCount: 8
    },
]

export const whatsNewArticles: WhatsNewArticleType[] = [
    {
        platform: 'pc',
        title: 'Two destiny 2 exotics disables due to exploits again',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus minus rerum doloremque temporibus enim accusamus aliquid repellendus quo sint',
        image: '/whatsNew/destiny-2.jpg',
        publisher_logo: '/whatsNew/publisher_logos/kotaku.webp',
        publisher_name: 'kotaku'
    },
    {
        platform: 'pc',
        title: 'Fortnite chapter 2: Season 2 extended until june',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus minus rerum doloremque temporibus enim accusamus aliquid repellendus quo sint',
        image: '/whatsNew/fortnite.jpg',
        publisher_logo: '/whatsNew/publisher_logos/ign.jpg',
        publisher_name: 'IGN'
    },
    {
        platform: 'playstation',
        title: "Ghost of tsushima won't have waypoints",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus minus rerum doloremque temporibus enim accusamus aliquid repellendus quo sint',
        image: '/whatsNew/Ghost-of-Tsushima.jpg',
        publisher_logo: '/whatsNew/publisher_logos/usg.jpg',
        publisher_name: 'usgamer'
    },
    {
        platform: 'pc',
        title: 'Industries of titans lets you build the gloomy cyberpunk city of your dreams',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus minus rerum doloremque temporibus enim accusamus aliquid repellendus quo sint',
        image: '/whatsNew/industries-of-titan.jpg',
        publisher_logo: '/whatsNew/publisher_logos/kotaku.webp',
        publisher_name: 'kotaku'
    },
    {
        platform: 'pc',
        title: 'Infinity ward cracks down on cheaters in modern warfare and warzone',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus minus rerum doloremque temporibus enim accusamus aliquid repellendus quo sint',
        image: '/whatsNew/call-of-duty.jpg',
        publisher_logo: '/whatsNew/publisher_logos/ign.jpg',
        publisher_name: 'ign'
    },
]