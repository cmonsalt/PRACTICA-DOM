const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    $id.innerHTML = `<p>Tú posición actual es:</p>
    <ul>
    <li>Latitud:<b>${coords.latitude}</b></li>
    <li>Longitud:<b>${coords.longitude}</b></li>
    <li>precisión:<b>${coords.accuracy}</b></li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target=”_blank” rel="noopener">Ir a Google maps</a>
    `;
  };
  const error = (err) => {
    console.log(`Error ${err.code}: ${err.message}`);
    $id.innerHTML = `<p>Error ${err.code}: ${err.message}</p>`;
  };
  n.geolocation.getCurrentPosition(success, error, options);
}
