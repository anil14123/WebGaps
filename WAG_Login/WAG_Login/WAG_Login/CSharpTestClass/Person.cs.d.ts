declare module server {
	interface Person {
		x: number;
	}
	interface ColorType {
		red: server.CustomType;
		green: server.CustomType;
		blue: server.CustomType;
	}
	interface CustomType {
		value: number;
	}
}
