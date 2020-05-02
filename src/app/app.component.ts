import { Component, OnInit } from '@angular/core';
import { Case } from './_models/case';
import { Cooler } from './_models/cooler';
import { Disco } from './_models/disco';
import { FuentePoder } from './_models/fuente-poder';
import { PlacaBase } from './_models/placa-base';
import { Procesador } from './_models/procesador';
import { Ram } from './_models/ram';
import { TarjetaGrafica } from './_models/tarjeta-grafica';
import { CaseService } from './_services/case.service';
import { CoolerService } from './_services/cooler.service';
import { DiscoService } from './_services/disco.service';
import { FuentePoderService } from './_services/fuente-poder.service';
import { PlacaBaseService } from './_services/placa-base.service';
import { PresupuestoService } from './_services/presupuesto.service';
import { ProcesadorService } from './_services/procesador.service';
import { RamService } from './_services/ram.service';
import { TarjetaGraficaService } from './_services/tarjeta-grafica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //selecionNvageacion
  selectNav = 1;

  cases: Case[];

  coolers: Cooler[];

  discos: Disco[];

  fuentesPoder: FuentePoder[];

  placasBases: PlacaBase[];

  mejorpc: any = {}; //tendra atributo presupuesto

  listaMejoresComponentesPresupuesto: any = {};

  procesadores: Procesador[];

  rams: Ram[];

  tarjetasGraficas: TarjetaGrafica[];

  sumaTotal: any = {};

  constructor(private caseService: CaseService, private coolerService: CoolerService,
              private discoService: DiscoService, private fuentePoderService: FuentePoderService,
              private placaBaseService: PlacaBaseService, private presupuestoService: PresupuestoService,
              private procesadorService: ProcesadorService, private ramService: RamService,
              private tarjetaGraficaService: TarjetaGraficaService) {}

  ngOnInit() {
    this.loadComponents();
  }

  loadComponents(){

    this.caseService.getCases().subscribe((response) => {
      this.cases = response;
    }, error => {
      console.log('Error');
    });

    this.coolerService.getCoolers().subscribe((response) => {
      this.coolers = response;
    }, error => {
      console.log('Error');
    });

    this.discoService.getDiscos().subscribe((response) => {
      this.discos = response;
    }, error => {
      console.log('Error');
    });

    this.fuentePoderService.getFuentes().subscribe((response) => {
      this.fuentesPoder = response;
    }, error => {
      console.log('Error');
    });

    this.placaBaseService.getPlacas().subscribe((response) => {
      this.placasBases = response;
    }, error => {
      console.log('Error');
    });

    this.procesadorService.getProcesadores().subscribe((response) => {
      this.procesadores = response;
    }, error => {
      console.log('Error');
    });

    this.ramService.getRams().subscribe((response) => {
      this.rams = response;
    }, error => {
      console.log('Error');
    });

    this.tarjetaGraficaService.getTarjetas().subscribe((response) => {
      this.tarjetasGraficas = response;
    }, error => {
      console.log('Error');
    });
  }

  getSelectNav(){
    return this.selectNav;
  }

  setSelectNav(n: number){
    this.selectNav = n;
    return this.selectNav;
  }

  calcularPresupuesto(){

    this.presupuestoService.createPresupuesto(this.mejorpc).subscribe(next => {
      console.log('todokul con los cursos');
    }, error => {
        console.log('error');
    });

    this.cargarMejoresComponentes();
  }

  cargarMejoresComponentes() {
    this.presupuestoService.getPresupuesto().subscribe((response) => {
      this.listaMejoresComponentesPresupuesto = response;
      this.calcularTotalPrecio(response);
    }, error => {
      console.log('Error');
    });
  }

  calcularTotalPrecio(arr) {
    let s = 0;
    const lst = arr;

    const arrayLength = lst.length;

    for (let i = 0; i < arrayLength; i++) {
      console.log(lst[i]);
      s = s + lst[i].precio;
  }

    this.setSumaTotal(s);
  }

  setSumaTotal(n: number){
    console.log(n);
    this.sumaTotal.suma = n;
  }

}
