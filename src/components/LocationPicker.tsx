'use effect';
import { Loader } from '@googlemaps/js-api-loader';
import { create } from 'domain';
import {
  Dispatch,
  SetStateAction,
  createRef,
  useEffect,
  useState,
} from 'react';

const defaultLocation = {
  lat: 45.5019,
  lng: 73.5674,
};

export type Location = {
  lat: number;
  lng: number;
};

export default function LocationPicker({
  location,
  setLocation,
}: {
  location: Location;
  setLocation: Dispatch<SetStateAction<Location>>;
}) {
  const divRef = createRef<HTMLDivElement>();

  const [map, setMap] = useState<any>();
  const [pin, setPin] = useState<any>();

  async function loadMap() {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    });

    const { Map } = await loader.importLibrary('maps');
    const { AdvancedMarkerElement } = await loader.importLibrary('marker');

    const map = new Map(divRef.current as HTMLDivElement, {
      mapId: 'map',
      center: location,
      zoom: 6,
      mapTypeControl: false,
      streetViewControl: false,
    });
    setMap(map);
    const pin = new AdvancedMarkerElement({
      map,
      position: defaultLocation,
    });
    setPin(pin);
    map.addListener('click', (ev: any) => {
      pin.position = ev.latLng;
      const lat = ev.latLng.lat();
      const lng = ev.latLng.lng();
      setLocation({ lat, lng });
    });
  }
  useEffect(() => {
    loadMap();
  }, []);

  useEffect(() => {
    if (map && pin) {
      map.center = location;
      pin.position = location;
    }
  }, [location]);
  return (
    <>
      <div id="mapElem" ref={divRef} className="w-full h-[200px] "></div>
    </>
  );
}
