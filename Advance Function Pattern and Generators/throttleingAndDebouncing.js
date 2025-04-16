function handleResize(e){
    console.log('resize happened on event: ' + e)
    // resize happened on event: [object Event] 
}

function throttle(func, delay) {
    let throttleTimeout = null
    return (...rest) =>{
        if(!throttleTimeout) {
            func(...rest);
            throttleTimeout = setTimeout(() => {
                throttleTimeout = null
            }, delay)
        } 
    }
}
const throttledHandleResize = throttle(handleResize, 1000)
window.addEventListener('resize', throttledHandleResize)