import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  private dbPath = 'historial';
  private initData: Array<any> = [];
  private reference: AngularFirestoreCollection<any> = null;
  private historialSubject = new BehaviorSubject(this.initData);
  public historial$: Observable<any[]> = this.historialSubject.asObservable();

  constructor(private afs: AngularFirestore) {
    this.reference = this.afs.collection(this.dbPath);
  }

  private getCollection(): AngularFirestoreCollection<any> {
    return this.reference;
  }

  public getHistorial() {
    this.getCollection()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            key: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.historialSubject.next(data);
      });
  }

  public async createNewRental(documentData: any) {
    return await this.getCollection()
      .doc(uuidv4())
      .set(documentData)
      .then((data) => {
        return true;
      });
  }

  public async completeRentalContract(key: string) {
    return this.getCollection().doc(key).update({ status: 'Entregada' });
  }
}
