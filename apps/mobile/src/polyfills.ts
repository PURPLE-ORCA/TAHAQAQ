import "react-native-get-random-values";
import { Platform } from "react-native";

const globalScope: any = globalThis;

if (typeof globalScope.window === "undefined") {
  globalScope.window = globalScope;
}

if (typeof globalScope.window.addEventListener === "undefined") {
  globalScope.window.addEventListener = () => {};
}

if (typeof globalScope.window.removeEventListener === "undefined") {
  globalScope.window.removeEventListener = () => {};
}

if (typeof globalScope.window.location === "undefined") {
  globalScope.window.location = {
    protocol: "https:",
    host: "localhost",
    hostname: "localhost",
    href: "https://localhost",
    origin: "https://localhost",
    search: "",
  };
}

if (typeof globalScope.navigator === "undefined") {
  globalScope.navigator = {};
}

if (!globalScope.navigator.userAgent) {
  globalScope.navigator.userAgent = Platform.OS === "ios" ? "ios" : "android";
}
