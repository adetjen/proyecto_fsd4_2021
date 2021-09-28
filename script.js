const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: "https://laaca.com.uy/test_int", // sitio copia, solo lectura
  consumerKey: "ck_0f0188aae6cb1c62932268695191615ac0ac4378",
  consumerSecret: "cs_827e972257ecf49e5fb22901340111b1084a86dd",
  version: "wc/v3"
});

// Listado de productos recibidos de la web
api.get("products", {
    per_page: 20, // 20 productos por pagina
    status: 'publish',  // solo los que estan activos en la web
    
  })
    .then((response) => {
      // Successful request
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);
      console.log("Response Data:", response.data); // acá es donde están los datos
      console.log("Total of pages:", response.headers['x-wp-totalpages']);
      console.log("Total of items:", response.headers['x-wp-total']);
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });