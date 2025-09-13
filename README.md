# Palindrome Checker - FreeCodeCamp Project

Este proyecto es un **mini proyecto de FreeCodeCamp** dentro del curso *JavaScript Algorithms and Data Structures*.  
El objetivo es crear una aplicación que determine si una palabra o frase es un **palíndromo**, ignorando mayúsculas, espacios y caracteres no alfanuméricos.

---

## 🔹 Funcionalidades

1. **Verificar palíndromos**
   - Limpia el texto eliminando caracteres que no sean letras o números usando expresiones regulares.
   - Convierte todo a minúsculas para evitar errores por mayúsculas/minúsculas.
   - Compara la cadena limpia con su reversa para determinar si es palíndromo.

2. **Manejo de errores**
   - Si el input está vacío, se muestra una **alerta**: `"Please input a value"`.

3. **Mensajes claros**
   - Si es palíndromo:  
     `"race car is a palindrome"`
   - Si no lo es:  
     `"not a palindrome is not a palindrome"`

4. **Interacción con el DOM**
   - El resultado se muestra dinámicamente en un `<p>` con id `result`.
   - Se utiliza un botón con id `check-btn` para activar la verificación.

---

## 🔹 Tecnologías y conceptos utilizados

- **JavaScript**
  - Funciones (`isPalindrome`)
  - Condicionales (`if / else`)
  - Expresiones regulares (`/[^A-Za-z0-9]/g`)
  - Métodos de strings (`toLowerCase()`, `split()`, `reverse()`, `join()`)
  - Manipulación del DOM (`getElementById`, `addEventListener`)
  - Validación de input (`trim()` y verificación de vacío)
- **HTML/CSS**
  - Input, botón y contenedor de resultados
  - Diseño moderno usando **flexbox** y columnas
- **Buenas prácticas**
  - Código modular y reutilizable
  - Mensajes claros y dinámicos
  - Separación de estructura (HTML), estilos (CSS) y lógica (JS)

---