<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="6"
    >
      <v-container>
        <div class="mt-5 mb-7 text-center">
          <h3 class="text-h4 mb-3 font-weight-bold">
            Create Blog
          </h3>

          <p class="text-grey">
            Please fill the form below to create a new blog post.
          </p>
        </div>

        <v-form
          v-model="isFormValid"
          validate-on="lazy"
          class="my-5"
          @submit.prevent="validateAndCreate"
        >
          <v-row class="mb-2">
            <v-col
              cols="12"
              md="12"
            >
              <v-text-field
                v-model="formValues.title"
                :rules="fieldRules('Title')"
                :prepend-inner-icon="mdiNoteOutline"
                required
                rounded="lg"
                label="Title"
                variant="underlined"
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="formValues.author"
                :rules="fieldRules('Author')"
                :prepend-inner-icon="mdiFaceMan"
                required
                rounded="lg"
                label="Author"
                variant="underlined"
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <VDateInput
                v-model="formValues.date"
                :rules="fieldRules('Date')"
                :mode-icon="mdiMenuDown"
                :prev-icon="mdiChevronLeft"
                :next-icon="mdiChevronRight"
                :prepend-inner-icon="mdiCalendarBlankOutline"
                required
                rounded="lg"
                label="Date"
                prepend-icon=""
                variant="underlined"
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="formValues.text"
                :rules="fieldRules('Text')"
                :prepend-inner-icon="mdiText"
                required
                :rows="5"
                rounded="lg"
                label="Text"
                variant="underlined"
              />
            </v-col>
          </v-row>

          <v-btn
            block
            size="large"
            rounded="lg"
            class="mt-2"
            text="Submit"
            variant="flat"
            color="primary"
            type="submit"
          />
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import type { SubmitEventPromise } from 'vuetify';
import { VDateInput } from "vuetify/labs/VDateInput";
import {
  mdiChevronRight,
  mdiChevronLeft,
  mdiMenuDown,
  mdiNoteOutline,
  mdiFaceMan,
  mdiCalendarBlankOutline,
  mdiText,
} from "@mdi/js";


const isFormValid = ref(false);

const formValues = ref({
  date: null,
  title: "",
  author: "",
  text: "",
});


const fieldRules = (fieldName: string) => [(value: string) => {
  if (value) {
    return true;
  }

  return `${fieldName} is required.`;
}];

async function validateAndCreate (event: SubmitEventPromise) {
  await event
  alert(isFormValid.value)
}
</script>
