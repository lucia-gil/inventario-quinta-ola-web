# Mapa de Navegación del Sistema

Inventario Quinta Ola – Entregable 2 (HTML)

## 1. Flujo General del Sistema

El sistema inicia en la pantalla de autenticación y, según el rol del usuario, redirige a diferentes módulos funcionales.

Login → (según rol) → 
  - Solicitante → Catálogo
  - Coordinador → Bandeja de Aprobación
  - Encargado → Despacho
  - SuperAdmin → Dashboard

## 2. Módulo de Autenticación
Login → Registro
Registro → Login
Login → Catálogo (simulación actual)

Descripción:

El usuario puede iniciar sesión o registrarse.
Tras el registro, se redirige nuevamente al login.
El login redirige a la siguiente vista (simulada según flujo).

## 3. Flujo del Solicitante
Catálogo → Detalle de Material (modal)
Catálogo → Carrito
Carrito → (simulación de envío) → Historial
Historial → Detalle de Solicitud

Descripción:

El usuario visualiza materiales en el catálogo.
Puede ver el detalle de cada material.
Agrega productos al carrito.
Envía una solicitud.
Puede revisar el historial y el detalle de sus solicitudes.

## 4. Flujo de Aprobación (Coordinador)
Bandeja de Solicitudes → Detalle de Solicitud
Bandeja → Aprobar
Bandeja → Rechazar → Modal de Rechazo
Modal de Rechazo → Bandeja
Historial → Detalle de Solicitud

Descripción:

El coordinador visualiza solicitudes pendientes.
Puede aprobar o rechazar solicitudes.
Si rechaza, debe ingresar un motivo obligatorio.
Puede revisar historial y trazabilidad.

## 5. Flujo de Inventario (Admin / Encargado)
Inventario → Nueva Entrada
Inventario → (gestión visual)
Despacho → Marcar como Entregado

Descripción:

Se gestiona el stock de materiales.
Se registran nuevas entradas.
Se visualizan solicitudes aprobadas en despacho.
Se marcan como entregadas.

## 6. Flujo de Administración
Dashboard SuperAdmin → Cambio de Contraseña (simulado)
Dashboard → Reportes
Reportes → Exportar (simulado)

Descripción:

El SuperAdmin visualiza métricas del sistema.
Puede acceder a reportes.
Se simula exportación de datos.

## 7. Elementos Globales (Disponibles en varias pantallas)
Navbar → Notificaciones (dropdown)
Navbar → Perfil de Usuario
Perfil → Cambio de Contraseña

Descripción:

La barra de navegación permite acceso rápido a funcionalidades globales.
Las notificaciones muestran eventos del sistema.
El perfil permite visualizar información del usuario.

## 8. Consideraciones de Navegación
La navegación se implementa mediante enlaces HTML y redirecciones en JavaScript.
No existe backend en esta etapa, por lo que los flujos son simulados.
Las acciones como “aprobar”, “rechazar” o “enviar solicitud” no persisten datos, pero reflejan el comportamiento esperado del sistema.
Se prioriza la claridad del flujo y la experiencia de usuario.

## 9. Resumen del Flujo
'''
Login
│
├── Registro
│
├── Solicitante → Catálogo → Carrito → Historial → Detalle
│
├── Coordinador → Bandeja → (Aprobar / Rechazar) → Historial
│
├── Encargado → Despacho
│
└── SuperAdmin → Dashboard → Reportes
'''
