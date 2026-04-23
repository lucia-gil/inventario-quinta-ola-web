# Proyecto de iweb (Inventario)
![pagina de dashboard](/img/pagina-dashboard.png)
![pagina de analisis](/img/pagina-analisis.png)

# Tutorial ultra básico (abrir el projecto)

## 0. Instala node desde
https://nodejs.org/en/download

## 1. Entra al proyecto
```bash id="s1"
cd mi-proyecto
```
## 2. Instala y corre la App
Corran este comando solo una vez.
```bash id="s2"
npm install
```
Ejecuten con este otro, cada vez que quieran verlo.
```bash id="s3"
npm run dev
```
Abran el link en un  navegador.

# Estructura

Para que no se les complique. Todos los html están en el directorio de pages/ y el código en src/

1. Hay un layout.ts script que genera la barra de la izquierda para casi todas las paginas

2. No se usa css, se usa tailwinds como wrapper, nos podemos complicar mas a futuro, pero esto es para iterar rápido.

3. Solo hay un script que se ve más complicado que los demás, es el de *analytics.ts*, este sirve para hacer las gráficas (solo son una idea de como podremos presentar la data al final).

4. Si usan el link, se van a dar cuenta que el index.html presenta links a todas las ventanas (esto es por facilidad), pero obviamente asi no se va a ver la pagina.
![index links](/img/ventanda_acceso.png)