import VueloVisitor from "./vueloVisitor.js"; // importación del visitor generado automáticamente

class CustomVueloVisitor extends VueloVisitor {
    // Puedes sobreescribir métodos si lo deseas
    // Por ejemplo:
    visitVuelo(ctx) {
        console.log("Visitando un vuelo");
        return this.visitChildren(ctx);
    }
}

export default CustomVueloVisitor;
