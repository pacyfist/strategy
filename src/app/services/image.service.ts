import { inject, Injectable, resource } from '@angular/core';
import {
  Storage,
  listAll,
  ref,
  uploadBytes,
  getDownloadURL,
  list,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  readonly storage = inject(Storage);

  readonly blogImagesResource = resource({
    loader: async () => {
      const results = await list(ref(this.storage, 'blog'), {
        maxResults: 1,
      });
      const downloadUrls = results.items.map(
        async (i) => await getDownloadURL(i),
      );
      return Promise.all(downloadUrls);
    },
  });

  uploadBlogImage(images: FileList) {
    for (let i = 0; i < images.length; i++) {
      const file = images.item(i);
      if (file) {
        const storageRef = ref(this.storage, `blog/${file.name}`);
        uploadBytes(storageRef, file);
      }
    }
  }
}
