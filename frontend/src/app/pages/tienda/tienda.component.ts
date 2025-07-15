import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../shared/services/mock-data.service';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
  descripcion: string;
}

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html'
})
export class TiendaComponent implements OnInit {
  categorias: string[] = ['Todos', 'Gorras', 'Camisetas', 'Hoodies', 'Libros', 'Accesorios', 'E-books'];
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  categoriaSeleccionada: string = 'Todos';
  busqueda: string = '';

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.mockDataService.getContenido().subscribe(data => {
      this.productos = data.productos || [];
      this.filtrarProductos();
    });
  }

  seleccionarCategoria(cat: string) {
    this.categoriaSeleccionada = cat;
    this.filtrarProductos();
  }

  filtrarProductos() {
    let filtrados = this.productos;
    if (this.categoriaSeleccionada !== 'Todos') {
      filtrados = filtrados.filter(p => p.categoria === this.categoriaSeleccionada);
    }
    if (this.busqueda.trim()) {
      const b = this.busqueda.trim().toLowerCase();
      filtrados = filtrados.filter(p =>
        p.nombre.toLowerCase().includes(b) ||
        p.descripcion.toLowerCase().includes(b)
      );
    }
    this.productosFiltrados = filtrados;
  }

  onBuscar(e: Event) {
    this.filtrarProductos();
  }
}
