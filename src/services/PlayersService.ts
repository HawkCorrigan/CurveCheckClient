import Api from './Api'

export default {
  fetchPlayers() {
    return Api().get('players');
  },

  addPlayer (params: any) {
    return Api().post('players', params);
  },

  deletePlayer (id: number) {
    return Api().delete('players/' + id)
  },

  checkPlayer (name: string, realm: string) {
      return Api().get(`curve/${name}/${realm}`);
  }
}
