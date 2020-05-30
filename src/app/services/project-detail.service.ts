import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ProjectDetail } from '../interface/project-detail';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {

  constructor() { }

  getProjects(): Observable<ProjectDetail[]> {
    return of([{
      id: 1,
      location: 'KARIBBA REDD',
      country: 'ZIMBABWE',
      title: 'Reduced Emissions from Deforestation and Degradation',
      mass: 957842,
      description: `Protects forest and wildlife on the southern shores of Lake Kariba in Zimbabwe,
      forming a giant biodiversity corridor.`,
      available: true,
      image: 'assets/images/Tile_Image.jpg',
      price: 7.5
    },
    {
      id: 2,
      location: 'ARCATA SUNNYBRAE TRACT',
      country: 'USA',
      title: 'Improved Forest Management',
      mass: 710093,
      description: `Protects forest and wildlife on the southern shores of Lake Kariba in Zimbabwe,
      forming a giant biodiversity corridor.`,
      available: false,
      image: 'assets/images/Tile_Image.jpg',
      price: 7.5
    },
    {
      id: 3,
      location: 'WOLF CREEK LANDFILL',
      country: 'USA',
      title: 'Landfill Methane Gas Capture',
      mass: 20052014,
      description: `Protects forest and wildlife on the southern shores of Lake Kariba in Zimbabwe,
      forming a giant biodiversity corridor.`,
      available: false,
      image: 'assets/images/Tile_Image.jpg',
      price: 7.5
    },
    {
      id: 4,
      location: 'TERRAPASS MIXED PORFOLIO',
      country: 'MIXED',
      title: 'Mixed',
      mass: 24522325,
      description: `Protects forest and wildlife on the southern shores of Lake Kariba in Zimbabwe,
      forming a giant biodiversity corridor.`,
      available: false,
      image: 'assets/images/Tile_Image.jpg',
      price: 7.5
    },
    {
      id: 5,
      location: 'GASTON COUNTRY LANDFILL',
      country: 'USA',
      title: 'Landfill Methane Gas Capture',
      mass: 24522325,
      description: `Protects forest and wildlife on the southern shores of Lake Kariba in Zimbabwe,
      forming a giant biodiversity corridor.`,
      available: false,
      image: 'assets/images/Tile_Image.jpg',
      price: 7.5
    },
    {
      id: 6,
      location: 'MYAMYN CONSERVATION',
      country: 'AUSTRALIA',
      title: 'Reforestation and Hydropower',
      mass: 995908,
      description: `Protects forest and wildlife on the southern shores of Lake Kariba in Zimbabwe,
      forming a giant biodiversity corridor.`,
      available: true,
      image: 'assets/images/Tile_Image.jpg',
      price: 7.5
    },
    {
      id: 7,
      location: 'NATURAL PACT LAND ART',
      country: 'COSTA RICA',
      title: 'Reforestation thorugh Land Art',
      mass: 327,
      description: `Protects forest and wildlife on the southern shores of Lake Kariba in Zimbabwe,
      forming a giant biodiversity corridor.`,
      available: false,
      image: 'assets/images/Tile_Image.jpg',
      price: 7.5
    },
    {
      id: 8,
      location: 'NATURE LAB URBAN FROESTRY',
      country: 'CANADA',
      title: 'Urban Reforestation',
      mass: 995,
      description: `Protects forest and wildlife on the southern shores of Lake Kariba in Zimbabwe,
      forming a giant biodiversity corridor.`,
      available: true,
      image: 'assets/images/Tile_Image.jpg',
      price: 18.5
    }
  ]);
  }
}
