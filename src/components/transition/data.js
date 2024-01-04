export const overlay = {
    initial: {
        opacity: 0,
    },
    enter:{
        opacity: 1,
        transition: {duration:.5,ease:[0.76, 0, 0.24, 1]},
    },
    exit: {
        opacity: 0,
        transition: {duration:.5,ease:[0.76, 0, 0.24, 1]},
    }
}

// export const slideBack = {
//     initial: {
//         // opacity: 0,
//         scaleY: 1,
//     },
//     enter:{
//         // opacity: 1,
//         scaleY: 0, 
//         transition: {duration:.6,delay:.3,ease:[0.76, 0, 0.24, 1]},
//     },
//     exit: {
//         // opacity: 0,
//         scaleY: 0,
//     }
// }

// export const slideTop = {
//     initial: {
//         // opacity: 0,
//         scaleY: 0,
//     },
//     enter:{
//         // opacity: 1,
//         scaleY: 0, 
//     },
//     exit: {
//         // opacity: 0,
//         scaleY: 1,
//         transition: {duration:.6,ease:[0.76, 0, 0.24, 1]},
//     }
// }

export const slideBack = {
    initial: {
        opacity: 1,
    },
    enter: (i)=>({
        opacity: 0,
        transition: {duration:.5,delay:0.6+(i*0.004),ease:[0.33, 1, 0.68, 1]},
    }),
    exit: {
        opacity: 0,
    }
}

export const slideTop = {
    initial: {
        opacity: 0,
    },
    enter:{
        opacity: 0, 
    },
    exit: (i)=>({
        opacity: 1,
        transition: {duration:.5,delay:(i*0.004),ease:[0.33, 1, 0.68, 1]},
    })
}

export const titleVar = {
    initial: {
        opacity: 0,
        top: '30%',
        // left: '50%',
        // transform: 'translate(-50%,-50%)'
    },
    enter: {
        opacity: 1,
        top: '50%',
        // transform: 'translate(-50%,-100%)',
        // transition:{ opacity:{ duration:.8,delay:0,ease:[0.33, 1, 0.68, 1] },
        // top:{ duration:.7,delay:0,ease:[0,1,1,0] } },
        transition: { duration:.5,delay:0,ease:[0.33, 1, 0.68, 1] }
    },
    exit:{
        opacity: 0,
    }
}
