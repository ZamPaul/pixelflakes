export const menuVariants = {
    initial: {
        opacity: 0.5,
        // top: '-100%',
        // rotateX: '90deg',
        transform: 'translate(-50%,-50%) rotateX(-90deg)',
        transformOrigin: '50% 100%'
    },
    open: {
        opacity: 1,
        // top: '0%',
        // rotateX: '0deg',
        transform: 'translate(-50%,-50%) rotateX(0deg)',
        transformOrigin: '50% 100%',
        transition: {duration:0.65,ease:[0.76, 0, 0.24, 1]},
    },
    close: {
        opacity: 0.5,
        // top: '100%',
        // rotateX: '90deg',
        transform: 'translate(-50%,-100%) rotateX(-90deg)',
        transformOrigin: '50% 0%',
        transition: {duration:0.65,delay:.55,ease:[0.76, 0, 0.24, 1]}
    }
}

export const links = {
    initial: {
        opacity: 0,
        rotateX: '90deg'
    },
    in: (i) => ({
        opacity: 1,
        rotateX: "0deg",
        transition: {duration:0.5 , delay: 0.3+(i*0.07) , ease:[0.76, 0, 0.24, 1]},
    }),
    out: (i) => ({
        opacity: 0,
        rotateX: '90deg',
        transition: {duration:0.5 , delay:0.3-(i*0.08) , ease:[0.76, 0, 0.24, 1]},
    })
}

export const extraVar =  {
    initial: {
        opacity: 0,
    },
    in: (i) => ({
        opacity: 1,
        transition: {duration:0.5 , delay: 0.35+(i*0.07) , ease:[0.76, 0, 0.24, 1]},
    }),
    out: (i) => ({
        opacity: 0,
        transition: {duration:0.5 , delay:0.25-(i*0.08) , ease:[0.76, 0, 0.24, 1]},
    })
}

export const iconVar =  {
    initial: {
        opacity: 0,
    },
    in: (i) => ({
        opacity: 1,
        transition: {duration:0.5 , delay: 0.35+(i*0.07) , ease:[0.76, 0, 0.24, 1]},
    }),
    out: (i) => ({
        opacity: 0,
        transition: {duration:0.5 , delay:0.25-(i*0.08) , ease:[0.76, 0, 0.24, 1]},
    })
}
