<template>
  <v-container>
    <v-row class="text-center">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field label="Tarea o actividad" ></v-text-field>
          </v-col>
          <v-btn class="mx-2" fab dark color="red darken-4">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
