# Calculadora Animada

Esta **calculadora web** es un proyecto interactivo que combina **HTML**, **CSS** y **JavaScript** con múltiples animaciones y mejoras de experiencia de usuario:

* **Auto‑ajuste de fuente** para expresiones largas
* **Operadores voladores** (slide‑in) al pulsar un operador
* **Partículas de brillo** (sparkles) al mostrar un resultado
* **Silhouettes geométricas en movimiento** de fondo
* **Confinçăo de decimales** y manejo de errores
* **Soporte de teclado** completo (números, operadores, Enter, Backspace, C)

---

## 📁 Estructura del proyecto

```bash
Calculadora/
├── index.html    # Interfaz y lógica embebida
├── style.css     # (Opcional) Estilos separados
├── script.js     # (Opcional) Lógica JavaScript separada
└── README.md     # Documentación del proyecto
```

---

## 🛠️ Tecnologías

* **HTML5**: Marcado semántico
* **CSS3**: Variables, grid, animaciones y transformaciones
* **JavaScript (Vanilla)**: Lógica de cálculo, detección de teclado y creación dinámica de elementos

---

## 🚀 Instalación y uso local

1. Clona el repositorio:

   ```bash
   ```

git clone [https://github.com/AndresArguelles23/calculadoraa.git](https://github.com/AndresArguelles23/calculadoraa.git)
cd calculadoraa

```
2. Abre `index.html` en tu navegador (doble clic o arrastrar sobre la ventana).  
3. ¡Listo! Usa la calculadora tanto con clics como con el teclado.

---

## 🌐 Despliegue (GitHub Pages)

La aplicación está publicada automáticamente tras cada `git push` a la rama `main`.  
URL de producción: [https://AndresArguelles23.github.io/calculadoraa/](https://AndresArguelles23.github.io/calculadoraa/)

---

## 📋 Características

| Funcionalidad            | Descripción                                              |
|--------------------------|----------------------------------------------------------|
| Cálculos dinámicos       | Manejo de `+ - × ÷`, punto decimal y prioridad básica    |
| Limite de decimales      | Máximo 6 decimales y recorte de ceros finales            |
| Animaciones              | Pop‑in, fly‑in operadores, sparkles y siluetas geométricas |
| Auto‑ajuste de texto     | Resize dinámico para expresiones largas                  |
| Soporte teclado          | Números, operadores, Enter (=), Backspace, C (clear)     |
| Gestión de errores       | Shake y mensaje `Error` para expresiones inválidas       |

---

## 📝 Cómo contribuir

1. Haz un `fork` del proyecto.  
2. Crea una rama de característica: `git checkout -b feature/nombre-funcion`.  
3. Realiza tus cambios y haz commit con mensajes descriptivos.  
4. Sube tu rama: `git push origin feature/nombre-funcion`.  
5. Abre un Pull Request describiendo tu aporte.

---

## 🔧 Personalización

- Para **ajustar la paleta** cambia las variables CSS en `:root`.  
- Para **añadir más siluetas** duplica las clases `.shapeX` en `#bg-shapes` y define sus animaciones.  

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Revisa el archivo `LICENSE` para más detalles.

---

*¡Gracias por probar esta calculadora animada!*

```
