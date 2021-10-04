import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private dbPath = 'inventory';
  private initData: Array<any> = [];
  private reference: AngularFirestoreCollection<any> = null;
  private inventorySubject = new BehaviorSubject(this.initData);
  public inventory$: Observable<any[]> = this.inventorySubject.asObservable();

  constructor(private afs: AngularFirestore) {
    this.reference = this.afs.collection(this.dbPath);
  }

  private getCollection(): AngularFirestoreCollection<any> {
    return this.reference;
  }

  public getInventory() {
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
        this.inventorySubject.next(data);
      });
  }
}
