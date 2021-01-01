import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    storageBucket: 'gs://yearbranding.appspot.com'
  });
}

export function getImageUrl(path: string): Promise<string> {
  return firebase.storage().ref(path).getDownloadURL()
}

export function yearPath(year: string): string {
  return `${year}/year.png`
}

export function monthPath(year: string, month: string): string {
  return `${year}/${month}.png`
}