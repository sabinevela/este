<template>
  <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Formulario de Ejercicio de Derechos ARCO</title>
</head>
<body>
    <div id="app" class="container mt-5">
        <h2 class="text-center mb-4">Formulario de Ejercicio de Derechos ARCO</h2>

        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre Completo</label>
                <input type="text" class="form-control" id="nombre" v-model="form.nombre" required>
            </div>
            <div class="mb-3">
                <label for="cedula" class="form-label">Número de Cédula/Pasaporte</label>
                <input type="text" class="form-control" id="cedula" v-model="form.cedula" required>
            </div>
            <div class="mb-3">
                <label for="correo" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="correo" v-model="form.correo" required>
            </div>

            <div class="mb-3">
                <label for="telefono" class="form-label">Número de Teléfono</label>
                <input type="text" class="form-control" id="telefono" v-model="form.telefono" required>
            </div>

            <div class="mb-3">
                <label for="relacion" class="form-label">Relación con la Empresa</label>
                <select class="form-control" id="relacion" v-model="form.relacion" required>
                    <option value="" disabled>Seleccione una opción</option>
                    <option value="cliente">Cliente/Abonado</option>
                    <option value="interesado">Interesado</option>
                    <option value="colaborador">Colaborador</option>
                    <option value="ex_colaborador">Ex colaborador</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="form-label">Marque con una X (Solo una opción)</label>
                <div>
                    <input type="radio" id="cliente" v-model="form.relacionRadio" value="cliente">
                    <label for="cliente">Cliente/Abonado</label>
                </div>
                <div>
                    <input type="radio" id="interesado" v-model="form.relacionRadio" value="interesado">
                    <label for="interesado">Interesado</label>
                </div>
                <div>
                    <input type="radio" id="colaborador" v-model="form.relacionRadio" value="colaborador">
                    <label for="colaborador">Colaborador</label>
                </div>
                <div>
                    <input type="radio" id="ex_colaborador" v-model="form.relacionRadio" value="ex_colaborador">
                    <label for="ex_colaborador">Ex colaborador</label>
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label">Tipo de Solicitud (Marque con una X)</label>
                <div>
                    <input type="radio" id="acceso" v-model="form.tipoSolicitud" value="acceso">
                    <label for="acceso">Acceso: Solicito acceder a mis datos personales.</label>
                </div>
                <div>
                    <input type="radio" id="rectificacion" v-model="form.tipoSolicitud" value="rectificacion">
                    <label for="rectificacion">Rectificación: Solicito rectificar mis datos personales.</label>
                </div>
                <div>
                    <input type="radio" id="cancelacion" v-model="form.tipoSolicitud" value="cancelacion">
                    <label for="cancelacion">Cancelación/Supresión: Solicito eliminar mis datos personales.</label>
                </div>
                <div>
                    <input type="radio" id="oposicion" v-model="form.tipoSolicitud" value="oposicion">
                    <label for="oposicion">Oposición: Solicito oponerme al tratamiento de mis datos personales.</label>
                </div>
                <div>
                    <input type="radio" id="portabilidad" v-model="form.tipoSolicitud" value="portabilidad">
                    <label for="portabilidad">Portabilidad: Solicito la portabilidad de mis datos personales.</label>
                </div>
            </div>
            

            <div v-if="form.tipoSolicitud.includes('acceso')" class="mb-3">
                <label class="form-label">Motivos de la Solicitud - Acceso</label>
                <div>
                    <input type="radio" id="acceso_datos" v-model="form.motivosAcceso" value="acceso_datos">
                    <label for="acceso_datos">Para conocer qué datos personales tiene la empresa sobre mí.</label>
                </div>
                <div>
                    <input type="radio" id="acceso_origen" v-model="form.motivosAcceso" value="acceso_origen">
                    <label for="acceso_origen">Para conocer el origen y la finalidad del tratamiento de mis datos.</label>
                </div>
                <div>
                    <input type="radio" id="acceso_exactitud" v-model="form.motivosAcceso" value="acceso_exactitud">
                    <label for="acceso_exactitud">Para verificar la exactitud de mis datos personales.</label>
                </div>
                <div>
                    <input type="radio" id="acceso_otro" v-model="form.motivosAcceso" value="acceso_otro">
                    <label for="acceso_otro">Otro (especifique):</label>
                    <textarea class="form-control" v-model="form.motivosAccesoOtro" rows="2" placeholder="Especifique otro motivo, si aplica"></textarea>
                </div>
            </div>

            <div v-if="form.tipoSolicitud.includes('rectificacion')" class="mb-3">
                <label class="form-label">Motivos de la Solicitud - Rectificación</label>
                <div>
                    <input type="radio" id="rectificacion_inexactos" v-model="form.motivosRectificacion" value="rectificacion_inexactos">
                    <label for="rectificacion_inexactos">Datos personales inexactos.</label>
                </div>
                <div>
                    <input type="radio" id="rectificacion_incompletos" v-model="form.motivosRectificacion" value="rectificacion_incompletos">
                    <label for="rectificacion_incompletos">Datos personales incompletos.</label>
                </div>
                <div>
                    <input type="radio" id="rectificacion_desactualizados" v-model="form.motivosRectificacion" value="rectificacion_desactualizados">
                    <label for="rectificacion_desactualizados">Datos personales desactualizados.</label>
                </div>
                <div>
                    <input type="radio" id="rectificacion_otro" v-model="form.motivosRectificacion" value="rectificacion_otro">
                    <label for="rectificacion_otro">Otro (especifique):</label>
                    <textarea class="form-control" v-model="form.motivosRectificacionOtro" rows="2" placeholder="Especifique otro motivo, si aplica"></textarea>
                </div>
            </div>

            <div v-if="form.tipoSolicitud.includes('cancelacion')" class="mb-3">
                <label class="form-label">Motivos de la Solicitud - Cancelación/Supresión</label>
                <div>
                    <input type="radio" id="cancelacion_necesarios" v-model="form.motivosCancelacion" value="cancelacion_necesarios">
                    <label for="cancelacion_necesarios">Los datos ya no son necesarios para los fines para los que fueron recogidos.</label>
                </div>
                <div>
                    <input type="radio" id="cancelacion_retira" v-model="form.motivosCancelacion" value="cancelacion_retira">
                    <label for="cancelacion_retira">He retirado mi consentimiento para el tratamiento de mis datos.</label>
                </div>
                <div>
                    <input type="radio" id="cancelacion_ilicito" v-model="form.motivosCancelacion" value="cancelacion_ilicito">
                    <label for="cancelacion_ilicito">El tratamiento de mis datos es ilícito.</label>
                </div>
                <div>
                    <input type="radio" id="cancelacion_otro" v-model="form.motivosCancelacion" value="cancelacion_otro">
                    <label for="cancelacion_otro">Otro (especifique):</label>
                    <textarea class="form-control" v-model="form.motivosCancelacionOtro" rows="2" placeholder="Especifique otro motivo, si aplica"></textarea>
                </div>
            </div>

            <div v-if="form.tipoSolicitud.includes('oposicion')" class="mb-3">
                <label class="form-label">Motivos de la Solicitud - Oposición</label>
                <div>
                    <input type="radio" id="oposicion_mercadotecnia" v-model="form.motivosOposicion" value="oposicion_mercadotecnia">
                    <label for="oposicion_mercadotecnia">El tratamiento de mis datos personales se utiliza para fines de mercadotecnia directa.</label>
                </div>
                <div>
                    <input type="radio" id="oposicion_derechos" v-model="form.motivosOposicion" value="oposicion_derechos">
                    <label for="oposicion_derechos">El tratamiento de mis datos personales afecta mis derechos y libertades fundamentales.</label>
                </div>
                <div>
                    <input type="radio" id="oposicion_otro" v-model="form.motivosOposicion" value="oposicion_otro">
                    <label for="oposicion_otro">Otro (especifique):</label>
                    <textarea class="form-control" v-model="form.motivosOposicionOtro" rows="2" placeholder="Especifique otro motivo, si aplica"></textarea>
                </div>
            </div>

            <div v-if="form.tipoSolicitud.includes('portabilidad')" class="mb-3">
                <label class="form-label">Motivos de la Solicitud - Portabilidad</label>
                <div>
                    <input type="radio" id="portabilidad_transferir" v-model="form.motivosPortabilidad" value="portabilidad_transferir">
                    <label for="portabilidad_transferir">Para transferir mis datos personales a otro responsable del tratamiento.</label>
                </div>
                <div>
                    <input type="radio" id="portabilidad_copia" v-model="form.motivosPortabilidad" value="portabilidad_copia">
                    <label for="portabilidad_copia">Para obtener una copia de mis datos personales en un formato estructurado y de uso común.</label>
                </div>
                <div>
                    <input type="radio" id="portabilidad_otro" v-model="form.motivosPortabilidad" value="portabilidad_otro">
                    <label for="portabilidad_otro">Otro (especifique):</label>
                    <textarea class="form-control" v-model="form.motivosPortabilidadOtro" rows="2" placeholder="Especifique otro motivo, si aplica"></textarea>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Documentación Adjunta (Marque con una X)</label>
                <div>
                    <input type="checkbox" id="cedula_copia" v-model="form.documentacionAdjunta" value="cedula">
                    <label for="cedula_copia">Copia de cédula</label>
                </div>
                <div>
                    <input type="checkbox" id="documentacion_soporte" v-model="form.documentacionAdjunta" value="documentacion_soporte">
                    <label for="documentacion_soporte">Documentación de Soporte a la solicitud</label>
                    <textarea class="form-control" v-model="form.documentacionSoporte" rows="2" placeholder="Especifique la documentación de soporte, si aplica"></textarea>
                </div>
            </div>

<div class="mb-3">
    <label for="detallesSolicitud" class="form-label">Detalles de la Solicitud</label>
    <textarea class="form-control" id="detallesSolicitud" v-model="form.detallesSolicitud" rows="3"></textarea>
</div>

<div class="mb-3">
    <label class="form-label">Declaración (Marque con una X)</label>
    <div>
      <input type="checkbox" id="declaracion_verdad" v-model="form.declaracion" value="Declaro que la información proporcionada en este formulario es verdadera y completa, y en el caso de representar a un tercero, tengo autorización para hacerlo.">
      <label for="declaracion_verdad">Declaro que la información proporcionada en este formulario es verdadera y completa, y en el caso de representar a un tercero, tengo autorización para hacerlo.</label>
    </div>
    <div>
      <input type="checkbox" id="declaracion_identidad" v-model="form.declaracion" value="Entiendo que la empresa podrá solicitar información adicional para verificar mi identidad y procesar mi solicitud.">
      <label for="declaracion_identidad">Entiendo que la empresa podrá solicitar información adicional para verificar mi identidad y procesar mi solicitud.</label>
    </div>
    <div>
      <input type="checkbox" id="declaracion_consiento" v-model="form.declaracion" value="Consiento el tratamiento de mis datos personales para las finalidades que impliquen esta solicitud.">
      <label for="declaracion_consiento">Consiento el tratamiento de mis datos personales para las finalidades que impliquen esta solicitud.</label>
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">Términos y Condiciones</label>
    <div>
        <input type="checkbox" id="terminos_condiciones" v-model="form.terminosCondiciones" value="He leído y acepto los términos y condiciones.">
        <label for="terminos_condiciones">He leído y acepto los términos y condiciones.</label>
    </div>
    <div>
        <input type="checkbox" id="politica_privacidad" v-model="form.politicaPrivacidad" value="He leído y acepto la política de privacidad.">
        <label for="politica_privacidad">He leído y acepto la política de privacidad.</label>
    </div>
</div>

            <button type="submit" class="btn btn-primary">Enviar Solicitud</button>
        </form>
    </div>

</body>

</html>
 
</template>

<script>
  export default {
    name: 'FormularioComponent',
    data() {
  return {
    form: {
      nombre: '',
      cedula: '',
      correo: '',
      telefono: '',
      relacion: '',
      relacionRadio: '',
      tipoSolicitud: '',
      motivosAcceso: '',
      motivosAccesoOtro: '',
      motivosRectificacion: '',
      motivosRectificacionOtro: '',
      motivosCancelacion: '',
      motivosCancelacionOtro: '',
      motivosOposicion: '',
      motivosOposicionOtro: '',
      motivosPortabilidad: '',
      motivosPortabilidadOtro: '',
      documentacionAdjunta: [],
      documentacionSoporte: '',
      detallesSolicitud: '',
      declaracion: [],
      terminosCondiciones: false,
      politicaPrivacidad: false,
    },
    submitted: false
  };
},

    methods: {
      submitForm() {
        this.submitted = true;
        let formData = `
          Nombre: ${this.form.nombre}
          Cédula/Pasaporte: ${this.form.cedula}
          Correo: ${this.form.correo}
          Teléfono: ${this.form.telefono}
          Relación con la Empresa: ${this.form.relacion}
          Relación Seleccionada: ${this.form.relacionRadio}
          Tipo de Solicitud: ${this.form.tipoSolicitud}
          Motivos de la Solicitud: ${this.getMotivos()}
          Documentación Adjunta: ${this.form.documentacionAdjunta.join(', ')}
          Detalles de la Solicitud: ${this.form.detallesSolicitud}
          Declaración: ${this.getDeclaracion()}
        `;
        alert(formData);
      },
      getMotivos() {
        if (this.form.tipoSolicitud === 'acceso') {
          return this.form.motivosAcceso ? this.form.motivosAcceso : 'No especificado';
        } else if (this.form.tipoSolicitud === 'rectificacion') {
          return this.form.motivosRectificacion ? this.form.motivosRectificacion : 'No especificado';
        } else if (this.form.tipoSolicitud === 'cancelacion') {
          return this.form.motivosCancelacion ? this.form.motivosCancelacion : 'No especificado';
        } else if (this.form.tipoSolicitud === 'oposicion') {
          return this.form.motivosOposicion ? this.form.motivosOposicion : 'No especificado';
        } else if (this.form.tipoSolicitud === 'portabilidad') {
          return this.form.motivosPortabilidad ? this.form.motivosPortabilidad : 'No especificado';
        }
        return 'No especificado';
      },
      getDeclaracion() {
        return this.form.declaracion.length ? this.form.declaracion.join(', ') : 'No seleccionada';
      }
    }
  };
  </script>
  <style>
  :root {
    --cnt-primary: #009FE3;   
    --cnt-secondary: #00AEEF;  
    --cnt-accent: #46C0FF;      
    --cnt-dark: #0072A8;      
    --cnt-light: #E6F7FF;       
    --cnt-gray: #F0F5F9;        
  }
  
  
  body {
    background: linear-gradient(135deg, var(--cnt-light) 0%, #ffffff 100%);
    font-family: 'Nunito', 'Arial', sans-serif;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: #333;
    overflow-x: hidden;
  }
  

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(0, 159, 227, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(0, 159, 227, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 159, 227, 0); }
  }
  
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  

  #app {
    max-width: 850px;
    margin: 40px auto;
    background-color: #fff;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 15px 35px rgba(0, 159, 227, 0.15);
    animation: fadeInUp 0.8s ease-out;
    border-top: 5px solid var(--cnt-primary);
    position: relative;
    overflow: hidden;
  }
  
 
  #app::before {
    content: 'CNT';
    position: absolute;
    bottom: -20px;
    right: 0;
    font-size: 180px;
    font-weight: 800;
    color: rgba(0, 159, 227, 0.03);
    z-index: 0;
    line-height: 1;
  }
  

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--cnt-light);
    padding-bottom: 20px;
    position: relative;
  }
  
  .form-header::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--cnt-primary), var(--cnt-accent), var(--cnt-primary));
    background-size: 200% 200%;
    animation: gradientMove 5s ease infinite;
  }
  
  .cnt-logo {
    position: absolute;
    top: 15px;
    right: 25px;
    height: 50px;
    animation: float 6s ease-in-out infinite;
  }
  

  h2 {
    font-size: 28px;
    color: var(--cnt-primary);
    font-weight: 700;
    margin-bottom: 10px;
    position: relative;
    padding-left: 15px;
  }
  
  h2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 5px;
    background-color: var(--cnt-primary);
    border-radius: 3px;
  }
  
 
  .form-subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 30px;
    padding-left: 15px;
  }
  

  .form-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    border-left: 4px solid var(--cnt-primary);
    transition: all 0.3s ease;
    animation: fadeInUp 0.8s ease-out;
    animation-fill-mode: both;
  }
  
  .form-section:hover {
    box-shadow: 0 8px 20px rgba(0, 159, 227, 0.15);
    transform: translateY(-3px);
  }
  

  .form-section:nth-child(1) { animation-delay: 0.1s; }
  .form-section:nth-child(2) { animation-delay: 0.2s; }
  .form-section:nth-child(3) { animation-delay: 0.3s; }
  .form-section:nth-child(4) { animation-delay: 0.4s; }
  .form-section:nth-child(5) { animation-delay: 0.5s; }

  .section-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--cnt-dark);
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .section-title::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: var(--cnt-accent);
    border-radius: 50%;
    margin-right: 10px;
  }
  
  
  .form-label {
    font-weight: 600;
    color: #444;
    margin-bottom: 8px;
    display: block;
    font-size: 15px;
  }
  
  .form-control {
    border-radius: 10px;
    border: 2px solid #e9ecef;
    padding: 12px 15px;
    font-size: 16px;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
    background-color: #fdfdfd;
  }
  
  .form-control:focus {
    border-color: var(--cnt-primary);
    box-shadow: 0 0 0 4px rgba(0, 159, 227, 0.15);
    outline: none;
  }
  
  .form-control:hover {
    border-color: #d0d4d9;
  }
  

  select.form-control {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23009FE3' d='M8 12L2 6h12z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;
    padding-right: 40px;
  }
  
  select.form-control:focus {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23009FE3' d='M8 4l6 6H2z'/%3E%3C/svg%3E");
  }
  

  .input-group {
    position: relative;
  }
  
  .input-group .form-control {
    padding-left: 45px;
  }
  
  .input-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #adb5bd;
    transition: all 0.3s ease;
  }
  
  .input-group .form-control:focus + .input-icon {
    color: var(--cnt-primary);
  }
  

  .radio-group,
  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 10px;
  }
  
  .radio-option,
  .checkbox-option {
    display: flex;
    align-items: flex-start;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;
    transition: all 0.25s ease;
    border-radius: 8px;
    padding: 12px 12px 12px 40px;
  }
  
  .radio-option:hover,
  .checkbox-option:hover {
    background-color: var(--cnt-gray);
  }
  

  .radio-option input,
  .checkbox-option input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  
 
  .radio-checkmark {
    position: absolute;
    top: 12px;
    left: 10px;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 50%;
    transition: all 0.2s ease;
  }
  
  .radio-option:hover input ~ .radio-checkmark {
    border-color: #b3b3b3;
  }
  
  .radio-option input:checked ~ .radio-checkmark {
    background-color: white;
    border-color: var(--cnt-primary);
  }
  
  .radio-checkmark:after {
    content: "";
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--cnt-primary);
  }
  
  .radio-option input:checked ~ .radio-checkmark:after {
    display: block;
    animation: pulse 1.5s infinite;
  }
  

  .checkbox-checkmark {
    position: absolute;
    top: 12px;
    left: 10px;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 4px;
    transition: all 0.2s ease;
  }
  
  .checkbox-option:hover input ~ .checkbox-checkmark {
    border-color: #b3b3b3;
  }
  
  .checkbox-option input:checked ~ .checkbox-checkmark {
    background-color: var(--cnt-primary);
    border-color: var(--cnt-primary);
  }
  
  .checkbox-checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  
  .checkbox-option input:checked ~ .checkbox-checkmark:after {
    display: block;
  }
  
 
  [v-if] {
    background-color: var(--cnt-light);
    border-radius: 12px;
    padding: 20px;
    margin-top: 15px;
    border-left: 3px solid var(--cnt-accent);
    animation: fadeInUp 0.5s ease-out;
  }
  

  textarea.form-control {
    min-height: 100px;
    resize: vertical;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #e9ecef;
  }
  

  .btn-primary {
    background: linear-gradient(45deg, var(--cnt-dark), var(--cnt-primary));
    border: none;
    padding: 14px 30px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(0, 159, 227, 0.3);
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  
  .btn-primary:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }
  
  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(0, 159, 227, 0.4);
    background: linear-gradient(45deg, var(--cnt-primary), var(--cnt-accent));
  }
  
  .btn-primary:hover:before {
    left: 100%;
  }
  
  .btn-primary:active {
    transform: translateY(0);
  }
  
 
  .progress-bar {
    height: 3px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, var(--cnt-primary), var(--cnt-accent), var(--cnt-primary));
    background-size: 200% 200%;
    animation: gradientMove 2s ease infinite;
    z-index: 1000;
  }

  @media (max-width: 768px) {
    #app {
      margin: 20px;
      padding: 25px;
    }
    
    h2 {
      font-size: 22px;
    }
    
    .form-section {
      padding: 20px;
    }
    
    .btn-primary {
      padding: 12px 20px;
    }
    
    .cnt-logo {
      height: 40px;
    }
  }

  .mb-3 {
    margin-bottom: 1.5rem !important;
  }

  .mb-3 {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px !important;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    border-left: 4px solid var(--cnt-primary);
    transition: all 0.3s ease;
  }
  
  .mb-3:hover {
    box-shadow: 0 8px 20px rgba(0, 159, 227, 0.15);
    transform: translateY(-3px);
  }
  

  input[type="radio"] + label,
  input[type="checkbox"] + label {
    display: inline-flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: normal;
    transition: all 0.2s ease;
    padding: 8px 12px;
    border-radius: 6px;
  }
  
  input[type="radio"]:checked + label,
  input[type="checkbox"]:checked + label {
    background-color: var(--cnt-light);
    color: var(--cnt-dark);
    font-weight: 500;
  }
  

  @keyframes loading {
    0% { width: 0; }
    50% { width: 65%; }
    100% { width: 100%; }
  }
  
  body:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    width: 0;
    background: linear-gradient(90deg, var(--cnt-primary), var(--cnt-accent));
    z-index: 9999;
    animation: loading 2s ease-out forwards;
  }
  

  #app::after {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40'%3E%3Cpath fill='%23009FE3' d='M20 10h60v20H20z'/%3E%3Ctext x='50' y='25' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3ECNT%3C/text%3E%3C/svg%3E");
    position: absolute;
    top: 20px;
    right: 20px;
    width: 80px;
    height: 30px;
    opacity: 0.8;
  }
</style>



