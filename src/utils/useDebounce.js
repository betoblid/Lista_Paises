export function debounce(func, timeout){

    let timer

    return (...args) => {
        clearTimeout(timer)
        console.log("oal")
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    }
}