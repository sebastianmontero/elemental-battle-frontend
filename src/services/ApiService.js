import { Api, JsonRpc, JsSignatureProvider } from 'eosjs';

async function takeAction(action, dataValue) {
    const privateKey = localStorage.getItem('cardgame_key');
    const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
    const signatureProvider = new JsSignatureProvider([privateKey]);

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
                    actor: localStorage.getItem('cardgame_account'),
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
        console.log(`error: ${error}`);
        throw error;
    }
}

class ApiService {
    static login({ username, key }) {
        localStorage.setItem('cardgame_account', username);
        localStorage.setItem('cardgame_key', key);
        return takeAction('login', { username })
            .catch((err) => {
                localStorage.removeItem('cardgame_account');
                localStorage.removeItem('cardgame_key');
                throw err;
            });
    }
}

export default ApiService;
