import { Location } from './location'

export type Task = {
    npc: string
    exp: number
    task: string
    location: Location
    done?: boolean
    mobsExp?: number
    catchExp?: number
}

export const allTasks: Task[] = [
    {
        npc: 'NPC Royce',
        location: Location.CINNABAR,
        task: '90 Magmar',
        exp: 121.5,
        mobsExp: 90 * 0.742,
        catchExp: 0,
    },
    {
        npc: 'NPC Xavier',
        location: Location.CERULEAN,
        task: '60 Golem, 60 Rhydon, 60 Marowak e 60 Sandslash',
        exp: 256.5,
        mobsExp: 0,
        catchExp: 0,
    },
    {
        npc: 'NPC Zulu',
        location: Location.BUTTERFREE_ISLAND,
        task: '300 Venusaur e 300 Meganium ',
        exp: 800,
        mobsExp: 600 * 0.742,
        catchExp: 600,
    },
    {
        npc: 'NPC Caesar',
        location: Location.BUTTERFREE_ISLAND,
        task: '300 Charizard e 300 Typhlosion ',
        exp: 800,
        mobsExp: 600 * 0.742,
        catchExp: 600,
    },
    {
        npc: 'NPC Li Mu Bai',
        location: Location.BUTTERFREE_ISLAND,
        task: '300 Blastoise e 300 Feraligatr ',
        exp: 800,
        mobsExp: 600 * 0.742,
        catchExp: 600,
    },
    {
        npc: 'NPC Margarida',
        location: Location.LEAF_ISLAND,
        task: 'Capturar e entregar: Xatu ',
        exp: 150,
        mobsExp: 200 * 0.742,
        catchExp: 300,
    },
    {
        npc: 'NPC Melvin',
        location: Location.LEAF_ISLAND,
        task: 'Encontrar: Procurar sua capa de mágico. Coordenadas: 3695, 4206, 8',
        exp: 100,
    },
    {
        npc: 'NPC Tyler',
        location: Location.SHAMOUTI,
        task: '150 Hitmonlee, 150 Hitmonchan e 150 Hitmontop ',
        exp: 354.375,
    },
    {
        npc: 'NPC Eugene',
        location: Location.SHAMOUTI,
        task: '160 Raichu, 100 Pikachu e 50 Pichu ',
        exp: 312,
    },
    {
        npc: 'NPC Minerva',
        location: Location.SHAMOUTI,
        task: '30 Dragonite e 350 Alakazam ',
        exp: 850,
        mobsExp: 350 * 0.742,
        catchExp: 300,
    },
    {
        npc: 'NPC Yuri',
        location: Location.BUTWAL,
        task: '90 Meganium, 60 Bayleef e 60 Chikorita ',
        exp: 162,
    },
    {
        npc: 'NPC Antoni',
        location: Location.MAGMA_ISLAND,
        task: '150 Donphan',
        exp: 202.625,
        mobsExp: 150 * 0.742,
        catchExp: 300,
    },
    {
        npc: 'NPC Joel',
        location: Location.MANDARIN,
        task: '100 Machoke e 200 Machamp ',
        exp: 350,
        catchExp: 300,
    },
    {
        npc: 'NPC Bauer',
        location: Location.MURCOTT,
        task: '300 Forretress ',
        exp: 405,
        mobsExp: 300 * 0.742,
        catchExp: 300,
    },
    {
        npc: 'NPC Nadia',
        location: Location.MURCOTT,
        task: '150 Pinsir e 150 Heracross',
        exp: 405,
        mobsExp: 300 * 0.742,
    },
    {
        npc: 'NPC Philip',
        location: Location.MURCOTT,
        task: '500 Kricketune e 2 Shiny Kricketune. ',
        exp: 775,
        mobsExp: 500 * 0.742,
        catchExp: 300,
    },
    {
        npc: 'NPC Boyega',
        location: Location.TANGELO_ISLAND,
        task: '300 Golem.',
        exp: 405,
        mobsExp: 300 * 0.742,
        catchExp: 300,
    },
    {
        npc: 'NPC Robb',
        location: Location.PETALGROOVE_ISLAND,
        task: '250 Clefable e 250 Granbull. ',
        exp: 675,
        mobsExp: 500 * 0.742,
        catchExp: 600,
    },
    {
        npc: 'NPC Anice',
        location: Location.ORRE,
        task: '200 Swellow e 200 Altaria ',
        exp: 875.2,
        mobsExp: 400 * 0.742,
        catchExp: 300,
    },
    {
        npc: 'NPC Galvao',
        location: Location.ORRE,
        task: '500 Glalie ',
        exp: 1094,
        mobsExp: 500 * 0.742,
        catchExp: 300,
    },
    {
        npc: 'NPC Good Game Niko ',
        location: Location.CREATION_STUDIO,
        task: '22 Lapras, 30 Electabuzz, 41 Arcanine, 6 Charizard e 8 Gengar ',
        exp: 200,
    },
    {
        npc: 'NPC Teedzada',
        location: Location.CREATION_STUDIO,
        task: '500 Pokémon do tipo lutador ',
        exp: 600,
        mobsExp: 500 * 0.742,
    },
    {
        npc: 'NPC Sharxera',
        location: Location.CREATION_STUDIO,
        task: 'Derrotar 100 Machamp, 100 Hitmonlee, 100 Hitmonchan e 100 Hitmontop. ',
        exp: 371.25,
    },
    {
        npc: 'NPC Hidaree',
        location: Location.CREATION_STUDIO,
        task: '1º Parte Responder à pergunta, resposta: Metagross \n2º Parte Duelar contra um Electivire \n3º Parte Responder à pergunta, resposta: Forretress \n4º Parte Duelar contra um Mega Charizard X \n5º Parte Responder à pergunta, resposta: Garchomp ',
        exp: 500,
    },
]
