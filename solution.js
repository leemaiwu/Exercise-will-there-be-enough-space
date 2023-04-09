function enough(cap, on, wait) {
  // cap = number of passengers the bus can hold
  // on = number of passengers currently on the buss
  // wait = number of passengers waiting to get on

  // if cap < on, return 0
  if (cap > on && wait < (cap - on)) {
    return 0
    // if cap >= on, return (wait - (cap - on))
  } else if (cap >= on) {
    return (wait - (cap - on))
  }
}

console.log(enough(10, 5, 5)) // 0
console.log(enough(100, 60, 50)) // 10


// Alternate Solution

function simpEnough(cap, on, wait) {
    return Math.max(wait + on - cap, 0)
}

console.log(simpEnough(10, 5, 5)) // 0
console.log(simpEnough(100, 60, 50)) // 10