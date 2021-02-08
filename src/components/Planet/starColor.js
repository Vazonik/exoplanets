import rgbHex from 'rgb-hex';

const [sLow, sMid, sHigh] = [1500, 13000, 40000];

export default function getStarColor(temperature) {
  if(!temperature) {
    return '#000';
  }

  if (temperature < sLow) {
    temperature = sLow;
  } else if (temperature > sHigh) {
    temperature = sHigh;
  }

  let red = 255;
  red = (1 - (temperature - sMid) / (sHigh - sMid)) * 255;
  if (red < 0) red = 0;
  else if (red > 255) red = 255;

  let green = -255 * (temperature - sHigh) * (temperature - sLow) / ((sMid - sHigh) * (sLow - sMid));
  if (green < 0) green = 0;
  else if (green > 255) green = 255;

  let blue = 255;
  blue = (temperature - sMid * 0.5) / (sMid - sMid * 0.5) * 255;
  if (blue < 0) blue = 0;
  else if (blue > 255) blue = 255;

  return '#' + rgbHex(red, green, blue);
}