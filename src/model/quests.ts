export type Quest = {
    name: string
    level: number
    link: string
    expReward: number
    otherRewards: string | null
    done?: boolean
}

export const allQuests: Quest[] = [
    {
        name: 'Police Quest',
        level: 40,
        link: 'https://wiki.pokexgames.com/index.php/Police_Quest',
        expReward: 4,
        otherRewards: 'Police Outfit, 5k Cash, Average Pokémon Egg (Box2)',
    },
    {
        name: 'Police Pinkan Quest',
        level: 40,
        link: 'https://wiki.pokexgames.com/index.php/Police_Pinkan_Quest',
        expReward: 600,
        otherRewards: '30k Cash, Pinkan Fruit',
    },
    {
        name: 'Tarroco Police Quest',
        level: 40,
        link: 'https://wiki.pokexgames.com/index.php/Tarroco_Police_Quest',
        expReward: 600,
        otherRewards: '50k Cash',
    },
    {
        name: 'Yves Quest',
        level: 40,
        link: 'https://wiki.pokexgames.com/index.php/Yves_Quest',
        expReward: 5,
        otherRewards:
            'Average Pokémon Egg, 25 Great Potions, 10 Revives, 5 Ultra Balls, 25 Empty Super Balls, 50 Empty Great Balls, 10 Ultra Potions, Rough Gemstone. ',
    },
    {
        name: 'Milla Quest',
        level: 50,
        link: 'https://wiki.pokexgames.com/index.php/Milla_Quest',
        expReward: 200,
        otherRewards: '3 Lovely Presents ',
    },
    {
        name: 'Grapefruit Quest',
        level: 80,
        link: 'https://wiki.pokexgames.com/index.php/Grapefruit_Quest',
        expReward: 600,
        otherRewards: null,
    },
    {
        name: 'Police Final Quest',
        level: 80,
        link: 'https://wiki.pokexgames.com/index.php/Police_Final_Quest',
        expReward: 3000,
        otherRewards:
            '100k Cash, 1 Metal Stone, 1 Ancient Stone, 1 Crystal Stone, Colonel Outfit ',
    },
    {
        name: 'Beleno Quest',
        level: 80,
        link: 'https://wiki.pokexgames.com/index.php/Beleno_Quest',
        expReward: 550,
        otherRewards:
            'Woobufet Burguer, 50 Magu Ball, Volcanic Urn, 3 Fire Stone, Moltres Statue, 120+ Fly Speed ',
    },
    {
        name: 'Stacy Quest',
        level: 80,
        link: 'https://wiki.pokexgames.com/index.php/Stacy_Quest',
        expReward: 2000,
        otherRewards: '...',
    },
    {
        name: 'Goh e Koharu Quest',
        level: 80,
        link: 'https://wiki.pokexgames.com/index.php/Goh_e_Koharu_Quest',
        expReward: 1600,
        otherRewards: null,
    },
    {
        name: 'Kabuto Quest',
        level: 100,
        link: 'https://wiki.pokexgames.com/index.php/Kabuto_Quest',
        expReward: 800,
        otherRewards: '8K cash, 8 Dome fossil',
    },
    {
        name: 'À procura de Bunnelby',
        level: 100,
        link: 'https://wiki.pokexgames.com/index.php/%C3%80_procura_de_Bunnelby',
        expReward: 1500,
        otherRewards: null,
    },
    {
        name: 'Moro Quest',
        level: 100,
        link: 'https://wiki.pokexgames.com/index.php/Moro_Quest',
        expReward: 800,
        otherRewards: 'Boost Stone ',
    },
    {
        name: 'Agatha Quest',
        level: 120,
        link: 'https://wiki.pokexgames.com/index.php/Agatha_Quest',
        expReward: 750,
        otherRewards: '3 Boost Stone, Habilidade de fazer o Dark Abra ',
    },
    {
        name: 'Dr Proctor',
        level: 120,
        link: 'https://wiki.pokexgames.com/index.php/Dr_Proctor',
        expReward: 2500,
        otherRewards:
            '2 Water Stone, 2 Fire Stone, Boost Stone, Lum Berry, Outfit Biker',
    },
    {
        name: 'Cyber World',
        level: 120,
        link: 'https://wiki.pokexgames.com/index.php/Cyber_World',
        expReward: 1500,
        otherRewards:
            '2 Ancient Stones, 2 Crystal Stones, Porygon 1 e 2 Toy , Cyber Cube',
    },
]
