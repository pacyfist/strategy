import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from '@angular/fire/firestore';
import {
  Storage,
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly firestore = inject(Firestore);
  private readonly storage = inject(Storage);

  async getBlogImages(pageSize: number, lastDoc?: QueryDocumentSnapshot<any>) {
    const snapshot = await getDocs(
      query(
        collection(this.firestore, 'blogImage'),
        orderBy('uploadedAt', 'desc'),
        limit(pageSize),
        ...(lastDoc ? [startAfter(lastDoc)] : []),
      ),
    );
    return {
      items: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
      lastDoc:
        snapshot.docs.length > 0
          ? snapshot.docs[snapshot.docs.length - 1]
          : null,
    };
  }

  async uploadBlogImage(file: File, title: string, alt: string): Promise<void> {
    if (!file) return;
    const guid = crypto.randomUUID();
    const storageRef = ref(this.storage, `blog/${guid}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    await addDoc(collection(this.firestore, 'blogImage'), {
      title,
      alt,
      url,
      uploadedAt: new Date(),
    });
  }

  async deleteBlogImage(docId: string, guid: string): Promise<void> {
    const storageRef = ref(this.storage, `blog/${guid}`);
    const docRef = doc(this.firestore, `blogImage/${docId}`);

    await deleteObject(storageRef);
    await deleteDoc(docRef);
  }
}
