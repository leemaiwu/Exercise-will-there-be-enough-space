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

console.log(enough(10, 5, 5))