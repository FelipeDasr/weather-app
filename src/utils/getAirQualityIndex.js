export default index => (
    index === 1 ? 'Good' :
    index === 2 ? 'Moderate' :
    index <= 4 ? 'Unhealthy' :
    index === 5 ? 'Very Unhealthy' : 'Hazardous'
)
