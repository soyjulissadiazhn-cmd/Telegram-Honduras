/**
 * Telegram Hub Honduras - Módulo Lógico Unificado
 * Configuración Estática para GitHub Pages bajo especificaciones corporativas.
 */

// ============================================================================
// 1. CONFIGURACIÓN Y DECLARACIÓN DE DATOS (44 CANALES ASIGNADOS)
// ============================================================================
const ENLACE_DESBLOQUEAR_GLOBAL = "https://unlockt.me/v/947a74b739";
const IMAGEN_FALLBACK_LOCAL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'><rect width='100%' height='100%' fill='%23141620'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%239ca3af'>Imagen no disponible</text></svg>";

const CANALES_DATOS = [
  { "id": 1, "nombre": "Brisna Reyes", "popular": true, "new": false, "imagen": "1H4k6rbM3B1BWb4FI6ZlpZbfUB-0Xg3v_", "enlace": "https://t.me/+C2dX4D28U244ZDZh" },
  { "id": 2, "nombre": "Kensy Solis", "popular": true, "new": false, "imagen": "1CHWs_2JZICXvnYMg8kozn4PFdR8e0Q3b", "enlace": "https://t.me/+rtSZIUKSkVBlNzIx" },
  { "id": 3, "nombre": "Valeria Aguilar", "popular": true, "new": false, "imagen": "1NwgfTAi0IvHpOqKSgpMFre9T_RfTB-Y3", "enlace": "https://t.me/+A0xn0NVjVuRjNjYx" },
  { "id": 4, "nombre": "Desire Diaz", "popular": true, "new": false, "imagen": "1B1-jKbJcO-9jvzU6_yEUrXiBhK0k3908", "enlace": "https://t.me/+MmIkwb1PoMk0Nzgx" },
  { "id": 5, "nombre": "Step Reyes", "popular": true, "new": false, "imagen": "1J6yXiUwuRxJWkNTk3cNp2VuMVqf1PpvE", "enlace": "https://t.me/+H_am9c5lam00ZDgx" },
  { "id": 6, "nombre": "La Niche", "popular": true, "new": false, "imagen": "1Pm-35B2KPfvdonKcCuYqdnQ9naI74kJ0", "enlace": "https://t.me/+SrhaczXTjJs2ZmFh" },
  { "id": 7, "nombre": "Jelen Santos", "popular": true, "new": false, "imagen": "11qgUGCUEfQX2U3cbTn4tq7bQxgRD7VbB", "enlace": "https://t.me/+0EZ6euY5wYE2MWQx" },
  { "id": 8, "nombre": "Meylin Cardenas", "popular": true, "new": false, "imagen": "1emzU7q1hYpqorUFWMwkHoThowqICXWB0", "enlace": "https://t.me/+2P1Wb7MxgMxlNzIx" },
  { "id": 9, "nombre": "Mary Guerra", "popular": true, "new": false, "imagen": "13Xk1eyiBFz1XoEFi3rIFo93c0p6NITuQ", "enlace": "https://t.me/+fo_lHhph4iRmYzMx" },
  { "id": 10, "nombre": "Jassmin Abrego", "popular": true, "new": false, "imagen": "1WeaWaC00h4m6pIWVhxvIxaHNKYGB5o7L", "enlace": "https://t.me/+k_FlZQM4ZQA4MjQx" },
  { "id": 11, "nombre": "Zamy Gaibor", "popular": true, "new": false, "imagen": "1c-pYQNWVhqv--zFwerf3_GSE6cnJEBF7", "enlace": "https://t.me/+2xvJ4qhEhwpjMWMx" },
  { "id": 12, "nombre": "Lopez Herrera", "popular": true, "new": false, "imagen": "19QqKty0QXpVMdI0jnTmXeBwipMvg16Y1", "enlace": "https://t.me/+U95RBZL1x5wxMmYx" },
  { "id": 13, "nombre": "Yanny Fonseca", "popular": true, "new": false, "imagen": "19KDhiJ7SrxmYggwQ8I8Gc9VolENR-Ub5", "enlace": "https://t.me/+fX9BmUO3vL00YTMx" },
  { "id": 14, "nombre": "Sofia Pineda", "popular": true, "new": false, "imagen": "1wM0RIRLY_BidL2F00X1X-wQ6STCabNh4", "enlace": "https://t.me/+WcHgGCPPa4gyY2Q5" },
  { "id": 15, "nombre": "Mia Millón", "popular": true, "new": false, "imagen": "1iGmGuOg30ocAzoauMusUGLkYShtFSiql", "enlace": "https://t.me/+1blGKmu2rLo3N2Vh" },
  { "id": 16, "nombre": "Mi Flaca", "popular": true, "new": false, "imagen": "1cigASuODbF6M-rcao8q8iFef9BDO9pPQ", "enlace": "https://t.me/+Lrd-I_FoJPEzMjIx" },
  { "id": 17, "nombre": "Vanessa Barahona", "popular": true, "new": false, "imagen": "1086LH_gBxbkhYJ96II7M5D7qgyxJkEQp", "enlace": "https://t.me/+Z0-IqDIG3gBlMGUx" },
  { "id": 18, "nombre": "Sindy Lopez", "popular": true, "new": false, "imagen": "1-a07h8pjZ_U-G_Uw3koNRPuIUDLckpCu", "enlace": "https://t.me/+A6hV7VDZ4hJhZGEx" },
  { "id": 19, "nombre": "Nala Rodríguez", "popular": true, "new": false, "imagen": "1EFlCzT8nmNDNcA9k901fSDMYu1cL9VtZ", "enlace": "https://t.me/+uKhpzIQ4IjFjZDgx" },
  { "id": 20, "nombre": "Gabriela Rivas", "popular": true, "new": false, "imagen": "1qMhCK5xXmsXQfXtR0-_Bosjj5qIgzlAR", "enlace": "https://t.me/+8fTN-OJqrgYwNmRh" },
  { "id": 21, "nombre": "Rubi Sandoval", "popular": true, "new": false, "imagen": "1q4m85443OI_4UjFTF59Zmn4ppDh3Znsg", "enlace": "https://t.me/+enJWVflmbg0yMzUx" },
  { "id": 22, "nombre": "Daniella Cadenas", "popular": true, "new": false, "imagen": "1ILtQqboySGQtdiyxdhcOElINnmXY4lY-", "enlace": "https://t.me/+b58aNVWYD4djOGYx" },
  { "id": 23, "nombre": "Luz Rodriguez", "popular": true, "new": false, "imagen": "1-2CGbPsqVFZZui3_R2qrOu4rJCYykxar", "enlace": "https://t.me/+ptgVgP-KahkyNGIx" },
  { "id": 24, "nombre": "Yaritza Lopez", "popular": true, "new": false, "imagen": "1l3idivIqE8UcwXaQiL7MFfx6w6fepDjN", "enlace": "https://t.me/+O2Wn0aKMC8MzZWEx" },
  { "id": 25, "nombre": "Desire Garcia", "popular": true, "new": false, "imagen": "1nyMPPPLuc5m9ZWaAH8JO3JP0FMYcvnE2", "enlace": "https://t.me/+Pb8EX6-bmNRhMjcx" },
  { "id": 26, "nombre": "Majo Ramirez", "popular": true, "new": false, "imagen": "1miHGg6iYw_S986RlMbC9r3VpBd-bMzGY", "enlace": "https://t.me/+yyO2gTTDgWU1NDEx" },
  { "id": 27, "nombre": "La Queso", "popular": true, "new": false, "imagen": "1EPng-lXa4QxPydW9s9Q18ptJatbJDhZL", "enlace": "https://t.me/+h07etPuE9poxMjAx" },
  { "id": 28, "nombre": "Jacky Najera", "popular": true, "new": false, "imagen": "1ym3eXcZv2MJ3hKw4O-hjHKvKUtLN8men", "enlace": "https://t.me/+3g1sEONf2jozODlh" },
  { "id": 29, "nombre": "Andy Flores", "popular": true, "new": false, "imagen": "1dW53LhEh5FsiAHakEWsHVIxLRE6N7suZ", "enlace": "https://t.me/+Ys4csoNCypU3MWMx" },
  { "id": 30, "nombre": "Vanessa Yuri", "popular": true, "new": false, "imagen": "1XAMESKYx8FyuUCztcC5J1H303036lLn8", "enlace": "https://t.me/+2WVL_7Q4igEzY2Qx" },
  { "id": 31, "nombre": "La Condesa", "popular": true, "new": false, "imagen": "1FB5WlXNERO1V9k0W9XTlH4eMw6g7BNUW", "enlace": "https://t.me/+g86KLMXR7As5MThh" },
  { "id": 32, "nombre": "Cesia Díaz", "popular": true, "new": false, "imagen": "1g5_Y8jwAlf8RG7ozH5KliEwyQsNe9yN2", "enlace": "https://t.me/+8PH4QKXiA_o0MWYx" },
  { "id": 33, "nombre": "Soy Nayensy", "popular": true, "new": false, "imagen": "1NgRpTkK7DXYjnYreR2YEMMFEHMx3d54K", "enlace": "https://t.me/+txryRi0jpUdmNjhh" },
  { "id": 34, "nombre": "Dany Villalobos", "popular": false, "new": true, "imagen": "1eQX38li-H571THJIKBy-N3ZCMPFpA4aq", "enlace": "https://t.me/+E5zPP4HjaDExYmMx" },
  { "id": 35, "nombre": "Soy Loruga", "popular": false, "new": true, "imagen": "1OHZ5h1uoxCE55A2vPR3rXb_3GfJDsQHU", "enlace": "https://t.me/+A3yqEaK9tZdmNWZh" },
  { "id": 36, "nombre": "Fanny Cruz", "popular": false, "new": true, "imagen": "15KqrjOcwY3LGHzvVhB3_lq4xQKiIPoJG", "enlace": "https://t.me/+sjPLsn8kedwzNjBh" },
  { "id": 37, "nombre": "Sarca Biker", "popular": false, "new": true, "imagen": "16jYVYG-h2nYgG0PH72TNzTd5iMHTpI7f", "enlace": "https://t.me/+ylPRFibcisRhNzJh" },
  { "id": 38, "nombre": "Dary Castañeda", "popular": false, "new": true, "imagen": "18BVaF822mSTPN4qlYdwrmDNMI0IwwoGp", "enlace": "https://t.me/+Oh4JUJ1tvks3YjUx" },
  { "id": 39, "nombre": "Misaela Castejón", "popular": false, "new": true, "imagen": "1Nmq01LiNjmK4ww0GO1K2T5LH2h14t5UP", "enlace": "https://t.me/+l2iw7ku8t7BkY2Nh" },
  { "id": 40, "nombre": "Katherin Cota", "popular": false, "new": true, "imagen": "1jVYopdOgWxmPAfFj321VhJ0rCtqvCgsj", "enlace": "https://t.me/+2qFAw0Noo_VlNjIx" },
  { "id": 41, "nombre": "Angie Alvarado", "popular": false, "new": true, "imagen": "1p-a60wA0GIF9sp6-zGrgcIeXqRxZ6Wt7", "enlace": "https://t.me/+0bsZh4s-0W4wOTgx" },
  { "id": 42, "nombre": "Aline Fonseca", "popular": false, "new": true, "imagen": "13cHWpNlcBStkLGPcJNsGn0vG1tXpXvS1", "enlace": "https://t.me/+hXHxTt_OsiFhNzYx" },
  { "id": 43, "nombre": "Ximena Alcalá", "popular": false, "new": true, "imagen": "1WoLgPaO2ruhRuRtHQrv6tWIWe1vAfSem", "enlace": "https://t.me/+fPbKcMqMQsM1MDEx" },
  { "id": 44, "nombre": "Lizeth Rodriguez", "popular": false, "new": true, "imagen": "1vO0FAinKrUUcrmcn0Qzwk7VdKL1u0Nbr", "enlace": "https://t.me/+ODIHEY8jnDZhM2Jh" }
];

// Base de Datos Estática de Textos Legales Corporativos para los Modales del Footer
const TEXTOS_LEGALES = {
  terminos: `<h5>1. Aceptación de los Términos</h5><p>Al acceder y utilizar este directorio informativo, usted acepta cumplir con las presentes condiciones de servicio de forma vinculante. Si no está de acuerdo con alguna cláusula, le solicitamos que abandone el sitio de forma inmediata.</p><h5>2. Naturaleza del Servicio</h5><p>Este sitio web funciona de forma única como un índice o catálogo informativo de enlaces públicos disponibles en internet. No somos propietarios de los contenidos finales ni ejercemos control editorial sobre las comunidades enlazadas.</p><h5>3. Responsabilidad del Usuario</h5><p>El uso de los enlaces es responsabilidad exclusiva del visitante. El usuario declara conocer y asumir las regulaciones que su respectiva jurisdicción nacional imponga sobre la navegación en canales de comunicación externos.</p>`,
  privacidad: `<h5>1. Recopilación de Datos</h5><p>Este sitio web está diseñado bajo una arquitectura de total privacidad. No recopilamos datos personales, direcciones de correo electrónico, nombres ni registros de identidad mediante formularios automatizados en nuestros servidores.</p><h5>2. Almacenamiento Local (Cookies/LocalStorage)</h5><p>Utilizamos la propiedad técnica localStorage de su propio navegador para recordar de forma exclusiva si usted ya ha confirmado su mayoría de edad en sesiones anteriores, evitando sobrecargas innecesarias de avisos restrictivos.</p><h5>3. Enlaces a Terceros</h5><p>Al hacer clic en los accesos informativos, usted es redirigido a servicios externos (Telegram, Unlockt). Dichas plataformas cuentan con sus propias políticas de privacidad, ajenas a este directorio.</p>`,
  mayoridad: `<h5>Aviso de Restricción de Contenidos Obligatorio (18+)</h5><p>Los canales indexados en este directorio web están destinados y dirigidos exclusivamente a un público adulto y con plena capacidad civil en su territorio.</p><p>Queda terminantemente prohibido el acceso o visualización del sitio a personas menores de 18 años. Este portal mantiene una política de tolerancia cero ante cualquier material que involucre de forma directa o indirecta a menores de edad, implementando de forma inmediata medidas cautelares de eliminación ante cualquier reporte verificado de infracción.</p>`,
  reportar: `<h5>Canales de Reporte de Contenido Inapropiado</h5><p>Si usted localiza un enlace dañado, caído o considera que alguno de los canales indexados está difundiendo material que infringe las normativas legales vigentes, puede tramitar un reporte preventivo indicando el nombre exacto del perfil.</p><p>Para gestionar una revisión manual por parte de nuestro equipo, envíe los detalles específicos a través de los canales de comunicación detallados en la pestaña de Contacto. Las auditorías se gestionan en un plazo máximo de 48 horas hábiles.</p>`,
  eliminacion: `<h5>Procedimiento DMCA / Retirada de Perfiles e Imágenes</h5><p>Respetamos íntegramente los derechos de autor y las políticas de propiedad de los creadores de contenido individuales.</p><p>Cualquier titular de derechos o representante acreditado puede solicitar formalmente la retirada inmediata de una fotografía de portada, enlace de redirección o perfil completo del directorio. Para procesar la solicitud de exclusión, envíe la acreditación correspondiente mediante la sección de Contacto.</p>`,
  contacto: `<h5>Canal de Soporte de la Plataforma</h5><p>Para consultas administrativas, reportes de enlaces fuera de servicio o solicitudes de exclusión de perfiles, puede contactarnos mediante el canal oficial de atención corporativa:</p><p><strong>Soporte Técnico Especializado:</strong> Mediante la infraestructura de comunicación de nuestro canal raíz de Telegram Honduras corporativo asociado al proyecto estático.</p>`
};

// ============================================================================
// 2. ESTADO GENERAL DEL SISTEMA (FILTROS Y BUSQUEDA)
// ============================================================================
let categoriaActiva = "todas";
let busquedaFiltroTexto = "";
let canalIdSeleccionadoModal = null;
let debounceTimerId = null;

// ============================================================================
// 3. INICIALIZACIÓN GLOBAL
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
    establecerAñoFooter();
    verificarControlEdadSesion();
    vincularEventosInterfaz();
    ejecutarCargaConSkeleton();
});

function establecerAñoFooter() {
    const contenedorAño = document.getElementById("auto-year");
    if (contenedorAño) {
        contenedorAño.textContent = new Date().getFullYear();
    }
}

// ============================================================================
// 4. CONFIRMACIÓN DE MAYORÍA DE EDAD (AGE GATE VIA LOCALSTORAGE)
// ============================================================================
function verificarControlEdadSesion() {
    const ageGateModal = document.getElementById("modal-interceptor-edad");
    if (!ageGateModal) return;

    const esMayorEdadConfirmado = localStorage.getItem("age_verified_hn");
    if (esMayorEdadConfirmado === "true") {
        ageGateModal.classList.add("oculto");
        ageGateModal.setAttribute("aria-hidden", "true");
    } else {
        ageGateModal.classList.remove("oculto");
        ageGateModal.setAttribute("aria-hidden", "false");
    }
}

// ============================================================================
// 5. VINCULACIÓN DE EVENTOS DE INTERFAZ Y DEBOUNCE
// ============================================================================
function vincularEventosInterfaz() {
    // Botón de Scroll Smooth en el Hero
    const btnHeroScroll = document.getElementById("btn-scroll-canales");
    const destinoSeccion = document.getElementById("seccion-directorio");
    if (btnHeroScroll && destinoSeccion) {
        btnHeroScroll.addEventListener("click", () => {
            destinoSeccion.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Buscador Input con Debounce de 200ms
    const inputBuscador = document.getElementById("buscador-input");
    const btnClearSearchInline = document.getElementById("btn-clear-search-inline");
    
    if (inputBuscador) {
        inputBuscador.addEventListener("input", (e) => {
            clearTimeout(debounceTimerId);
            busquedaFiltroTexto = e.target.value.toLowerCase().trim();
            
            // Control visual del botón limpiar dentro del input
            if (busquedaFiltroTexto.length > 0) {
                btnClearSearchInline?.classList.remove("oculto");
            } else {
                btnClearSearchInline?.classList.add("oculto");
            }

            debounceTimerId = setTimeout(() => {
                filtrarYProcesarListado();
            }, 200);
        });
    }

    // Botón interno X para limpiar el input de búsqueda rápida
    if (btnClearSearchInline && inputBuscador) {
        btnClearSearchInline.addEventListener("click", () => {
            inputBuscador.value = "";
            busquedaFiltroTexto = "";
            btnClearSearchInline.classList.add("oculto");
            filtrarYProcesarListado();
            inputBuscador.focus();
        });
    }

    // Filtros de Categorías
    const botonesCategorias = document.querySelectorAll("#contenedor-botones-categorias .btn-categoria");
    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
            botonesCategorias.forEach(b => b.classList.remove("activo"));
            const btnClickeado = e.currentTarget;
            btnClickeado.classList.add("activo");
            categoriaActiva = btnClickeado.getAttribute("data-categoria");
            filtrarYProcesarListado();
        });
    });

    // Botón de Estado Vacío (Limpiar Búsqueda)
    const btnResetVacio = document.getElementById("btn-reset-vacio");
    if (btnResetVacio && inputBuscador) {
        btnResetVacio.addEventListener("click", () => {
            inputBuscador.value = "";
            busquedaFiltroTexto = "";
            btnClearSearchInline?.classList.add("oculto");
            filtrarYProcesarListado();
            inputBuscador.focus();
        });
    }

    // Eventos del Modal de Desbloqueo
    document.getElementById("btn-modal-cancelar-desbloqueo")?.addEventListener("click", cerrarModalDesbloqueoCanal);
    document.getElementById("btn-modal-confirmar-desbloqueo")?.addEventListener("click", ejecutarRedireccionExternaConfirmada);
    
    // Cierre del modal de textos legales del footer
    document.getElementById("btn-modal-cerrar-legal")?.addEventListener("click", () => {
        document.getElementById("modal-textos-legales-footer")?.classList.add("oculto");
    });

    // Vinculación de Enlaces Legales del Footer
    const botonesFooterLegales = document.querySelectorAll(".btn-footer-link");
    botonesFooterLegales.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const claveLegal = e.currentTarget.getAttribute("data-modal-legal");
            abrirModalTextoLegalFooter(claveLegal);
        });
    });

    // Controladores del Interceptor de Edad (Age Gate)
    document.getElementById("btn-age-gate-confirmar")?.addEventListener("click", () => {
        localStorage.setItem("age_verified_hn", "true");
        verificarControlEdadSesion();
    });

    document.getElementById("btn-age-gate-salir")?.addEventListener("click", () => {
        // Redirección segura de salida o vaciado de pantalla por protección
        window.location.href = "https://www.google.com";
    });
}

// ============================================================================
// 6. RENDERIZADO DE SKELETONS DE CARGA INICIAL
// ============================================================================
function ejecutarCargaConSkeleton() {
    const contenedorGrid = document.getElementById("grid-canales");
    if (!contenedorGrid) return;

    contenedorGrid.innerHTML = "";
    // Inyectamos 8 tarjetas skeleton de forma preventiva para la experiencia visual inicial
    for (let i = 0; i < 8; i++) {
        const skeletonCard = document.createElement("div");
        skeletonCard.className = "skeleton-card";
        skeletonCard.innerHTML = `
            <div class="skeleton-media"></div>
            <div class="skeleton-text-block">
                <div class="skeleton-line title"></div>
                <div class="skeleton-line desc"></div>
                <div class="skeleton-line desc" style="width: 70%;"></div>
                <div class="skeleton-line btn"></div>
            </div>
        `;
        contenedorGrid.appendChild(skeletonCard);
    }

    // Simulación de carga asíncrona de base de datos para dar paso a la renderización limpia
    setTimeout(() => {
        filtrarYProcesarListado();
    }, 900);
}

// ============================================================================
// 7. FILTRADO, LÓGICA Y MANEJO DE ERRORES (TRY...CATCH)
// ============================================================================
function filtrarYProcesarListado() {
    try {
        let canalesFiltrados = CANALES_DATOS.filter(canal => {
            // Match del Buscador (Ignora Case-Sensitivity)
            const coincideBuscador = canal.nombre.toLowerCase().includes(busquedaFiltroTexto);
            
            // Match de las Categorías Solicitadas
            let coincideCategoria = false;
            if (categoriaActiva === "todas") {
                coincideCategoria = true;
            } else if (categoriaActiva === "mas-buscadas") {
                coincideCategoria = canal.popular === true;
            } else if (categoriaActiva === "nuevas") {
                coincideCategoria = canal.new === true;
            }
            
            return coincideBuscador && coincideCategoria;
        });

        renderizarTarjetasCanalesReales(canalesFiltrados);
    } catch (error) {
        mostrarEstadoErrorSistema();
    }
}

// ============================================================================
// 8. RENDERIZADO EFECTIVO DE TARJETAS DE CANALES
// ============================================================================
function renderizarTarjetasCanalesReales(listadoCanales) {
    const contenedorGrid = document.getElementById("grid-canales");
    const contadorCanales = document.getElementById("contador-canales");
    const estadoVacio = document.getElementById("estado-vacio");
    
    if (!contenedorGrid) return;
    contenedorGrid.innerHTML = "";

    // Gestión del Estado Vacío Dinámico
    if (listadoCanales.length === 0) {
        if (estadoVacio) {
            const tituloVacio = document.getElementById("estado-vacio-titulo");
            const textoVacio = document.getElementById("estado-vacio-texto");
            const btnVacio = document.getElementById("btn-reset-vacio");
            
            if (busquedaFiltroTexto.length > 0) {
                tituloVacio.textContent = "No encontramos canales que coincidan con tu búsqueda.";
                textoVacio.textContent = "Prueba escribiendo el nombre de otra chica o seleccionando otra categoría.";
                btnVacio.textContent = "Limpiar búsqueda";
            } else {
                tituloVacio.textContent = "Todavía no hay canales disponibles en esta categoría.";
                textoVacio.textContent = "Prueba regresando a la pestaña anterior para ver los perfiles activos.";
                btnVacio.textContent = "Ver todos los canales";
            }
            estadoVacio.classList.remove("oculto");
        }
        if (contadorCanales) contadorCanales.textContent = "0 canales disponibles.";
        return;
    } else {
        estadoVacio?.classList.add("oculto");
    }

    // Actualización del Contador Oficial
    if (contadorCanales) {
        contadorCanales.textContent = `${listadoCanales.length} ${listadoCanales.length === 1 ? 'canal disponible' : 'canales disponibles'} en este momento.`;
    }

    // Construcción del DOM para cada tarjeta de forma limpia
    listadoCanales.forEach(canal => {
        const urlFotoDirecta = `https://lh3.googleusercontent.com/d/${canal.imagen}=w500-h700-p`;
        
        const tarjetaElemento = document.createElement("article");
        tarjetaElemento.className = "tarjeta-canal";
        
        // Construcción estructurada de Distintivos de Categoría
        let htmlBadges = "";
        if (canal.popular) {
            htmlBadges += `<div class="badge-categoria badge-popular">MÁS BUSCADA 🔥</div>`;
        }
        if (canal.new) {
            htmlBadges += `<div class="badge-categoria badge-nuevo">NUEVA ⭐</div>`;
        }

        tarjetaElemento.innerHTML = `
            <div class="contenedor-foto">
                <img src="${urlFotoDirecta}" alt="Fotografía de Portada de ${canal.nombre}" loading="lazy" width="300" height="380" onerror="manejadorImagenRota(this)">
                <div class="wrapper-badges-tarjeta">${htmlBadges}</div>
            </div>
            <div class="info-cuerpo-tarjeta">
                <h2 class="titulo-canal">
                    ${canal.nombre}
                    <svg class="icono-verificado-titulo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00a2f2" aria-label="Perfil Verificado"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.6-5.2 6a1 1 0 0 1-1.5.1l-2.4-2.4a1 1 0 1 1 1.4-1.4l1.6 1.6 4.5-5.3a1 1 0 0 1 1.6 1.4z"/></svg>
                </h2>
                <div class="desc-canal">
                    <p class="texto-verificado">Verificado</p>
                    <p class="texto-aviso">Este es el último enlace de su contenido.</p>
                </div>
                <button type="button" class="btn-desbloquear-premium" data-canal-id="${canal.id}">
                    <i data-lucide="lock"></i> Desbloquear acceso
                </button>
            </div>
        `;
        contenedorGrid.appendChild(tarjetaElemento);
    });

    // Re-vincular los iconos de Lucide cargados asíncronamente en el nuevo DOM
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Vincular clics de botones unificados de desbloqueo
    contenedorGrid.querySelectorAll(".btn-desbloquear-premium").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idCanal = parseInt(e.currentTarget.getAttribute("data-canal-id"));
            abrirModalDesbloqueoCanal(idCanal);
        });
    });
}

// ============================================================================
// 9. RESTRICCIÓN Y SEGURIDAD CONTRA IMÁGENES ROTAS (FALLBACK AUTOMÁTICO)
// ============================================================================
function manejadorImagenRota(nodoImagen) {
    nodoImagen.onerror = null; // Corta bucle recursivo en caso de fallo crítico
    nodoImagen.src = IMAGEN_FALLBACK_LOCAL;
    nodoImagen.style.objectFit = "cover";
}

// ============================================================================
// 10. GESTIÓN DEL MODAL DE CONFIRMACIÓN DE DESBLOQUEO DE CANALES
// ============================================================================
function abrirModalDesbloqueoCanal(idCanal) {
    const objetoCanal = CANALES_DATOS.find(c => c.id === idCanal);
    if (!objetoCanal) return;

    canalIdSeleccionadoModal = idCanal;
    
    const labelNombreCanal = document.getElementById("dinamico-modal-canal-name");
    if (labelNombreCanal) {
        labelNombreCanal.textContent = objetoCanal.nombre;
    }

    const modalDesbloqueo = document.getElementById("modal-desbloqueo-canal");
    if (modalDesbloqueo) {
        modalDesbloqueo.classList.remove("oculto");
    }
}

function cerrarModalDesbloqueoCanal() {
    const modalDesbloqueo = document.getElementById("modal-desbloqueo-canal");
    if (modalDesbloqueo) {
        modalDesbloqueo.classList.add("oculto");
    }
    canalIdSeleccionadoModal = null;
}

function ejecutarRedireccionExternaConfirmada() {
    if (!canalIdSeleccionadoModal) return;
    
    const objetoCanal = CANALES_DATOS.find(c => c.id === canalIdSeleccionadoModal);
    cerrarModalDesbloqueoCanal();
    
    if (objetoCanal) {
        // Ejecución limpia abriendo de forma segura en una nueva pestaña del navegador
        window.open(ENLACE_DESBLOQUEAR_GLOBAL, "_blank", "noopener,noreferrer");
    }
}

// ============================================================================
// 11. GESTIÓN DE MODALES DE TEXTOS LEGALES DEL FOOTER
// ============================================================================
function abrirModalTextoLegalFooter(claveTextoLegal) {
    const contenedorModal = document.getElementById("modal-textos-legales-footer");
    const contenedorTitulo = document.getElementById("modal-titulo-legal");
    const contenedorCuerpo = document.getElementById("modal-cuerpo-legal-dinamico");

    if (!contenedorModal || !contenedorCuerpo || !contenedorTitulo) return;

    // Capitalización limpia del nombre clave para el encabezado del modal
    const titulosMap = {
        terminos: "Términos y condiciones",
        privacidad: "Política de privacidad",
        mayoridad: "Aviso para mayores de 18 años",
        reportar: "Reportar contenido",
        eliminacion: "Solicitar eliminación",
        contacto: "Contacto"
    };

    contenedorTitulo.textContent = titulosMap[claveTextoLegal] || "Información Legal";
    contenedorCuerpo.innerHTML = TEXTOS_LEGALES[claveTextoLegal] || "<p>Contenido legal no localizado en el repositorio estático.</p>";
    
    contenedorModal.classList.remove("oculto");
}

// ============================================================================
// 12. GESTIÓN DEL ESTADO DE ERROR DE CARGA (MANEJO DE EXCEPCIONES)
// ============================================================================
function mostrarEstadoErrorSistema() {
    const contenedorGrid = document.getElementById("grid-canales");
    const estadoVacio = document.getElementById("estado-vacio");
    const contadorCanales = document.getElementById("contador-canales");

    if (!contenedorGrid) return;
    contenedorGrid.innerHTML = "";
    
    if (contadorCanales) contadorCanales.textContent = "Error en el listado.";

    if (estadoVacio) {
        const tituloVacio = document.getElementById("estado-vacio-titulo");
        const textoVacio = document.getElementById("estado-vacio-texto");
        const btnVacio = document.getElementById("btn-reset-vacio");

        tituloVacio.textContent = "No pudimos cargar el listado en este momento.";
        textoVacio.textContent = "Por favor, verifica tu conexión a internet e inténtalo de nuevo.";
        btnVacio.textContent = "Intentar nuevamente";
        
        // Sobrescribir evento de clic temporalmente para actuar como botón de reintento directo
        btnVacio.onclick = function() {
            btnVacio.onclick = null; // Remover re-vinculación
            ejecutarCargaConSkeleton();
        };

        estadoVacio.classList.remove("oculto");
    }
}
