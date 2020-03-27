<template>
    <div class="players">
        <h1>Add Player</h1>
        <div class="form">
            <div>
                <input type="text" name="characterName" placeholder="NAME" v-model="characterName" />
            </div>
            <div>
                <input type="text" name="characterRealm" placeholder="REALM" v-model="characterRealm" />
            </div>
            <div>
                <button class="app_post_btn" @click="login">Login</button>
                <button class="app_post_btn" @click="checkPlayer">Check</button>
                <p>HAT ER NU CURVE?!?:{{result}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import PlayersService from '../services/PlayersService'
    import axios from 'axios'

    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class NewPlayerComponent extends Vue {

        characterName = null;
        characterRealm = null;
        result = null;

        public async checkPlayer() {
            const answer: any = fetch(`http://localhost:8081/curve/${this.characterName}/${this.characterRealm}`, { redirect: 'follow'});
            this.result = answer.data;
        }

        public async login() {
            axios.get(`http://localhost:8081/auth/bnet`)
                .then(null);
        }

        public async addPlayer() {
            await PlayersService.addPlayer({
                characterName: this.characterName,
                characterRealm: this.characterRealm,
            });
            this.$router.push({name: 'Players'})
        }
    }
</script>
