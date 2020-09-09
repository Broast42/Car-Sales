export const add = (item, addPrice) => {
    const newPrice = addPrice + item.price;
    return { type: "ADD_FEATURE", payload: {item: item, newPrice: newPrice} };
};

export const remove = (item, addPrice) => {
    const newPrice = addPrice - item.price;
    return { type: "REMOVE_FEATURE", payload: {item: item, newPrice: newPrice}}
}