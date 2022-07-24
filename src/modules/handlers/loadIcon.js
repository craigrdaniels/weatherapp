import sun from '../../images/icons8-sun-50.svg';
import moon from '../../images/icons8-moon-and-stars-50.svg';
import cloudy from '../../images/icons8-partly-cloudy-day-50.svg';
import cloudynight from '../../images/icons8-night-50.svg';
import cloud from '../../images/icons8-cloud-50.svg';
import clouds from '../../images/icons8-clouds-50.svg';
import raincloud from '../../images/icons8-rain-cloud-50.svg';
import rain from '../../images/icons8-rain-50.svg';
import storm from '../../images/icons8-storm-50.svg';
import snow from '../../images/icons8-snow-50.svg';
import mist from '../../images/icons8-haze-50.svg';


const iconReference = {
  '01d': {"icon": sun}, // clear sky day
  '01n': {"icon": moon}, // clear sky night
  '02d': {"icon": cloudy}, // few clouds day
  '02n': {"icon": cloudynight}, // few clouds night
  '03d': {"icon": cloud}, // clouds day
  '03n': {"icon": cloud}, // clouds night
  '04d': {"icon": clouds}, // broken clouds day
  '04n': {"icon": clouds}, // broken clouds night
  '09d': {"icon": raincloud}, // shower rain day
  '09n': {"icon": raincloud}, // shower rain night (shows sun)
  '10d': {"icon": rain}, // rain day
  '10n': {"icon": rain}, // rain night
  '11d': {"icon": storm}, // storm day
  '11n': {"icon": storm}, // storm night
  '13d': {"icon": snow}, // snow day
  '13n': {"icon": snow}, // snow night
  '50d': {"icon": mist}, // mist day
  '50n': {"icon": mist}, // mist night
};

const getIcon = (code) => iconReference[code].icon;
export default getIcon;

