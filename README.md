# proyecto_fsd4_2021

*/ Objetivo Etapa 1

Se trata de una web de seguimiento de precio. Cargamos un producto de la página web de https://laaca.com.uy (nombre personalizado, precio, primer foto, link, precio minimo)

Luego tenemos varios "proveedores" de precios, para cada proveedor defininos; Nombre proveedor Link producto precio estado (en stock, sin stock) Se pueden definir hasta 5 proveedores de precio para comparar (uno va a ser ML)

En la pantalla de inicio se mostraran los productos de a un fila por producto, con una ultima celda que defina quien es el precio mas barato.

Objetivo Etapa 2

En la etapa 2 se trata de automatizar los precios en la web de Laaca utilziando la API de woocommerce para que en funcion del precio del cada producto busque el mas barato, en funcion de quien es el mas barato toma las siguientes decisiones;

Cond. 1

Precio Laaca es el menor de todos

En este caso se fija si la diferencia es mas del 2% con el segundo puesto, si es mas del 2% actualiza (subiendo) el precio de Laaca a un 2% menos que el 2do mejor precio.

Cond. 2

Precio Laaca menor pero menos de 2% que el segundo.

En este caso modifica el precio a un 2% del segundo puesto.

Cond. 3

Precio Laaca superior al menor precio (precio ganador)

En este caso se fija el menor precio y baja el precio de Laaca hasta un 2% del mejor precio, pero nunca baja mas del precio minimo definido para ese producto.

La comprobacion y correccion se ejecuta cada 1hr (es configurable el lapso de actualizacion)

Los proveedores cuyo precio no pueda ser actualizado cambian el estilo de sus datos colocando en color rojo el texto, se utiliza igual el ultimo valor de precio guardado.

Para las pruebas vamos a utilizar el sitio; https://laaca.com.uy/test_int/



Clave del cliente; ck_0f0188aae6cb1c62932268695191615ac0ac4378
Clave secreta de cliente; cs_827e972257ecf49e5fb22901340111b1084a86dd

Nota: las claves son de lectura actualmente. */
