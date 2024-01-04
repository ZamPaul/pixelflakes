export const upper = {
    initial: {
      // width: '100%',
      scaleX: 1,
      y: '0'
    },
    open: {
      // width:'60%',
      scaleX: 1,
      y: '3px',
      transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    },
    close: {
      // width: '100%',
      scaleX: 1,
      y: '0',
      transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    },
    initialMenu : {
        backgroundColor: '#121212',
        y: '0',
        scaleX:1,
        rotate: '45deg',
        top: '50%',
        // translate: '-50%,-50%',
    },
    openMenu : {
        backgroundColor: '#121212',
        rotate: '45deg',
        y: '0',
        scaleX:1,
        top: '50%',
        // translate: '-50%,-50%',
        transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    },
    closeMenu: {
        backgroundColor: '#121212',
        rotate: '45deg',
        y: '0',
        scaleX: 1,
        top: '50%',
        // translate: '-50%,-50%',
        transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    }
}

export const center = {
    initial: {
      // width: '100%',
      scaleX: 1
    },
    open: {
      // width:'0%',
      scaleX: 0,
      transition: {duration:0.5 , ease:[0.83, 0, 0.17, 1]}
    },
    close: {
      // width: '100%',
      scaleX: 1,
      transition: {duration:0.5 , ease:[0.83, 0, 0.17, 1]}
    },
    initialMenu : {
        backgroundColor: '#121212',
        opacity: 0,
    },
    openMenu : {
        backgroundColor: '#121212',
        opacity: 0,
        // transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    },
    closeMenu: {
        backgroundColor: '#121212',
        opacity: 0,
        // transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    }
}

export const lower = {
    initial: {
      // width: '100%',
      y: '0',
      scaleX: 1
    },
    open: {
      // width:'60%',
      scaleX: 1,
      y: '-3px',
      transition: {duration:0.4 , ease:[0.83, 0, 0.17, 1]}
    },
    close: {
      // width: '100%',
      scaleX: 1,
      y: '0',
      transition: {duration:0.4 , ease:[0.83, 0, 0.17, 1]}
    },
    initialMenu : {
        backgroundColor: '#121212',
        rotate: '-45deg',
        y: '0',
        top: '50%',
        // translate: '-50%,-50%',
        scaleX:1,
    },
    openMenu : {
        backgroundColor: '#121212',
        rotate: '-45deg',
        y: '0',
        scaleX:1,
        top: '50%',
        // translate: '-50%,-50%',
        transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    },
    closeMenu: {
        backgroundColor: '#121212',
        rotate: '-45deg',
        y: '0',
        scaleX: 1,
        top: '50%',
        // translate: '-50%, -50%',
        transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    }
}

export const overlay = {
    initial: {
      scale: 1,
      transition: {duration:.4}
    },
    open: {
      scale: 0.9,
      transition: {duration:0.4, ease:[0.83, 0, 0.17, 1]}
    },
    close: {
      scale: 1,
      transition: {duration:0.4 , ease:[0.83, 0, 0.17, 1]}
    },
    initialMenu : {
        backgroundColor: '#fff',
        scale: 1,
    },
    openMenu : {
        backgroundColor: '#fff',
        scale: 0.9,
        transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    },
    closeMenu: {
        backgroundColor: '#fff',
        scale: 1,
        transition: {duration:0.4 , ease:[0.83, 0, 0.17, 1]}
    }
}

export const dataLine = [
    {
      variant: upper,
      top: '0%',
      left: '0%',
      transform: 'translate(-50%,-50%)'
    },
    {
      variant: center,
      top: '50%',
      left: '0%',
      transform: 'translate(-50%,-50%)'
    },
    {
      variant: lower,
      top: '100%',
      left: '0%',
      transform: 'translate(-50%,-50%)'
    }
]

export const lines = {
    initial: {
      rotate: '0deg',
    },
    open: {
      rotate: '0deg',
      transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    },
    close: {
      rotate: '0deg',
      transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    },
    initialMenu : {
        rotate: '0deg',
        transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    },
    openMenu : {
        rotate: '90deg',
        transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    },
    closeMenu: {
        rotate: '0deg',
        transition: {duration:0.4 , ease:[0.65, 0, 0.35, 1]}
    }
}