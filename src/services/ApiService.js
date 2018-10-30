import { Api, JsonRpc, JsSignatureProvider } from 'eosjs';
import LStorage from './LStorage';

async function takeAction(action, dataValue) {
    const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
    const signatureProvider = new JsSignatureProvider([LStorage.cardgameKey()]);

    const api = new Api({
        rpc,
        signatureProvider,
        textEncoder: new TextEncoder(),
        textDecoder: new TextDecoder(),
    });

    try {
        const resultWithConfig = await api.transact({
            actions: [{
                account: process.env.REACT_APP_EOS_CONTRACT_NAME,
                name: action,
                authorization: [{
                    actor: LStorage.cardgameAccount(),
                    permission: 'active',
                }],
                data: dataValue,
            }],
        },
        {
            blocksBehind: 3,
            expireSeconds: 30,
        });

        return resultWithConfig;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

class ApiService {
    static async login({ username, key }) {
        LStorage.setCardgameAccount(username);
        LStorage.setCardgameKey(key);
        return takeAction('login', { username })
            .catch((err) => {
                LStorage.removeCardgameAccount();
                LStorage.removeCardgameKey();
                throw err;
            });
    }

    static async startGame(username) {
        return takeAction('startgame', { username });
    }

    static async playCard(username, cardIdx) {
        return takeAction('playcard', { username, player_card_idx: cardIdx });
    }

    static async getUserByName(username) {
        try {
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                code: process.env.REACT_APP_EOS_CONTRACT_NAME,
                scope: process.env.REACT_APP_EOS_CONTRACT_NAME,
                json: true,
                limit: 1,
                lower_bound: username,
                table: 'users',
            });
            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default ApiService;
