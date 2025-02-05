export const device = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/android|iphone|ipod|blackberry|iemobile|opera mini/.test(userAgent)) {
    return true;
  } else {
    return false;
  }
}


export const orientaion = () => {
  return window.screen.orientation.type.includes('portrait');
}
