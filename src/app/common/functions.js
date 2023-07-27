import Cookie from "js-cookie";

export const logout = () => {
  Cookie.remove("access_token");
  Cookie.remove("refresh_token");
  localStorage.removeItem("user");
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formatSpeed = (max_speed = 0) => {
  if (max_speed >= 1000) {
    const speedInKmH = (max_speed / 1000).toFixed(2);
    return `${speedInKmH}km/h`;
  } else {
    const speedInMS = max_speed.toFixed(2);
    return `${speedInMS}m/s`;
  }
};
export const formatDistance = (distance = 0) => {
  if (distance >= 100) {
    const distanceInKm = (distance / 1000).toFixed(2);
    return `${distanceInKm}km`;
  } else {
    return `${distance}m`;
  }
};

export const formatDistanceWithUnit = (distance = 0) => {
  if (distance >= 100) {
    const distanceInKm = (distance / 1000).toFixed(2);
    return { distance: distanceInKm, unit: "Km" };
  } else {
    return { distance: distance, unit: "M" };
  }
};
export const formatMovingTime = (moving_time = 0) => {
  if (moving_time < 60) {
    return `${moving_time}s`;
  } else if (moving_time < 3600) {
    const minutes = Math.floor(moving_time / 60);
    const seconds = moving_time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  } else {
    const hours = Math.floor(moving_time / 3600);
    const minutes = Math.floor((moving_time % 3600) / 60);
    const seconds = moving_time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
};
export const formatElevation = (elev_high = 0, elev_low = 0) => {
  const averageElevation = ((elev_high + elev_low) / 2).toFixed(2);
  return `${averageElevation}m`;
};
