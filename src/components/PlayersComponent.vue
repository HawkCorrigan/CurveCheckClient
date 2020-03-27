<template>
    <div class="players">
        <h1>Boostees</h1>
        <div v-if="players.length > 0" class="table-wrap">
            <div>
                <router-link v-bind:to="{ name: 'NewPlayer' }" class="">Add Boostee</router-link>
            </div>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Realm</td>
                    <td width="100" align="center">Action</td>
                </tr>
                <tr v-for="player in players" :key="player._id">
                    <td>{{player.characterName}}</td>
                    <td>{{player.characterRealm}}</td>
                    <td align="center">
                        <router-link v-bind:to="{ name: 'EditPlayer', params: {id: player._id} }">Edit</router-link>|
                        <a href="#" @click="deletePlayer(player._id)">Delete</a>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else>
            There are no players boosted yet.... What are you even doing guys smh. <br /><br />
            <router-link v-bind:to="{name: 'NewPlayer' }" class="add_player_link">Add Boostee</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import PlayersService from '../services/PlayersService'

    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class PlayersComponent extends Vue {

        players: any = [];

        mounted(){
            this.getPlayers();
        }

        public async getPlayers() {
            const response = await PlayersService.fetchPlayers();
            this.players = response.data;
        }

        public async deletePlayer(id: number) {
            await PlayersService.deletePlayer(id);
            this.$router.push({name: 'Players'});
        }



    }
</script>

<style type="text/css">
    .table-wrap {
        width: 60%;
        margin: 0 auto;
        text-align: center;
    }
    table th, table tr {
        text-align: left;
    }
    table thead {
        background: #f2f2f2;
    }
    table tr td {
        padding: 10px;
    }
    table tr:nth-child(odd) {
        background: #f2f2f2;
    }
    table tr:nth-child(1) {
        background: #4d7ef7;
        color: #fff;
    }
    a {
        color: #4d7ef7;
        text-decoration: none;
    }
    a.add_player_link {
        background: #4d7ef7;
        color: #fff;
        padding: 10px 80px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
    }
</style>
