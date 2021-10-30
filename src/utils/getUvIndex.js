export default uv => (
    uv <= 2 ? 'Low' :
    uv <= 5 ? 'Moderate' :
    uv <= 7 ? 'Hight' : 'Very Hight'
)
