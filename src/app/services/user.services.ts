import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dbPath = 'user_bici_town';
  private initData: Array<any> = [];
  private reference: AngularFirestoreCollection<any> = null;
  private userSubject = new BehaviorSubject(this.initData);
  public userLogged$: Observable<any[]> = this.userSubject.asObservable();

  constructor(
    private afs: AngularFirestore,
    private storageService: StorageService
  ) {
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

  public getUserLogged() {
    return this.storageService.get('user_logged');
  }

  public updateUserPoints(currentUser: any, newPoints: number) {
    const { firstname, lastname, location, points, photo, uuid } = currentUser;
    const payload = {
      firstname,
      lastname,
      location,
      points: points + newPoints,
      photo,
      uuid,
    };

    // the next line is because I'm not use authentication.
    this.getCollection().doc('RbRtVgoVO6Xc1SnYCQ6X').update(payload);
  }
}
