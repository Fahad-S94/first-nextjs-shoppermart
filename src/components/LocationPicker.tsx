'use effect';
import { Loader } from '@googlemaps/js-api-loader';
import { create } from 'domain';
import { createRef, useEffect } from 'react';

export default function LocationPicker() {
  const divRef = createRef<HTMLDivElement>();

  async function loadMap() {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    });

    const { Map } = await loader.importLibrary('maps');
    const { AdvancedMarkerElement } = await loader.importLibrary('marker');

    const map = new Map(divRef.current, {
      mapId: 'map',
      center: { lat: 0, lng: 0 },
      zoom: 3,
      mapTypeControl: false,
      straightViewControl: false,
    });
    const pin = new AdvancedMarkerElement({
      map,
      position: { lat: 0, lng: 0 },
    });
  }
  useEffect(() => {
    loadMap();
  }, []);
  return (
    <>
      <div id="mapElem" ref={divRef} className="w-full h-[200px] "></div>
    </>
  );
}
