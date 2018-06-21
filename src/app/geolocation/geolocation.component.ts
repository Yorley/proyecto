import { Component, OnInit } from '@angular/core';
import { Marker } from '../classes/marker';
import { AngularFireDatabase } from 'angularfire2/database';
import { Fruit } from '../classes/fruit';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  lat = 9.5649173;
  lng = -84.0078721;
  zoom = 15;

  visibleMarkers = {};
 
  fruits: Observable<Fruit[]>;
  markers: Observable<Marker[]>;

  constructor(public db: AngularFireDatabase ) {}

  ngOnInit() {
    const fruitsRef = this.db.list<Fruit>('product');

    // Esto permite agregar el id de la fruta al objeto
    this.fruits = fruitsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
//----------------------------------------------------------------------------------
  }

  private convertStringToNumber(value: string): number {
    return +value;
  }

}