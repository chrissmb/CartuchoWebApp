import { Injectable, ComponentFactoryResolver, ApplicationRef, ComponentFactory, ComponentRef } from '@angular/core';
import { AssyncSpinnerComponent } from './assync-spinner.component';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssyncSpinnerService {

  divContainer: HTMLDivElement;
  assyncSpinnerFactory: ComponentFactory<AssyncSpinnerComponent>;
  assyncSpinnerComponentRef: ComponentRef<AssyncSpinnerComponent>;
  assyncSpinner: AssyncSpinnerComponent;

  constructor(
    private componentFatctoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
  ) {
    this.assyncSpinnerFactory = this.componentFatctoryResolver.resolveComponentFactory(AssyncSpinnerComponent);
  }

  subscribeObservable(
    observable: Observable<any>,
    next: (v: any) => void,
    error: (error: any) => void,
    complete?: () => void
  ) {
    this.initAssyncSpinnerComponentRef();
    this.assyncSpinner.showSpinner();

    const nextTreated = (v: any) => {
      this.assyncSpinner.closeSpinner();
      next(v);
    };

    const errorTreated = (e: any) => {
      this.assyncSpinner.closeSpinner();
      error(e);
    };

    observable.subscribe(nextTreated, errorTreated, complete);
  }

  subscribeObservableByObserver(observable: Observable<any>, observer: Observer<any>) {
    this.initAssyncSpinnerComponentRef();
    this.assyncSpinner.showSpinner();

    const nextTreated = (v: any) => {
      this.assyncSpinner.closeSpinner();
      observer.next(v);
    };

    const errorTreated = (e: any) => {
      this.assyncSpinner.closeSpinner();
      observer.error(e);
    };

    observable.subscribe(nextTreated, errorTreated, observer.complete);
  }

  private initAssyncSpinnerComponentRef() {
    if (this.assyncSpinnerComponentRef == null) {
      this.divContainer = document.createElement('div');
      document.body.appendChild(this.divContainer);
      this.assyncSpinnerComponentRef = this.appRef.bootstrap(this.assyncSpinnerFactory, this.divContainer);
      this.assyncSpinner = this.assyncSpinnerComponentRef.instance;
    }
  }
}
