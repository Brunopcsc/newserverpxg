export type Quest = {
    name: string
    level: number
    link: string
    expReward: number
    otherRewards: string | null
    done?: boolean
}
export const lvl300quests: Quest[] = [
    {
        name: 'Pokémon Kids Squad (PKS) Quest',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/Pok%C3%A9mon_Kids_Squad_(PKS)_Quest',
        expReward: 5.265 + 300 + 300 * 0.912,
        otherRewards:
            '135.000 dollars, 100 Rough Gemstone, Honorary Membership Medal, Kids Squad (Outfit)',
    },
    {
        name: 'Old Chateau',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/Old_Chateau',
        expReward: 3000,
        otherRewards:
            'X-Upgrade (Tier: 5), Y-Ghost (Tier: 3), 3 Boost Stones, Butler Outfit (male) e Cheryl Outfit (female).',
    },
    {
        name: 'Krabby Club Quest',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/Krabby_Club_Quest',
        expReward: 10000 + 300 + 5000,
        otherRewards:
            '15 Healing Elixir, 10 Empty Premier Ball, Traje Soda Cup e acesso a área VIP do Krabby Club.',
    },
    {
        name: 'Pokémon League',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/Pok%C3%A9mon_League',
        expReward: 8000,
        otherRewards: '900K Cash, Mew Bag, League Trophy, Master Ball ',
    },
    {
        name: 'Dirty McNasty Quest',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/Dirty_McNasty_Quest',
        expReward: 1300 + 350 * 0.912 + 1000,
        otherRewards:
            '3 Ultra Special Lures, 10 White Big Shrimps, 15 Special Fish Tails e 15 Fishermans Elixirs.',
    },
    {
        name: 'Hard Situation - Bikers Quest',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/Hard_Situation_-_Bikers_Quest',
        expReward: 1700,
        otherRewards: 'acesso aos esconderijos dos Bikers em Phenac',
    },
    {
        name: 'Welcome To The Outland Quest',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/Welcome_To_The_Outland_Quest',
        expReward: 300,
        otherRewards: '250 Revives',
    },
    {
        name: 'Outland Rescue Quest',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/Outland_Rescue_Quest',
        expReward: 2000,
        otherRewards: 'Stones e cash correspondentes ao clã do jogador.',
    },
    {
        name: 'Kenny Quest',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/Kenny_Quest',
        expReward: 1200,
        otherRewards: '15 Mini Wings ',
    },
    {
        name: 'Burning Dream Quest',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/Burning_Dream_Quest',
        expReward: 1238.4,
        otherRewards: '50K em cash, 3 Sitrus berries e 2 Lum berries.',
    },
    {
        name: 'An Abandoned Plush Doll Quest',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/An_Abandoned_Plush_Doll_Quest',
        expReward: 1123.2,
        otherRewards:
            '30K em cash e o livro: Pokémon Tales Vol. 1: An Abandoned Plush Doll. ',
    },
    {
        name: 'An Abandoned Plush Doll Quest',
        level: 150,
        link: 'https://wiki.pokexgames.com/index.php/An_Abandoned_Plush_Doll_Quest',
        expReward: 1123.2 + 150 * 0.912 + 300,
        otherRewards:
            '30K em cash e o livro: Pokémon Tales Vol. 1: An Abandoned Plush Doll. ',
    },
    {
        name: 'Forest Quest',
        level: 170,
        link: 'https://wiki.pokexgames.com/index.php/Forest_Quest',
        expReward: 1776,
        otherRewards:
            '5 Healing Elixirs, 5 Fortune Elixirs, 5 Knowledge Elixirs, 10 Bounty Elixirs, 20 Running Elixirs, 10 Attack Elixirs, 10 Defense Elixirs, 2 Boost Stones e Replica of an Ancient Jewel.',
    },
    {
        name: 'Lieutenant West Quest',
        level: 170,
        link: 'https://wiki.pokexgames.com/index.php/Lieutenant_West_Quest',
        expReward: 4900 + 1200 * 0.912,
        otherRewards:
            'Sailor Outfit, Aprimoramento das habilidades de natação. ',
    },
    {
        name: 'The Device Improvement Quest',
        level: 200,
        link: 'https://wiki.pokexgames.com/index.php/The_Device_Improvement_Quest',
        expReward: 2000,
        otherRewards: 'Improved Attachment Device.',
    },
    {
        name: 'Nena Quest',
        level: 200,
        link: 'https://wiki.pokexgames.com/index.php/Nena_Quest',
        expReward: 2000,
        otherRewards:
            'Carvanha, Waterfall Egg e Held Item (Tier: 4) ticket. 	Youtube1.png',
    },
    {
        name: 'Sphinx Quest',
        level: 200,
        link: 'https://wiki.pokexgames.com/index.php/Sphinx_Quest',
        expReward: 4000,
        otherRewards: '3 Catcher Totem, 5 Boost Stone, 1 X-Upgrade (Tier: 5)',
    },
    {
        name: 'The Good Samaritans Quest',
        level: 200,
        link: 'https://wiki.pokexgames.com/index.php/The_Good_Samaritans_Quest',
        expReward: 3000,
        otherRewards: ' X-Upgrade (Tier: 4).',
    },
    {
        name: 'The Good Samaritans Quest',
        level: 200,
        link: 'https://wiki.pokexgames.com/index.php/The_Good_Samaritans_Quest',
        expReward: 3000,
        otherRewards: ' X-Upgrade (Tier: 4).',
    },
    {
        name: 'Dittos Mystery Quest',
        level: 250,
        link: 'https://wiki.pokexgames.com/index.php/Ditto%27s_Mystery_Quest',
        expReward: 5000,
        otherRewards:
            'Ditto Backpack, Shiny Ditto Backpack, Ditto Makeup, 3 Special ticket, 10 Premier Ball, Duplica Outfit (Male e Female), acesso a loja especial de Duplica, acesso a Ditto Cave, liberação do boss semanal "A maldição de Lavender".',
    },
]

export const lvl150quests: Quest[] = [
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
