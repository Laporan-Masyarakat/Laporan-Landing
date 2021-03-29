import React from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
const google = window.google
console.log(google)

const MapWithAMarker = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyABIZhJmSOK_kms5Tss-ZMF57HkblfiSV4',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        style={{
          height: `600px`,
          width: `90%`,
          marginLeft: `5%`,
          marginTop: `2%`,
        }}
      />
    ),
    mapElement: (
      <div
        style={{
          height: `100%`,
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        }}
      />
    ),
    center: { lat: -6.4, lng: 106.79 },
  }),
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    },
  ),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap defaultZoom={10} defaultCenter={props.center}>
    <Marker
      position={{ lat: -6.2, lng: 106.84 }}
      onClick={props.onToggleOpen}
    />
    <Marker
      position={{ lat: -6.4, lng: 106.79 }}
      onClick={props.onToggleOpen}
    />
    {props.isOpen && (
      <InfoBox
        defaultPosition={
          new google.maps.LatLng(props.center.lat, props.center.lng)
        }
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div
          style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}
        >
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            You In Depok
          </div>
        </div>
      </InfoBox>
    )}
  </GoogleMap>
))

function LocationScreen() {
  return (
    <>
      <MapWithAMarker />
    </>
  )
}

export default LocationScreen
