export let text = {
    initial: {
        top: '70%',
        opacity: 0
    },
    in: { 
        top: '0%',
        opacity: 1,
        transition: {duration: .5, ease: [0.76, 0, 0.24, 1]}
    },
    out : {
        top: '-70%',
        opacity: 0,
        transition: {duration: .5, ease: [0.76, 0, 0.24, 1]},
        transitionEnd: {
            top: '70%'
        }
    }
}

export let button = {
    initial: {
        transform: 'scale(1)'
    },
    in: {
        transform: 'scale(0.9)',
        transition: {duration: .5, ease: [0.76, 0, 0.24, 1]}
    },
    out : {
        transform: 'scale(1)',
        transition: {duration: .5, ease: [0.76, 0, 0.24, 1]},
    }
}