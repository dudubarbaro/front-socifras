<script>
import MusicasAPI from '@/api/musicas'
const musicasAPI = new MusicasAPI()
export default {
  data() {
    return {
      musicas: [],
      musica: {}
    }
  },
  async created() {
    this.musicas = await musicasAPI.buscarTodasAsMusicas()
  },
  methods: {
    async salvar() {
      if (this.musica.id) {
        await musicasAPI.atualizarMusica(this.musica)
      } else {
        await musicasAPI.adicionarMusica(this.musica)
      }
      this.musica = {}
      this.musicas = await musicasAPI.buscarTodasAsMusicas()
    },
    editar(musica) {
      Object.assign(this.musica, musica)
    },
    async excluir(musica) {
      await musicasAPI.excluirMusica(musica.id)
      this.musicas = await musicasAPI.buscarTodasAsMusicas()
    }
  }
}
</script>

<template>
  <h1>Musica</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="musica.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="musica in musicas" :key="musica.id">
      <span @click="($event) => editar(musica)">
        ({{ musica.id }}) - {{ musica.descricao }} -
      </span>
      <button @click="($event) => excluir(musica)">X</button>
    </li>
  </ul>
</template>

<style></style>
