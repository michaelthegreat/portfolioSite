import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Browser window', {
  providedIn: 'root',
  factory: () => window
});

export const DOCUMENT = new InjectionToken<Document>('Browser document', {
  providedIn: 'root',
  factory: () => document
});

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});
