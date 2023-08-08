using System;
using System.IO;
using System.Net;
using System.Text;

namespace GeoLocation
{
    class Program
    {
        static void Main(string[] args)
        {
            string address = "1600 Amphitheatre Parkway, Mountain View, CA"; // Dirección a geolocalizar
            string apiKey = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"; // Inserta tu propia API Key de Google Geocoding

            // Construir la URL de la API de Geocoding de Google
            string apiUrl = $"https://maps.googleapis.com/maps/api/geocode/json?address={Uri.EscapeDataString(address)}&key={apiKey}";

            // Realizar la solicitud HTTP para obtener los datos de geolocalización
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(apiUrl);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            string responseBody = string.Empty;

            using (Stream responseStream = response.GetResponseStream())
            {
                if (responseStream != null)
                {
                    using (StreamReader reader = new StreamReader(responseStream))
                    {
                        responseBody = reader.ReadToEnd();
                    }
                }
            }

            // Analizar la respuesta JSON de la API de Geocoding
            // Aquí puedes utilizar una librería JSON como Newtonsoft.Json para un análisis más completo
            // En este ejemplo, se utiliza un enfoque básico con cadenas de texto
            string latitude = string.Empty;
            string longitude = string.Empty;

            int latIndex = responseBody.IndexOf("\"lat\" : ");
            if (latIndex != -1)
            {
                int latStartIndex = latIndex + "\"lat\" : ".Length;
                int latEndIndex = responseBody.IndexOf(",", latStartIndex);
                latitude = responseBody.Substring(latStartIndex, latEndIndex - latStartIndex);
            }

            int lngIndex = responseBody.IndexOf("\"lng\" : ");
            if (lngIndex != -1)
            {
                int lngStartIndex = lngIndex + "\"lng\" : ".Length;
                int lngEndIndex = responseBody.IndexOf("}", lngStartIndex);
                longitude = responseBody.Substring(lngStartIndex, lngEndIndex - lngStartIndex);
            }

            // Crear una página HTML y mostrar las coordenadas geográficas
            string html = $@"
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Geolocalización de Google</title>
                </head>
                <body>
                    <h1>Geolocalización de Google</h1>
                    <p>Dirección: {address}</p>
                    <p>Latitud: {latitude}</p>
                    <p>Longitud: {longitude}</p>
                </body>
                </html>
            ";

            // Guardar la página HTML en un archivo
            File.WriteAllText("geolocation.html", html);

            // Abrir el archivo en el navegador web predeterminado
            System.Diagnostics.Process.Start("geolocation.html");
        }
    }
}
