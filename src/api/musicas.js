import axios from 'axios'

export default class MusicasAPI {
  async buscarTodasAsMusicas() {
    const { data } = await axios.get('/musicas/')
    return data
  }
  async adicionarMusica(musica) {
    const { data } = await axios.post('/musicas/', musica)
    return data
  }
  async atualizarMusica(musica) {
    const { data } = await axios.put(`/musicas/${musica.id}/`, musica)
    return data
  }
  async excluirMusica(id) {
    const { data } = await axios.delete(`/musicas/${id}/`)
    return data
  }
}
