import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CaseService } from './_services/case.service';
import { CoolerService } from './_services/cooler.service';
import { DiscoService } from './_services/disco.service';
import { FuentePoderService } from './_services/fuente-poder.service';
import { PlacaBaseService } from './_services/placa-base.service';
import { PresupuestoService } from './_services/presupuesto.service';
import { ProcesadorService } from './_services/procesador.service';
import { RamService } from './_services/ram.service';
import { TarjetaGraficaService } from './_services/tarjeta-grafica.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CaseService,
    CoolerService,
    DiscoService,
    FuentePoderService,
    PlacaBaseService,
    PresupuestoService,
    ProcesadorService,
    RamService,
    TarjetaGraficaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
