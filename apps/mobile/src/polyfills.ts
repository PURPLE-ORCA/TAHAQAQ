import { Platform } from 'react-native';

const globalScope: any = globalThis;

if (typeof globalScope.window === 'undefined') {
  globalScope.window = globalScope;
}

if (typeof globalScope.window.addEventListener === 'undefined') {
  globalScope.window.addEventListener = () => {};
}

if (typeof globalScope.window.removeEventListener === 'undefined') {
  globalScope.window.removeEventListener = () => {};
}

if (typeof globalScope.window.location === 'undefined') {
  globalScope.window.location = {
    protocol: 'https:',
    host: 'localhost',
    hostname: 'localhost',
    href: 'https://localhost',
    origin: 'https://localhost',
    search: '',
  };
}

if (typeof globalScope.navigator === 'undefined') {
  globalScope.navigator = {};
}

if (!globalScope.navigator.userAgent) {
  globalScope.navigator.userAgent = Platform.OS === 'ios' ? 'ios' : 'android';
}

if (typeof globalScope.crypto === 'undefined') {
  globalScope.crypto = {
    getRandomValues(array: any) {
      for (let index = 0; index < array.length; index += 1) {
        array[index] = Math.floor(Math.random() * 256);
      }

      return array;
    },
  };
} else if (!globalScope.crypto.getRandomValues) {
  globalScope.crypto.getRandomValues = (array: any) => {
    for (let index = 0; index < array.length; index += 1) {
      array[index] = Math.floor(Math.random() * 256);
    }

    return array;
  };
}
