

export const concatArrays = (obj) => {
    const concatArray = [];
    Object.values(obj).forEach((el) => {
        el.forEach((item) => {
            concatArray.push(item);
        });
    });

    return concatArray;
}