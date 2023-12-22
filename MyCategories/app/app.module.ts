import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeService } from './tree.service';
import { HttpClientModule } from '@angular/common/http';
import { ConverterPipe } from './converter.pipe';


import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        ConverterPipe
    ],
    imports: [
        HttpClientModule,
        BrowserModule
    ],
    providers: [TreeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
