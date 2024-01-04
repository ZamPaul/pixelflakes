import React from 'react'

function svg(props) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="brandmark" data-v-693761e8="" style={{opacity: 1, visibility: 'inherit', width:props.width}}><path d="M35.2605 38.1535L35.254 25.3652L49.9978 25.3019V0H32.5202C31.7441 5.31938 29.5531 10.3532 25.9276 15.097C20.5886 22.082 12.5071 26.1107 1.68302 27.1921L0 27.3599V50H50V38.0924L35.2605 38.1535Z" fill="currentColor" data-v-693761e8=""></path><path d="M14.2075 7.48419C16.017 5.21255 17.2139 2.71201 17.8352 0H0V14.5019C6.28297 13.8108 11.0246 11.4803 14.2075 7.48419Z" fill="currentColor" data-v-693761e8=""></path></svg>
  )
}

svg.defaultProps = {
    width: '3vw'
}

export default svg
