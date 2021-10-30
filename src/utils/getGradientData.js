export default isDay => {
    return(
        isDay ? 
        {
            colors: ['#00b4d8', '#48cae4'], angle: 180
        } 
        : {
            colors: ['#0C2748', '#00DEDE'], angle: 140
        }
    )
}