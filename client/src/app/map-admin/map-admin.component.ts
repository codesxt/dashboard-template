import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
  iconUrl: string;
	layerIndex : number;
}
interface markerSet {
	name: string;
	markers: marker[];
}

@Component({
  selector: 'app-map-admin',
  templateUrl: './map-admin.component.html',
  styles:[`
    agm-map {
      height: 350px;
    }
  `]
})
export class MapAdminComponent implements OnInit {
  lat        : number      = 51.678418;
  lng        : number      = 7.809007;
  zoom       : number      = 8;
	markerSets : markerSet[] = [];
  markers    : marker[]    = [];
  mapStyles  : any         = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
	mapForm    : FormGroup;

  constructor(
    private router: Router,
		private formBuilder: FormBuilder
  ) {  }

  ngOnInit() {
    //this.router.navigate(['/documents/list']);
		this.createOptionsForm();
		this.buildLayers();
  }

	createOptionsForm(){
		this.mapForm = this.formBuilder.group({
			layer: [''],
			newLayer: ['']
    })
	}

	addNewLayer(){
		if(this.mapForm.get('newLayer').value!=""){
			this.markerSets.push({
				name: this.mapForm.get('newLayer').value,
				markers: []
			});
			this.mapForm.patchValue({
				newLayer: "0"
			});
		}
	}

	buildLayers(){
		this.markerSets.push({
			name: 'Default',
			markers: []
		})
		this.mapForm.patchValue({
			layer: '0'
		})
	}

  mapClicked($event: any) {
		let layerIndex = this.mapForm.get('layer').value;
		if(layerIndex != ""){
			this.markerSets[layerIndex].markers.push({
	      lat: $event.coords.lat,
	      lng: $event.coords.lng,
	      draggable: true,
	      iconUrl: '',
	      label: "Marcador " + (this.markerSets[layerIndex].markers.length+1),
				layerIndex: +layerIndex
	    });
		}
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markerRemove(m: marker){
		this.markerSets[m.layerIndex].markers = this.markerSets[m.layerIndex].markers.filter(item => item !== m);
    //this.markers = this.markers.filter(item => item !== m);
  }
}
