import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
  iconUrl: string;
}

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles:[`
    agm-map {
      height: 350px;
    }
  `]
})
export class MapViewComponent implements OnInit {
  title     : string   = 'My first AGM project';
  lat       : number   = 51.678418;
  lng       : number   = 7.809007;
  zoom      : number   = 8;
  markers   : marker[] = [];
  mapStyles : any      = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
  constructor(
    private router: Router
  ) {  }

  ngOnInit() {
    //this.router.navigate(['/documents/list']);
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      iconUrl: '',
      label: "Marcador " + (this.markers.length+1)
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markerRemove(m: marker){
    this.markers = this.markers.filter(item => item !== m);
  }
}
