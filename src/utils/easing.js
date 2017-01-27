function swing (p) {
  return 0.5 - Math.cos(p * Math.PI) / 2;
}

function linear(p) {
  return p;
}

export default { swing, linear };
