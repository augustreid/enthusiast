export const baking: {
  image?: string, 
  id: number,
  projects:
    {
    id: number,
    hobbyId: number,
    title: string,
    description: string,
    supplies ?: string[],
    resources ?: string[],
    notes ?: string
}[]
} =  {
  image: "www.cookiepicture.com",
  id: 1,
  projects: [
    {
      id: 1,
      hobbyId: 1,
      title: "Dinner Rolls",
      description: "All done malcome buns. From King Arthur",
      supplies: ["8 or 9 inch cake pan", "powdered milk", "whole milk"],
      resources: ["red King Arthur baking book"],
      notes: "real heckin good, takes about 2 hours total"
    },
    {
      id: 2,
      hobbyId: 1,
      title: "Chocolate Cherry Cookies",
      description: "Adapted from King Arthur, with added dried cherries",
      supplies: ["basic baking essentials", "chocolate chips", "dried tart cherries"],
      resources: ["King Arthur book", "note card in recipe box"],
      notes: "this impresses everyone and feels like a real original"
    }
  ]
}


export const boardGames: {
  image?: string,
  id: number,
  projects:
  {
    id: number,
    hobbyId: number,
    title: string,
    description: string,
    supplies?: string[],
    resources?: string[],
    notes?: string
  }[]
} = {
  image: "www.hardgermangame.com",
  id: 2,
  projects: [
    {
      id: 3,
      hobbyId: 2,
      title: "Dice Throne",
      description: "Magic plus Yahtzee, for two players, with different purchasable caharacters",
      supplies: ["Two of the character decks to play against each other"],
      resources: ["Found on board game geek", "review from ProZD"],
      notes: "Played once with Auggie. Seems complicated at first, but pretty simple mechanics once going."
    },
    {
      id: 4,
      hobbyId: 2,
      title: "Strip Yahtzee",
      description: "It's like the regular one, but with naked",
      supplies: ["Basic Yahtzee game", "A cute and willing participant", "Possibly two beers or an edible"],
      resources: ["Didn't find this one anywhere"],
      notes: "After first throw, you must declare which score you are attempting, if not achieved, remove item of clothing."
    }
  ]
}

