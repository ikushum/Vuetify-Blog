<template>
  <v-form
    v-model="isFormValid"
    validate-on="lazy"
    class="my-5"
    @submit.prevent="validateAndSave"
  >
    <v-row class="mb-2">
      <v-col cols="12">
        <v-text-field
          v-model="formValues.title"
          :rules="[requiredRule('Title')]"
          :prepend-inner-icon="mdiNoteOutline"
          required
          label="Title"
          variant="underlined"
        />
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="formValues.author"
          :rules="[requiredRule('Author')]"
          :prepend-inner-icon="mdiFaceMan"
          required
          label="Author"
          variant="underlined"
        />
      </v-col>

      <v-col cols="12">
        <v-textarea
          v-model="formValues.text"
          :rules="[requiredRule('Text')]"
          :prepend-inner-icon="mdiText"
          required
          :rows="5"
          label="Text"
          variant="underlined"
        />
      </v-col>
    </v-row>

    <div class="text-center mt-2">
      <v-btn
        :text="shouldEdit ? 'Update' : 'Post'"
        variant="flat"
        color="primary"
        type="submit"
        class="px-10 mx-3"
      />
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import type { SubmitEventPromise } from "vuetify";
import { mdiText, mdiFaceMan, mdiNoteOutline } from "@mdi/js";
import { generateUUID } from "@/utils/index";
import { useBlogStore } from "@/stores/blog";
import { useSnackbarStore } from "@/stores/snackbar";
import type {
  BlogFormProps,
  BlogFormValues,
  BlogPost,
} from "@/interfaces/blog";

const props = defineProps<BlogFormProps>();

const router = useRouter();
const blogStore = useBlogStore();
const snackbarStore = useSnackbarStore();

const isFormValid = ref(false);
const formValues = ref<BlogFormValues>({
  text: "",
  title: "",
  author: "",
  ...props.defaultValues,
});

const shouldEdit = computed(() => !!formValues.value.id);

const requiredRule = (field: string) => (value: string) =>
  value ? true : `${field} is required.`;

async function validateAndSave(event: SubmitEventPromise) {
  await event;

  if (!isFormValid.value) {
    return;
  }

  const payload: BlogPost = {
    id: formValues.value.id || generateUUID(),
    title: formValues.value.title,
    text: formValues.value.text,
    author: formValues.value.author,
    date: formValues.value.date || new Date().toISOString(),
  };

  shouldEdit.value ? editBlog(payload) : createBlog(payload);
}

function editBlog(payload: BlogPost) {
  blogStore.update(payload);
  showSnackbar("Your blog has been updated");
  router.push(`/blog/${payload.id}`);
}

function createBlog(payload: BlogPost) {
  blogStore.add(payload);
  showSnackbar("Your blog has been posted");
  router.push(`/blog/${payload.id}`);
}

function showSnackbar(message: string) {
  snackbarStore.show({ color: "", isOpen: true, message });
}
</script>
