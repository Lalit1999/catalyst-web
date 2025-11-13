const sortByDistance = (a, b, searchLocation) => {
    // Calculate the distance from a and b to the searchLocation.coords
    const distanceA = calcDistance(a.location, searchLocation.coords);
    const distanceB = calcDistance(b.location, searchLocation.coords);

    // Compare distances and return -1, 0, or 1
    if (distanceA < distanceB) {
        return -1;
    } else if (distanceA > distanceB) {
        return 1;
    } else {
        return 0;
    }
}

// Function to calculate the distance between two coordinates
const calcDistance = (coord1, coord2) => {
  const [lat1, lon1] = coord1;
  const [lat2, lon2] = coord2;

  // Haversine formula to calculate distance
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = ( Math.sin(dLat / 2) * Math.sin(dLat / 2) ) + ( Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2) );
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

export { calcDistance, sortByDistance } ;