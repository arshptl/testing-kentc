const superHeros = [
    { name: 'Dynaguy', powers: ['disintegration ray', 'fly'] },

    { name: 'Dynaguy', powers: ['disintegration ray', 'fly'] },

    { name: 'Dynaguy', powers: ['disintegration ray', 'fly'] },

    { name: 'Dynaguy', powers: ['disintegration ray', 'fly'] },

    { name: 'Dynaguy', powers: ['disintegration ray', ] },

    { name: 'Dynaguy', powers: ['disintegration ray', ] },

    { name: 'Dynaguy', powers: ['disintegration ray', 'fly'] },

    { name: 'Dynaguy', powers: ['disintegration ray', 'fly'] },

    // { name: 'Dynaguy', powers: ['disintegration ray', 'fly'] },

]

// filter the superhero who can fly
function getFlylingSuperHeros() {
    return superHeros.filter(hero => {
        return hero.powers.includes('fly')
    })
}

export {getFlylingSuperHeros}