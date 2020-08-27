import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  artists = [
    {id: 1, name: "Alex G", description: "Alex played an X movie", age: 34},
    {id:2, name: "B Lily", description: "B played a Z movie", age: 45},
    {id:3, name: "Carl Le Bonnet", description: "Carl played a t movie", age: 59},
    {id:4, name: "Ghana Di", description: "Di played a 78 movie", age: 25},
    {id:5, name: "Carla Jesse", description: "Carla played a uio movie", age: 65},
  ]

  constructor() { }

  public getArtists(): Array<{id, name, description, age}>{
    return this.artists;

  }
}
