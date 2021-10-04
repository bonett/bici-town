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
export class UserService {
  private dbPath = 'user_bici_town';
  private initData: Array<any> = [];
  private reference: AngularFirestoreCollection<any> = null;
  private userSubject = new BehaviorSubject(this.initData);
  public userLogged$: Observable<any[]> = this.userSubject.asObservable();

  constructor(private afs: AngularFirestore) {
    this.reference = this.afs.collection(this.dbPath);
  }

  private getCollection(): AngularFirestoreCollection<any> {
    return this.reference;
  }

  public getUserList() {
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
        this.userSubject.next(data);
      });
  }
}
