/**
 * Created by jihomoon on 5/15/17.
 */

import Helper from '../../helper/index';


export default class customMarker extends google.maps.OverlayView {
  constructor(latLng, map, image) {
    super();
    this.latLng_ = latLng;
    this.image_ =image;
    this.setMap(map);
    this.div_ = null;
  }

  getPosition() {
    return this.latLng_;
  }

  onAdd() {

    // var marker = document.createElement('div');
    // var circle = document.createElement('div'); //Circle
    // var triangle = document.createElement('div'); //Triangle


    var div = document.createElement('div');

    // marker.className = 'marker';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '2px';
    div.style.borderRadius='20px';
    div.style.borderColor = '#FFFFFF';
    div.style.position = 'absolute';
    div.style.background='#FFFFFF';
    // div.style.left = '-50px';
    div.style.zIndex='9999';
    // div.style.resize = 'horizontal';
    div.style.height = '60px';
    div.style.width = '60px';
    div.style.overflow = 'hidden';

    var img = document.createElement('img');
    img.src =  this.image_;
    img.style.position = 'absolute';
    img.style.borderRadius = 50 + '%';
    div.appendChild(img);
    this.div_ = div;

    // Add the element to the "overlayLayer" pane.
    var panes = this.getPanes();
    panes.overlayImage.appendChild(div);
  };

  draw(){
    var overlayProjection = this.getProjection();
    var position = this.myLatlng_;
    if(overlayProjection) {
      var px = overlayProjection.fromLatLngToDivPixel(position);
      //postion
      var div = this.div_;
      div.style.left = px.x - 30 + 'px';
      div.style.top = px.y - 76 + 'px';
      div.style.borderRadius = 50 + '%';
    }
  };

  onRemove() {
    this.div_.parentNode.removeChild(this.div_);
  };





}

