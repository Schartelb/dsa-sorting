function merge(left, right) {
    let out = []
    let l = 0
    let r = 0
    console.log(left.length, right.length)
    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            out.push(left[l])
            l++
        }
        if (right[r] <= left[l]) {
            out.push(right[r])
            r++
        }
        console.log("left", l, ", right ", r)
    }
    while (l < left.length) {
        out.push(left[l])
        l++
    }
    while (r < right.length) {
        out.push(right[r])
        r++
    }
    return out
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2)
    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid))
    return merge(left, right)
}

module.exports = { merge, mergeSort };