<template>
  <v-container>
    <v-row class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col sm="12" class="d-flex justify-start align-center">
            <v-text-field
              color="black"
              label="Añadir tarea o actividad"
              prepend-inner-icon="mdi-notebook-outline"
              v-model="nuevaActividad"
            ></v-text-field>
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="red darken-4"
              @click="agregarActividad(nuevaActividad)"
            >
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-sheet
          id="scrolling-techniques"
          class="overflow-y-auto"
          max-height="600"
        >
          <v-container style="height: 1000px;">
            <v-row>
              <v-col
                v-for="actividad in listaActividades"
                :key="actividad.id"
                sm="12"
                class="d-flex justify-start align-center"
              >
                <v-row>
                  <v-col cols="12">
                    <v-chip
                      class="mx-2"
                      large
                      :color="colores[actividad.completada]"
                      outlined
                    >
                      <v-icon left>mdi-file-document-outline</v-icon>
                      <h1 class="headline">{{ actividad.actividad }}</h1>
                    </v-chip>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      x-small
                      color="success"
                      @click="completarActividad(actividad)"
                      outlined
                    >
                      <v-icon dark>mdi-check</v-icon>
                    </v-btn>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      x-small
                      color="blue"
                      @click="editarActividad(actividad)"
                      outlined
                    >
                      <v-icon dark>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      x-small
                      color="red"
                      @click="eliminarActividad(actividad)"
                      outlined
                    >
                      <v-icon dark>mdi-close</v-icon>
                    </v-btn>
                  </v-col>
                  <v-row justify="center">
                    <v-col v-if="actividad.editar" cols="12">
                      <v-text-field
                        color="black"
                        :disabled="!actividad.editar"
                        prepend-inner-icon="mdi-file-document-outline"
                        v-model="actividad.actividad"
                      ></v-text-field>
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        x-small
                        color="success"
                        @click="confirmar(actividad)"
                      >
                        <v-icon dark>mdi-check</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        x-small
                        color="red"
                        @click="cancelar(actividad)"
                      >
                        <v-icon dark>mdi-close</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../firebase/firebase";

export default {
  name: "HelloWorld",

  data: () => ({
    nuevaActividad: "",
    colores: ["orange darken-3", "green darken-2"],
    listaActividades: [
      {
        id: 1,
        actividad: "Pasear",
        completada: 0,
        editar: false,
      },
    ],
  }),
  methods: {
    agregarActividad(actividad) {
      var nuevallave = db.ref("actividades").push().key;
      db.ref("actividades/" + nuevallave).set({
        id: nuevallave,
        actividad: actividad,
        completada: 0,
        editar: false,
      });
      this.nuevaActividad = "";
      alert("Actividad agregada exitosamente!");
    },
    eliminarActividad(actividad) {
      db.ref("actividades/" + actividad.id).remove();
      alert("Actividad eliminada exitosamente...");
    },
    editarActividad(actividad) {
      actividad.editar = true;
    },
    cancelar(actividad) {
      actividad.editar = false;
    },
    confirmar(actividad) {
      var actualizar = {};
      actualizar["/actividades/" + actividad.id] = actividad;
      actividad.editar = false;
      db.ref().update(actualizar, function(error) {
        if (error) {
          // The write failed...
        } else {
          alert("Actividad actualizada correctamente!");
        }
      });
    },
    completarActividad(actividad) {
      actividad.completada = 1;
      var actualizar = {};
      actualizar["/actividades/" + actividad.id] = actividad;

      db.ref().update(actualizar, function(error) {
        if (error) {
          alert("No se puedo actualizar");
        } else {
          alert("Actividad completada correctamente");
        }
      });
    },
  },
  firebase: {
    listaActividades: db.ref("actividades"),
  },
};
</script>
