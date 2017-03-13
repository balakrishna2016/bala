export const FlipDropDown = (state) => {
    console.log("Flipped Dropdown" , state)
    return {
        type : 'FLIP_DROP_DOWN',
        payload : state
    }
}