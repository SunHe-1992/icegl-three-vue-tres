

<template>
  <Levioso>
    <primitive ref="primitiveref" :object="nodes.Pipe">
    </primitive>
  </Levioso>
</template>

<script setup lang="ts">
import { useGLTF, Levioso } from "@tresjs/cientos";
import { ref } from "vue";

const primitiveref = ref();
let modelPath = "./plugins/basic/htmls/model/pipe.glb";
const { nodes } = await useGLTF(modelPath);
</script>
